export type Note = Readonly<{
    id: string;
    title: string;
    description: string;
    owner: string;
    publishDate: Date;
}>;