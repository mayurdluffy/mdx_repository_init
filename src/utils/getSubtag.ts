import { IDsaArticlesMetadata, ISubtags } from "./types";



function getSubTagsList(articles_metadata: IDsaArticlesMetadata[]) {
    let count = 1;
    const set = new Set();

    const subtags: ISubtags[] = [];

    articles_metadata.filter((article_metadata) => {
        article_metadata.subtags.some((subtag: String) => {
            if (!set.has(subtag)) {
                set.add(subtag);
                subtags.push({
                    id: count++,
                    subtag: subtag,
                })
            }
        })
    })

    return subtags;
}

export default getSubTagsList