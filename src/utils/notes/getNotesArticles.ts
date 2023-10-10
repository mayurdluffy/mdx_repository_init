import fs from "fs";
import matter from "gray-matter";
import { INotesArticles } from "../types";
import sortArticles from "../sortArticles";
import { parseISO } from "date-fns";

const getNotesArticles = () => {
  const notes_folder = "articles/notes/";

  // get all notes article files
  const notes_files = fs.readdirSync(notes_folder);
  const notes_article_files = notes_files.filter((file) => file.endsWith(".md"));

  const notes_articles: INotesArticles[] = [];

  let count = 1;

  // Get gray-matter data from each file.
  notes_article_files.map((fileName) => {

    const fileContent = fs.readFileSync(`${notes_folder}${fileName}`, "utf8");
    const matterResult = matter(fileContent);

    notes_articles.push({
      content: matterResult.content,
      metadata: {
        id: count++,
        title: matterResult.data.title,
        createdAt: parseISO(matterResult.data.createdAt),
        tags: matterResult.data.tags,
      }
    })
  });

  // sorting all post 
  const sorted_notes_articles: INotesArticles[] = sortArticles(notes_articles);
  return sorted_notes_articles;
}

export default getNotesArticles