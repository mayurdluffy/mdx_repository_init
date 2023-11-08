import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-1 text-sm text-foreground py-1 px-4 justify-end w-full opacity-25 fixed bottom-1'>
      <p>Made by <span className='font-semibold'>mayurdluffy</span>&nbsp;|</p>
      <p>Powered by <span className='font-semibold'>Next.js</span></p>
    </div>
  )
}

export default Footer