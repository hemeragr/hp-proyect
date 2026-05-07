export interface ICharacterResponse {
    data: ICharacter[];
    meta: IMeta;
    links: IResponseLinks;
}

export interface ICharacter {
    id: string;
    type: string;
    attributes: ICharacterAttributes;
    links: ICharacterLinks;
}

export interface ICharacterAttributes {
    slug: string;
    alias_names: string[];
    animagus: string | null;
    blood_status: string | null;
    boggart: string | null;
    born: string | null;
    died: string | null;
    eye_color: string | null;
    family_members: string[];
    gender: string | null;
    hair_color: string | null;
    height: string | null;
    house: string | null;
    image: string | null;
    jobs: string[];
    marital_status: string | null;
    name: string;
    nationality: string | null;
    patronus: string | null;
    romances: string[];
    skin_color: string | null;
    species: string | null;
    titles: string[];
    wands: string[];
    weight: string | null;
    wiki: string;
}

export interface IMeta {
    pagination: IPagination;
    copyright: string;
    generated_at: string;
}

export interface IPagination {
    current: number;
    next: number | null;
    last: number;
    records: number;
}

export interface IResponseLinks {
    self: string;
    current: string;
    next: string;
    last: string;
}

export interface ICharacterLinks {
    self: string;
}