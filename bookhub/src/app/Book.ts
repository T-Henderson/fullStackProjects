export interface Book {
    id?: number;//put there just in case. might use later for actual database connection
    isbn: string;//angular doesn't like octal literals, so changed to string
    bookTitle: string;
    bookAuthor: string;
    bookDescription: string;
    bestSeller: boolean;
    newArrival: boolean;
}