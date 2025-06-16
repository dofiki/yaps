import React from 'react'
import Blog from './Blog'

function BlogsList() {
  return (
    <div className='flex flex-wrap pt-8 justify-center items-center pl-2 pr-2 pb-6'>
      {Array.from({length: 12}).map((_,i)=>(
        <Blog key={i} />
      ))}
    </div>
  )
}

export default BlogsList
