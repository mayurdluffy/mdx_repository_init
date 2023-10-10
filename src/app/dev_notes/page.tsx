import Cards from '@/components/sub_components/Cards';
import TagList from '@/components/sub_components/TagList';
import { getTags } from '@/utils/getTags';
import getNotesArticles from '@/utils/notes/getNotesArticles';
import getNotesArticlesMetadata from '@/utils/notes/getNotesArticlesMetadata';
import { Home } from 'lucide-react';
import React from 'react'

const page = () => {

  const notes_articles = getNotesArticles();
  const notes_articles_metadata = getNotesArticlesMetadata(notes_articles);
  const notes_articles_tags = getTags(notes_articles_metadata);

  return (
    <div className='flex flex-col justify-center px-[2vw] sm:px-[10vw]'>

      <p className='flex text-sm py-2 px-4'>
        <Home className='w-[15px]' />
        <span className='p-1'>{`/dev_notes`}</span>
      </p>
      <div>
        <TagList category_url={'/dev_notes'} tags={notes_articles_tags}/>
      </div>
      {/* --------------Recent Dev Notes----------------- */}
      <div className='my-[5vh]'>
          <p className='font-bold border-l-4 border-l-primary 
          py-2 px-4 rounded h-[max-content] my-3 mx-4'
          >Recent Dev Notes</p>
          <div className='grid sm:grid-cols-2 gap-5 p-2'>
            {
              notes_articles.map((article) =>(
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