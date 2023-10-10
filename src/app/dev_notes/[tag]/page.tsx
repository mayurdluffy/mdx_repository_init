import Cards from '@/components/sub_components/Cards';
import { getTags } from '@/utils/getTags';
import getNotesArticles from '@/utils/notes/getNotesArticles';
import getNotesArticlesMetadata from '@/utils/notes/getNotesArticlesMetadata';
import slugger from '@/utils/slugger';
import { INotesArticles, Itags } from '@/utils/types';
import { Home } from 'lucide-react';
import React from 'react'

export const generateStaticParams = async () => {
  const paths: {}[] = []
  const notes_articles = getNotesArticles()
  const notes_articles_metadata = getNotesArticlesMetadata(notes_articles)
  const notes_articles_tags = getTags(notes_articles_metadata);

  notes_articles_tags.map((tag) => {
    paths.push({
      tag: slugger(tag.tag.toString())
    })
  })

  return paths;
}

const page = (props: any) => {
  const { params } = props;
  const current_tag = params.tag;

  const notes_articles = getNotesArticles();
  const articles: INotesArticles[] = [];

  notes_articles.map((article) => {
    article.metadata.tags.map((tag: String) => {
      if (slugger(tag) === current_tag)
        articles.push(article);
    })
  })

  return (
    <div className='flex flex-col justify-center px-[2vw] sm:px-[10vw] max-h-[max-content]
    '>

      <p className='flex text-sm py-2 px-6'>
        <Home className='w-[15px]' />
        <span className='p-1'>{`/dev_notes/${current_tag}`}</span>
      </p>
      {/* --------------Recent Dev Notes----------------- */}
      <div className='my-[5vh]'>
        <p className='font-bold border-l-4 border-l-primary 
          py-2 px-4 rounded h-[max-content] my-3 mx-4'
        >Recent Dev Notes</p>
        <div className='grid sm:grid-cols-2 gap-5 p-2'>
          {
            articles.map((article) => (
              <Cards key={Number(article.metadata.id)}
                article_metadata={article.metadata}
                category_url={`/dev_notes`}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page