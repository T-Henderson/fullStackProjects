import { Book } from "./Book";

export const BOOKS: Book[] = [
    {
        id: 1,
        isbn: '0312924585',
        bookTitle: 'The Silence of the Lambs',
        bookAuthor: 'Thomas Harris',
        bookDescription: "Clarice Starling, a young up and coming FBI agent, is sent to interview Hannibal Lecter. Lecter is a lover of arts, exquisite food, and a cannibalistic psychiatrist. Together they they try to stop another serial killer, but Clarice must answer Hannibals questions before he will answer hers.",
        bestSeller: true,
        newArrival: false
    },
    {
        id:  2,
        isbn: '1615243488',
        bookTitle: 'Dracula',
        bookAuthor: 'Bram Stoker',
        bookDescription: 'Jonathan Harker is sent from England to Transylvania to meet the mysterious Count Dracula. During his journey there, he hears many things about the count from local villagers. He pays it no mind until a few days into his stay he realizes the rumors might be true...',
        bestSeller: true,
        newArrival: false
    },
    {
        id: 3,
        isbn: '1566190916',
        bookTitle: 'Frankenstein',
        bookAuthor: 'Mary Shelley',
        bookDescription: 'The hubris of man will always be our downfall. The Creation of man, will always outlive us but will the unknown?',
        bestSeller: true,
        newArrival: false
    },
    {
        id: 4,
        isbn: '9780143039990',
        bookTitle: 'War and Peace',
        bookAuthor: 'Leo Tolstoy',
        bookDescription: 'Russia during the moments of the Tsar, family matters, war.',
        bestSeller: true,
        newArrival: false
    },
    {
        id: 5,
        isbn: '9781580054744',
        bookTitle: 'Bi: Notes for a Bisexual Revolution',
        bookAuthor: 'Shiri Eisner',
        bookDescription: 'In a forward-thinking and eye-opening examination, Shiri Eisner informs and breaks down common stereotypes and misinformation regarding bisexuality. Eisner, a feminist bisexual and genderqueer activist, uses queer theory and various other aspects to take readers through a thourough examination of bisexuality and societal views of it.',
        bestSeller: false,
        newArrival: true
    },
    {
        id: 6,
        isbn: '9781328589835',
        bookTitle: 'The Robots of Gotham',
        bookAuthor: 'Todd McAulty',
        bookDescription: 'After decades of war, the world is shattered. Peace is brokered between humans and intelligent AI, and America is broken. Barry Simcoe finds a broken robot named 19-Black Winter and together they work to uncover a machine plot to unleash a deadly plague on humanity.',
        bestSeller: false,
        newArrival: true
    }
]