export interface IBookResponse {
    data: IBook[];
    meta: IMeta;
    links: IResponseLinks;
}

export interface IBook {
    id: string;
    type: string;
    attributes: IBookAttributes;
    relationships: IBookRelationships;
    links: IBookLinks;
}

export interface IBookAttributes {
    slug: string;
    author: string;
    cover: string | null;
    dedication: string | null;
    pages: number;
    release_date: string | null;
    summary: string | null;
    title: string;
    wiki: string;
}

export interface IBookRelationships {
    chapters: IChaptersRelationship;
}

export interface IChaptersRelationship {
    data: IChapterReference[];
}

export interface IChapterReference {
    id: string;
    type: string;
}

export interface IMeta {
    pagination: IPagination;
    copyright: string;
    generated_at: string;
}

export interface IPagination {
    current: number;
    next?: number | null;
    last?: number;
    records: number;
}

export interface IResponseLinks {
    self: string;
    current: string;
    next?: string;
    last?: string;
}

export interface IBookLinks {
    self: string;
}