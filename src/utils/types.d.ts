
export interface IDsaArticlesMetadata{
    id: Number,
    title: String,
    createdAt: String,
    tags: String[],
    subtags: String[],
}

export interface INotesArticlesMetadata{
    id: Number,
    title: String,
    createdAt: String,
    tags: String[],
}

export interface IDsaArticles{
    content: String,
    metadata: IDsaArticlesMetadata | any
}

export interface INotesArticles{
    content: String,
    metadata: INotesArticlesMetadata | any
}

export interface Itags{
    id: Number,
    tag: String,
}

export interface ISubtags{
    id: Number,
    subtag: String,
 }