import fs from "fs";
import matter from "gray-matter";
import { IDsaArticles } from "../types";
import sortArticles from "../sortArticles";
import { parseISO } from "date-fns";

const getDsaArticles = () => {
  const dsa_folder = "articles/dsa/";

  // get all dsa article files
  const dsa_files = fs.readdirSync(dsa_folder);
  const dsa_article_files = dsa_files.filter((file) => file.endsWith(".md"));

  const dsa_articles: IDsaArticles[] = [];

  let count = 1;

  // Get gray-matter data from each file.
  dsa_article_files.map((fileName) => {

    const fileContent = fs.readFileSync(`${dsa_folder}${fileName}`, "utf8");
    const matterResult = matter(fileContent);

    dsa_articles.push({
      content: matterResult.content,
      metadata: {
        id: count++,
        title: matterResult.data.title,
        createdAt: parseISO(matterResult.data.createdAt),
        tags: matterResult.data.tags,
        subtags: matterResult.data.subtags
      }
    })
  });

  // sorting all post 
  const sorted_dsa_articles : IDsaArticles[] = sortArticles(dsa_articles);
  return sorted_dsa_articles;
}

export default getDsaArticles