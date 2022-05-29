export interface PostItem {
    readonly title: string;
    readonly content: string;
    readonly excerpt: string;
    readonly createdAt: string;
    readonly categoryName: string;
    readonly categories: [categoryName:string];
    readonly authorName: string;
    readonly authorCountry: string;
}


