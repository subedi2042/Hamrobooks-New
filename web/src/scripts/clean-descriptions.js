const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../data/books.ts');

function stripHtml(html) {
    if (!html) return "";
    // Remove HTML tags
    let text = html.replace(/<[^>]*>?/gm, '');
    // Replace common entities
    text = text.replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    return text.trim();
}

let content = fs.readFileSync(booksPath, 'utf8');

// The books array is exported as: export const books: Book[] = [...];
// I'll parse it using a regex or just evaluate it if safe, 
// but since it's TS, I'll use a safer approach: regex for the synopsis field.

const synopsisRegex = /synopsis:\s*"(.*?)"(?=,|$)/gs;
const cleanedContent = content.replace(synopsisRegex, (match, p1) => {
    // Escaped quotes in titles are handled by the non-greedy match, 
    // but the CSV script used double quotes for the string.
    // If there are internal quotes, they were likely escaped as \"
    const cleaned = stripHtml(p1.replace(/\\"/g, '"')).replace(/"/g, '\\"');
    return `synopsis: "${cleaned}"`;
});

fs.writeFileSync(booksPath, cleanedContent);
console.log("Cleaned HTML from books.ts descriptions.");
