import React from 'react'

function Blog() {
  return (
    <div className="flex w-120 max-w-xl h-64 bg-white cursor-pointer overflow-hidden outline-1 outline-gray-300 m-2 hover:shadow-lg hover:shadow-emerald-900/50 transition-all duration-200">
      <div className="w-1/6 min-w-[4rem] bg-emerald-600"></div>
      <div className="flex-1 p-2">
        <h3 className="pt-5 text-3xl">How to win in CR?</h3>
        <p className="font-light text-[0.8rem]">2025/5/5 9:08pm • dofiki</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.asdfasdfas
           Recusandae expedita sapiente corporis cum maiores [...more]</p>
      </div>
    </div>
  )
}

export default Blog
