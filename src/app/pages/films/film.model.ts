export interface IMovieResponse {
    data: IMovie[];
    meta: IMeta;
    links: IResponseLinks;
}

export interface IMovie {
    id: string;
    type: string;
    attributes: IMovieAttributes;
    links: IMovieLinks;
}

export interface IMovieAttributes {
    slug: string;
    box_office: string | null;
    budget: string | null;
    cinematographers: string[];
    directors: string[];
    distributors: string[];
    editors: string[];
    music_composers: string[];
    poster: string | null;
    producers: string[];
    rating: string | null;
    release_date: string | null;
    running_time: string | null;
    screenwriters: string[];
    summary: string | null;
    title: string;
    trailer: string | null;
    wiki: string;
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

export interface IMovieLinks {
    self: string;
}