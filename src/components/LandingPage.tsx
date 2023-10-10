import React from 'react'
import { Home } from 'lucide-react'
import Cards from './sub_components/Cards'
import Buttons from './sub_components/Buttons'
import getNotesArticles from '@/utils/notes/getNotesArticles'
import getDsaArticles from '@/utils/dsa/getDsaArticles'
import getNotesArticlesMetadata from '@/utils/notes/getNotesArticlesMetadata'
import getDsaArticlesMetadata from '@/utils/dsa/getDsaArticlesMetadata'


const LandingPage = () => {

  const notes_articles = getNotesArticles();
  const dsa_articles = getDsaArticles();

  const notes_articles_metadata = getNotesArticlesMetadata(notes_articles);
  const dsa_articles_metadata = getDsaArticlesMetadata(dsa_articles);
  
  return (
    <div className='flex flex-col justify-center px-[2vw] sm:px-[10vw]'>

      <p className='flex text-sm py-2 px-5'>
        <Home className='w-[15px]' />
        <span className='p-1'>{``}</span>
      </p>

      <div className='flex gap-4 px-4 pt-4'>
        <Buttons value={'Dev Notes'} url={'/dev_notes'} />
        <Buttons value={'DSA Notes'} url={'/dsa_notes'}/>
      </div>

      <div className='max-h-[fit-content] w-[95vw] md:w-[75vw]'>

        {/* --------------Recent Dev Notes----------------- */}
        <div className='my-[5vh]'>
          <p className='font-bold border-l-4 border-l-primary 
          py-2 px-4 rounded h-[max-content] my-3 mx-4'
          >Recent Dev Notes</p>
          <div className='grid sm:grid-cols-2 gap-5 p-2'>
            {
              notes_articles_metadata.map((article_metadata) =>(
                <Cards key={Number(article_metadata.id)}
                 article_metadata={article_metadata}
                 category_url={`/dev_notes`}
                 />
              ))
            }
          </div>
        </div>

        {/* -----------------Recent DSA Notes-------------- */}
        <div className='my-[5vh]'>
          <p className='font-bold border-l-4 border-l-primary 
          py-2 px-4 rounded h-[max-content] my-3 mx-4'
          >Recent DSA Notes</p>
          <div className='grid sm:grid-cols-2 gap-5 p-2'>
            {
              dsa_articles_metadata.map((article_metadata) =>(
                <Cards key={Number(article_metadata.id)} 
                article_metadata={article_metadata}
                category_url={`/dsa_notes`}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage