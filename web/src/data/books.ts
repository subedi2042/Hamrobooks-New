export interface Book {
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

export const books: Book[] = [
    {
        id: "1",
        title: "Muna Madan",
        nepaliTitle: "मुनामदन",
        author: "Laxmi Prasad Devkota",
        price: 18.99,
        originalPrice: 24.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR_Jczou_n6jlIMQH0vSeA28W4CjJQA0MDoafmJ8QeGcBfyAniDCqYNFZVl_oFPndZtZdpPz_jEaVlrDe5-6g7GQHhtujLInCSqtpG4wrjzioA9j2hINkPsWrPAFBFu2XAjJM5GKG9NYyfkbPst-Rs6XPqlZCmKB7B5vI5Yb0wzwFBjWET4SVzQltvKjIRLAxJkV5bz6zdHNajJeIjqjui_vACmw8MZS4G48vj-oWihj0tGpOtTxx0RyLKkIvys-ofA4btOJa_o2U",
        genre: "Classics",
        isNew: true,
        pages: 120,
        language: "Nepali",
        format: "Paperback",
        rating: 4.8,
        reviews: "1.5k",
        synopsis: "Muna Madan is a legendary Nepali mahakavya (epic poem) written by Mahakavi Laxmi Prasad Devkota. It is one of the most popular works of Nepali literature, depicting the tragic story of Madan who goes to Tibet to earn money, leaving his beloved wife Muna behind.",
        authorBio: "Laxmi Prasad Devkota was a Nepali poet, playwright, and novelist. Honored with the title of Mahakavi (Great Poet) in Nepali literature, he was known for his incredible speed of composition and fusion of traditional and modern elements.",
        authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIZLzCfiQMWSsvu5_eFw2Dl0NqpvLVPgdOAsp6IK7DoQ94mdG2x7JwGHUn7rVdX9wxJL51pKNYRIhNe0NifCnl-V5yHIy1MNijrhY7W-eNv6MN2SGvTFhGYrcbYyOuYGkMh8Ajh3Jd896kcSZxHZEOHAPhYFwHrRG4SwQwVY_vQpM1I4a3MV4BjWyDp-yLUHjoyou9g7em69dkUHO6QKykKFp_8XTVgbC9KpZ9WURTUbV05pGThEJbVXf-OMrobV9Tq_zyXboyWPI"
    },
    {
        id: "2",
        title: "Karnali Blues",
        nepaliTitle: "कर्नाली ब्लुज",
        author: "Buddhisagar",
        price: 18.99,
        originalPrice: 24.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCay8dcmAGwyAuKUwWewnQ4Ro_JsitLCMkz16uI65_v9Phy_6EoJAK_bUITue1XXlh6pS58sS13Wx8Ybucz0jbxNYB57Xl5WwHoVY9rkQPxhiAzhAdqJBJY31Plm2GRg6fkL2DMhj5o5U7m9VTOmKID-N6fomDdPZqxwuckBxrfZzm9OmcGBeM2I1RbhVHNv_mL2rje5oivTDlNqRt4Ovtv8v9A4DexeMZIm661biAp25LacGufO8MIgX5eKw7TVLlrsWu9UdbjS4",
        genre: "Fiction",
        isNew: true,
        pages: 416,
        language: "Nepali",
        format: "Paperback",
        rating: 4.2,
        reviews: "1.2k",
        synopsis: "Karnali Blues is a masterpiece of contemporary Nepali literature. It is a story of a son's love for his father, told through a series of flashbacks as the son sits by his dying father's bedside. Set in the remote regions of Western Nepal, it captures the rugged beauty and harsh reality of life in the Karnali region.",
        authorBio: "Buddhisagar is one of Nepal's most acclaimed modern novelists. Born in Kailali, his writing often reflects the soulful essence of rural Nepal.",
        authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHyKC1QVEeMUMkesYAqgsZZ2hlL8BPslC_Y_z9riazT-sOtaXdJoEYl6HiMwjHFFIscDYUF6a4GkhhdtsY3Tnj1rjSGbZ5qYOjSn6tFfOTvk82-iHJ57kl7zN9VAeOpTJXCkk2JUnJNWfjOoUUA-27EFWwi0OEVGiB406qQxj3iQdMO3WbtaPBG4a765gotsmk1NPdDynvOaT5hgV1IuoGDE-3SQIuB07ntf-dDfbIqnJGnmNlwR_ueEvEDD4S0aR-eb168tkqcAU"
    },
    {
        id: "3",
        title: "Seto Dharti",
        author: "Amar Neupane",
        price: 16.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVYa7lKOuRS7EGzay481BZw52HiiH7TctvATtLrE2dcrb9sKDiu3xS5FH4M2XOHjBvVAywrrpAx-WRdGAssqUZLrogVz7e2dA8-Rjrc-r2MKcBbmh5jeTkdOBEbvIDywtnr4d5BD6-DpMv7dnELYjbA5aIvBKjAFPtKPvJGs0ECjAvGfdU8eZlV2j-1GP0bJ1YyYVweW0ZFb5_mNmuSWpEdMAjVtY4fTI9l2iqztyXEjGXqMnX1WEspTJX2IPXCtu7JkbYtmTcfjk",
        genre: "Fiction",
        rating: 4.5,
        reviews: "800",
        synopsis: "Seto Dharti is a heartwarming and heartbreaking novel that portrays the life of a child widow in rural Nepal. It beautifully captures the social struggles and resilience of women in traditional Nepali society."
    },
    {
        id: "4",
        title: "Palpasa Cafe",
        author: "Narayan Wagle",
        price: 19.95,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEQhtvw2iAxnQe7qCBgP41NZmzmy3Yh7g-DN-_WbESAfWwOxxOdr7_FgQuLvXQxcLdoyniobUchLjjArUfj9xcldRLaFzubygIbVgM6rwbnP7kKAjLX9e1t3BHuOh9O8ur2GAqBxknUg_VFc69kHS4TYDf1TlcmzjneTvyt_qBMI7RXtnuaKKu_gqOgUourTYdQ4zjA4fTPNxmxmmT1K9s0Ev-J61K0KKOW7LWeeY9S51aOjJxgFhncTvpbEFzqeK3lVpjk81Jr2A",
        genre: "Fiction",
        rating: 4.7,
        reviews: "2k",
        synopsis: "Palpasa Cafe is a novel about the Nepali Civil War. It tells the story of an artist, Drishya, and his experiences during the conflict, blending romance, art, and the harsh realities of war."
    }
];
