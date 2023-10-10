import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Itags } from '@/utils/types'
import Tags from './Tags'
import slugger from '@/utils/slugger'

interface IPropTypes {
    tags: Itags[],
    category_url: String,
}

const TagList = ({ tags, category_url }: IPropTypes) => {
    return (
        <div>
            <Accordion type="single" collapsible
                className='px-4'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Show All Tags</AccordionTrigger>
                    <AccordionContent>
                        <div className='flex gap-3 flex-wrap'>
                            {
                                tags.map((tag) => (
                                    <Tags url={`${category_url}/${slugger(tag.tag)}`}
                                        key={Number(tag.id)} value={tag.tag} />
                                ))
                            }
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default TagList