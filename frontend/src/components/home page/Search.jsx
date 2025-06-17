import React from 'react'
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className='flex flex-col justify-start items-center pb-2 sm:pt-9 '>

      <h2 className='text-6xl p-4  text-center'>The place to be <span className='font-bold'>heard</span>.</h2>

      <p className='text-black sm:text-white text-xl w-80 text-center  sm:text-2xl sm:w-100 sm:text-center p-2'>
        Speak freely, share your ideas, and connect with a community that listens.
      </p>

      <input placeholder="search blogs..." className="text-black sm:text-white w-60 border-2 rounded-2xl outline-0 
      sm:border-2 sm:rounded-2xl h-12 sm:w-80 pl-4 relative placeholder:text-emerald-700 focus:outline-2  focus:outline-emerald-100 transition-all: duration-50"/>

      <button className='bg-white p-2 w-30 text-black  mt-4 flex justify-center items-center 
      gap-1.5  rounded-2xl hover:bg-emerald-800 hover:text-white
       transition-colors duration:200ms shadow'><IoSearch />Search</button>
    </div>
  )
}

export default Search

