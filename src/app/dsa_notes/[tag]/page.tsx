import Cards from '@/components/sub_components/Cards';
import Subtags from '@/components/sub_components/Subtags';
import getDsaArticles from '@/utils/dsa/getDsaArticles';
import getDsaArticlesMetadata from '@/utils/dsa/getDsaArticlesMetadata';
import { getTags } from '@/utils/getTags';
import slugger from '@/utils/slugger';
import { IDsaArticles} from '@/utils/types';
import { Home } from 'lucide-react';
import { nanoid } from 'nanoid';
import React from 'react'

export const generateStaticParams = async () => {
  const paths: {}[] = []
  const dsa_articles = getDsaArticles()
  const dsa_articles_metadata = getDsaArticlesMetadata(dsa_articles)
  const dsa_articles_tags = getTags(dsa_articles_metadata);

  dsa_articles_tags.map((tag) => {
    paths.push({
      tag: slugger(tag.tag.toString())
    })
  })

  return paths;
}

const page = (props: any) => {
  const { params } = props;
  const current_tag = params.tag;

  const dsa_articles = getDsaArticles();
  const articles: IDsaArticles[] = [];

  dsa_articles.map((article) => {
    article.metadata.tags.map((tag: String) => {
      if (slugger(tag) === current_tag)
        articles.push(article);
    })
  })

  return (
    <div className='flex flex-col justify-center px-[2vw] sm:px-[10vw] max-h-[max-content]
    '>

      <p className='flex text-sm py-2 px-4'>
        <Home className='w-[15px]' />
        <span className='p-1'>{`/dev_notes/${current_tag}`}</span>
      </p>

      {/* ------------subtags------------------- */}
      <div className='my-2 px-4 flex gap-2'>
        <p className='p-2'>Subtags:</p>
        {
          articles.map((article) => (
            article.metadata.subtags?.map((subtag: String) => (
              <Subtags key={nanoid()} value={subtag} url={`/dsa_notes/${current_tag}/${slugger(subtag)}`} />
            ))
          ))
        }
      </div>

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
                category_url={`/dsa_notes`}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page