import { IDsaArticlesMetadata, INotesArticlesMetadata, Itags  } from "./types";

export function getTags(articles_metadata: IDsaArticlesMetadata[] | INotesArticlesMetadata[]){
    let count = 1;
    const set = new Set();
    const tags: Itags[] = [];

    articles_metadata.filter((article_metadata) => {
        article_metadata.tags.some((tag: String) => {
            if (!set.has(tag)) {
                set.add(tag);
                tags.push({
                    id: count++,
                    tag: tag,
                })
            }
        })
    })

    return tags;
}