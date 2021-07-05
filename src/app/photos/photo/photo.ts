export interface Photo {
    id: number;
    postDate: Date;
    description: string;
    url: string;
    allowComments: boolean;
    likes: number;
    comments: string;
    userId: number;
}