import { User } from 'entities/User';

export enum ArticleSortField {
VIEWS = 'views',
TITLE = 'title',
CREATED = 'createdAt'
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string
}

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
    BIG= 'BIG',
    SMALL = 'SMALL',
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}
