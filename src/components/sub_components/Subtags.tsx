import React from 'react'
import Buttons  from './Buttons'

interface IPropType {
  value: String,
  url: String,
}
const Subtags = ({ value, url }: IPropType) => {
  return (
    <div className=''>
        <Buttons value={value} url={url}/>
    </div>
  ) 
}

export default Subtags