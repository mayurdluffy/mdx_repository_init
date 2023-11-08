"use client"
import React from 'react'
import Markdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { IDsaArticles, INotesArticles } from '@/utils/types';
import Tags from './sub_components/Tags';
import { format } from 'date-fns';
import Subtags from './sub_components/Subtags';
import slugger from '@/utils/slugger';
import { nanoid } from 'nanoid/non-secure';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from 'remark-gfm'

interface IPropsType {
  article: INotesArticles | IDsaArticles,
  category_url: String,
}

const RenderMdx = ({ article, category_url }: IPropsType) => {

  const codeOptions = {
    theme: 'github-dark',
    grid: false,
  }

  return (
    <div className='w-[fit-content] p-1'>
      <div className='my-2 px-4 flex gap-2'>
        <p className='p-2'>Tags:</p>
        {
          article.metadata.tags.map((tag: String) => (
            <Tags key={nanoid()} value={tag} url={`${category_url}/${slugger(tag)}`} />
          ))
        }
      </div>
      <div>
        {
          category_url === '/dsa_notes' ?
            <div className='my-2 px-4 flex gap-2'>
              <p className='p-2'>Subtags:</p>
              {
                article.metadata.subtags?.map((subtag: String) => (
                  <Subtags key={nanoid()} value={subtag} url={``} />
                ))
              }
            </div>
            : null
        }
      </div>
      <p className='px-6'>Created On:
        <span>{format(Number(article.metadata.createdAt), "LLL d, yyy")}</span></p>
      <Markdown
        className='my-2 w-[98vw]
            p-4 prose-p:text-foreground prose-headings:text-foreground
            prose-p:text-justify prose-a:text-foreground
            prose-blockquote:leading-6 sm:prose-blockquote:leading-7
            md:prose-blockquote:leading-8 
            prose prose-lg 
            prose-blockquote:border-l-4  prose-blockquote:border-l-primary
            prose-blockquote:p-1 prose-code:font-code
            prose-blockquote:px-4
            prose-blockquote:not-italic
            prose-blockquote:rounded-r-md'
        
            // children={article.content.toString()}
            // components={{
            //   code(props) {
            //     const {children, className, node, ...rest} = props
            //     const match = /language-(\w+)/.exec(className || '')
            //     return match ? (
            //       <SyntaxHighlighter
            //         children={String(children).replace(/\n$/, '')}
            //         style={materialDark}
            //         language={match[1]}
            //         PreTag="div"
            //       />
            //     ) : (
            //       <code {...rest} className={className}>
            //         {children}
            //       </code>
            //     )
            //   }
            // }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, {behavior: "append"}]]}
      >
        {article.content.toString()}
      </Markdown>
    </div>
  )
}

export default RenderMdx