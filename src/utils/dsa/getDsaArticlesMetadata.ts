import { IDsaArticles, IDsaArticlesMetadata } from "../types";

const getDsaArticlesMetadata = (articles: IDsaArticles[]): IDsaArticlesMetadata[] => {
    const articles_metadata : IDsaArticlesMetadata[] = []

    articles.map((article) => articles_metadata.push(article.metadata));
    return articles_metadata;
};

export default getDsaArticlesMetadata;