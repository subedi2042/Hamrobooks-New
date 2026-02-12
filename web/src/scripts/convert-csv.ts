import fs from 'fs';
import path from 'path';

function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}

function parseCSV(content: string) {
    const lines = content.split(/\r?\n/);
    const headers = parseCSVLine(lines[0]);
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const values = parseCSVLine(lines[i]);
        const row: any = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        rows.push(row);
    }
    return rows;
}

const csvPath = '/Users/dipendrasubedi/Desktop/Antigravity works/Hamrobooks New/Data imported/Products-2026-02-12.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const rawData = parseCSV(csvContent);

const books = rawData.map((row: any) => {
    let title = row['Product Title'] || '';
    let author = 'Unknown Author';
    let nepaliTitle = '';

    // Try to extract author from title "Title by Author" or "Title (Nepali) by Author"
    if (title.includes(' by ')) {
        const parts = title.split(' by ');
        title = parts[0].trim();
        author = parts[1].trim();
    }

    // Try to extract nepaliTitle from title "English (Nepali)"
    const nepaliMatch = title.match(/\(([^)]+)\)/);
    if (nepaliMatch) {
        nepaliTitle = nepaliMatch[1].trim();
        title = title.replace(/\([^)]+\)/, '').trim();
    }

    // Further author extraction from description if still Unknown
    const description = row['Description'] || '';
    if (author === 'Unknown Author') {
        const descAuthorMatch = description.match(/by\s+([^<.,\n]+)/i);
        if (descAuthorMatch) {
            author = descAuthorMatch[1].trim();
        }
    }

    return {
        id: row['Product ID'] || Math.random().toString(36).substr(2, 9),
        title: title,
        nepaliTitle: nepaliTitle || undefined,
        author: author,
        price: parseFloat(row['Price']) || 0,
        image: row['Default Image'] || '',
        genre: row['Category'] || 'General',
        synopsis: description,
        inventory: parseInt(row['Inventory On Hand']) || 0
    };
});

console.log(JSON.stringify(books.slice(0, 5), null, 2));

// Also generate the books.ts content
const fileContent = `export interface Book {
    id: string;
    title: string;
    nepaliTitle?: string;
    author: string;
    price: number;
    originalPrice?: number;
    image: string;
    images?: string[];
    genre: string;
    isNew?: boolean;
    pages?: number;
    language?: string;
    format?: string;
    rating?: number;
    reviews?: string;
    synopsis?: string;
    authorBio?: string;
    authorImage?: string;
}

export const books: Book[] = ${JSON.stringify(books, null, 4)};
`;

fs.writeFileSync('/Users/dipendrasubedi/Desktop/Antigravity works/Hamrobooks New/web/src/data/books.ts', fileContent);
console.log('Successfully updated src/data/books.ts');
