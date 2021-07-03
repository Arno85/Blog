import { Category } from './category';

export interface Article {
    id: number;
    title: string;
    author: string;
    categories: Category[];
    date: string;
    content: string;
    excerpt: string;
    image: string;
}