import RenderMdx from '@/components/RenderMdx'
import getDsaArticles from '@/utils/dsa/getDsaArticles';
import getDsaArticlesMetadata from '@/utils/dsa/getDsaArticlesMetadata';
import getNotesArticles from '@/utils/notes/getNotesArticles';
import getNotesArticlesMetadata from '@/utils/notes/getNotesArticlesMetadata';
import slugger from '@/utils/slugger';
import React from 'react'

export const generateStaticParams = async () => {
  const paths: {}[] = []
  const notes_articles = getNotesArticles();
  const dsa_articles = getDsaArticles();

  const notes_articles_metadata = getNotesArticlesMetadata(notes_articles);
  const dsa_articles_metadata = getDsaArticlesMetadata(dsa_articles);

  notes_articles_metadata.map((article_metadata) => {
    paths.push({
      article_slug: slugger(article_metadata.title)
    })
  })

  dsa_articles_metadata.map((article_metadata) => {
    paths.push({
      article_slug: slugger(article_metadata.title)
    })
  })

  return paths;
}

const page = (props: any) => {
  const { params } = props;
  const article_slug = params.article_slug;

  const notes_articles = getNotesArticles();
  const dsa_articles = getDsaArticles();

  let current_article: any;
  let category_url: String = '';

  notes_articles.map((article) =>{
    if(slugger(article.metadata.title.toString()) === article_slug){
      current_article = article;
      category_url = '/dev_notes'
    }
  })

  dsa_articles.map((article) =>{
    if(slugger(article.metadata.title.toString()) === article_slug){
      current_article = article;
      category_url = '/dsa_notes'
    }
  })

  return (
    <div className='flex justify-center'>
      <RenderMdx article={current_article} category_url={category_url}/>
    </div>
  )
}

export default page