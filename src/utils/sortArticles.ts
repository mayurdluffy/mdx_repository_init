import { compareDesc, parseISO } from "date-fns";
import { IDsaArticles, INotesArticles} from "./types";

const sortArticles = (articles: IDsaArticles[] | INotesArticles[]) => {
    return articles
    .slice()
    .sort((a: IDsaArticles | INotesArticles, b: IDsaArticles | INotesArticles) =>
      compareDesc(a.metadata.createdAt, b.metadata.createdAt)
    );
}

export default sortArticles