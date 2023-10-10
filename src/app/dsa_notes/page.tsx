import Cards from '@/components/sub_components/Cards';
import TagList from '@/components/sub_components/TagList';
import getDsaArticles from '@/utils/dsa/getDsaArticles';
import getDsaArticlesMetadata from '@/utils/dsa/getDsaArticlesMetadata';
import { getTags } from '@/utils/getTags';
import { Home } from 'lucide-react';
import React from 'react'

const page = () => {
    const dsa_articles = getDsaArticles();
    const dsa_articles_metadata = getDsaArticlesMetadata(dsa_articles);
    const dsa_articles_tags = getTags(dsa_articles_metadata);
    return (
        <div className='flex flex-col justify-center px-[2vw] sm:px-[10vw]'>

            <p className='flex text-sm py-2 px-4'>
                <Home className='w-[15px]' />
                <span className='p-1'>{`/dsa_notes`}</span>
            </p>
            <div>
                <TagList category_url={'/dsa_notes'} tags={dsa_articles_tags} />
            </div>
            {/* --------------Recent Dev Notes----------------- */}
            <div className='my-[5vh]'>
                <p className='font-bold border-l-4 border-l-primary 
          py-2 px-4 rounded h-[max-content] my-3 mx-4'
                >Recent DSA Notes</p>
                <div className='grid sm:grid-cols-2 gap-5 p-2'>
                    {
                        dsa_articles.map((article) => (
                            <Cards key={Number(article.metadata.id)}
                                article_metadata={article.metadata}
                                category_url={`/dsa_notes`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page