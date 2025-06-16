import React from 'react'
import { IoSearch } from "react-icons/io5";
function Search() {
  return (
    <div className='flex flex-col justify-start items-center '>
      <h2 className='text-6xl p-4  text-center'>The place to be heard.</h2>
      <p className='text-emerald-800 sm:text-white text-xl w-80 text-center  sm:text-2xl sm:w-100 sm:text-center p-2'>
        Speak freely, share your ideas, and connect with a community that listens.
      </p>
      <input placeholder="search blogs..." className="text-emerald-800 sm:text-white w-60 border-2 rounded-2xl outline-0 
      sm:border-2 sm:rounded-2xl h-12 sm:w-80 pl-4 relative"/>
      <button className='bg-white p-2 w-30 text-black  mt-4 flex justify-center items-center 
      gap-1.5  rounded-2xl hover:bg-emerald-800 hover:text-white
       transition-colors duration:200ms'><IoSearch />Search</button>
    </div>
  )
}

export default Search

