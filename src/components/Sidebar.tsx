'use client'
import { PanelLeft } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import TagList from './sub_components/TagList'
import { Itags } from '@/utils/types'
import Buttons from './sub_components/Buttons'
import slugger from '@/utils/slugger'

const SheetClose = SheetPrimitive.Close;

interface IPropTypes {
  notes_articles_tags: Itags[],
  dsa_articles_tags: Itags[]
}

const Sidebar = ({ notes_articles_tags, dsa_articles_tags }: IPropTypes) => {



  return (
    <div className='sm:hidden'>
      <Sheet>
        <SheetTrigger><PanelLeft className='w-[15px]' /></SheetTrigger>
        <SheetContent side={'left'} className='w-[50vw]'>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <div className='my-4 flex flex-col gap-2'>
                <p className='py-2 px-1 self-start'>Dev Tags</p>
                {
                  notes_articles_tags.map((tag) => (
                    <SheetClose key={Number(tag.id)} className='flex'>
                      <Buttons value={`${tag.tag}`}
                        url={`/dev_notes/${slugger(tag.tag)}`} 
                        />
                    </SheetClose>
                  ))
                }
              </div>
              <div className='my-4 flex flex-col gap-2'>
                <p className='py-2 px-1 self-start'>Dsa Tags</p>
                {
                  dsa_articles_tags.map((tag) => (
                    <SheetClose key={Number(tag.id)} className='flex'>
                      <Buttons  value={`${tag.tag}`}
                        url={`/dev_notes/${slugger(tag.tag)}`} />
                    </SheetClose>
                  ))
                }
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Sidebar