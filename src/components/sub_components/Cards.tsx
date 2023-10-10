import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IDsaArticlesMetadata, INotesArticlesMetadata } from '@/utils/types'
import { format } from 'date-fns'
import Tags from './Tags'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import slugger from '@/utils/slugger'

interface IPropType {
    article_metadata: INotesArticlesMetadata | IDsaArticlesMetadata
    category_url: String,
}

const Cards = ({ article_metadata, category_url }: IPropType) => {
    return (
        <div className=''>
            <Card className='shadow-md border-t-2 border-t-primary'>
                <CardHeader>
                    <Link href={`/articles/${slugger(article_metadata.title)}`}>
                        <CardTitle className='hover:text-primary'>{article_metadata.title}</CardTitle>
                    </Link>
                </CardHeader>
                <CardContent className='flex gap-4'>
                    {
                        article_metadata.tags.map((tag) => (
                            <Tags key={nanoid()} value={tag} url={`${category_url}/${slugger(tag)}`} />
                        ))
                    }
                </CardContent>
                <CardFooter>
                    <p>Created On:
                        <span>
                            {format(Number(article_metadata.createdAt), "LLL d, yyy")}
                        </span>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Cards