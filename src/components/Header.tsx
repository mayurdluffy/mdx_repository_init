"use client"
import { DarkModeButton } from './sub_components/DarkModeButton'
import Link from 'next/link'
import SideBar from './SideBar'

const Header = () => {
  return (
    <div>
      <div className='px-4 py-2 flex justify-between border-b-[0.5px] shadow-sm'>
        <div className='flex gap-2'>
          <SideBar/>
          <Link href={`/`}>
            <p className='text-foreground text-2xl 
            font-bold font-sans hover:text-primary'>
              Mdx Repository
            </p>
          </Link>
        </div>
        <DarkModeButton />
      </div>
    </div>
  )
}


export default Header