import React from 'react'
import { DarkModeButton } from './sub_components/DarkModeButton'
import Sidebar from './Sidebar'
import Link from 'next/link'
import { Itags } from '@/utils/types'

interface IPropTypes{
  notes_articles_tags: Itags[],
  dsa_articles_tags: Itags[]
}

const Header = ({notes_articles_tags, dsa_articles_tags}: IPropTypes) => {
  return (
    <div className='px-4 py-2 flex justify-between border-b-[0.5px] shadow-sm'>
      <div className='flex gap-2'>
        <Sidebar 
          notes_articles_tags={notes_articles_tags}
          dsa_articles_tags={dsa_articles_tags}
        />
        <Link href={`/`}>
          <p className='text-foreground text-2xl 
            font-bold font-sans hover:text-primary'>
            Mdx Repository
          </p>
        </Link>
      </div>
      <DarkModeButton />
    </div>
  )
}


export default Header