import { INotesArticles, INotesArticlesMetadata } from "../types";

const getNotesArticlesMetadata = (articles: INotesArticles[]): INotesArticlesMetadata[] => {
    const articles_metadata : INotesArticlesMetadata[] = []

    articles.map((article) => articles_metadata.push(article.metadata));
    return articles_metadata;
};

export default getNotesArticlesMetadata;