import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface IPropType {
  value: String,
  url: String,
}

const Buttons = ({ value, url }: IPropType) => {
  return (
    <div>
      <Link href={`${url}`}>
        <Button variant={'outline'} className='shadow-sm'>
          {`#${value}`}
        </Button>
      </Link>
    </div>
  )
}

export default Buttons