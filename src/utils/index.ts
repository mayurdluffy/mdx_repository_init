"use client"
import { getTags } from '@/utils/getTags';
import getNotesArticles from '@/utils/notes/getNotesArticles';
import getNotesArticlesMetadata from '@/utils/notes/getNotesArticlesMetadata';

import getDsaArticles from "@/utils/dsa/getDsaArticles";
import getDsaArticlesMetadata from "@/utils/dsa/getDsaArticlesMetadata";

const dsa_articles = getDsaArticles();
const dsa_articles_metadata = getDsaArticlesMetadata(dsa_articles);
const dsa_articles_tags = getTags(dsa_articles_metadata);

const notes_articles = getNotesArticles();
const notes_articles_metadata = getNotesArticlesMetadata(notes_articles);
const notes_articles_tags = getTags(notes_articles_metadata);


export {
    dsa_articles,
    dsa_articles_metadata,
    dsa_articles_tags,

    notes_articles,
    notes_articles_metadata,
    notes_articles_tags
}