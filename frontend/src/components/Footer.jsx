import React from 'react'
import { Link } from 'react-router-dom'
import { SiTheconversation } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <div className='h-80 sm:h-80 bg-emerald-900 flex flex-col sm:flex-row 
    lg:pl-56 lg:pr-56 xl:pl-96 xl:pr-96 sm:pl-16 sm:pr-16'>
      
      <div className='flex w-full h-60'>
        <div className='w-2/4 p-4 text-white underline cursor-pointer sm:pt-8'>
            <p className='text-white hover:text-emerald-300 transition-color duration:300'>&gt; how to win cr?</p>
            <p className='text-white hover:text-emerald-300 transition-color duration:300'>&gt; how to destroy megawankers?</p>
            <p className='text-white hover:text-emerald-300 transition-color duration:300'>&gt; how to quit?</p>
            <p className='text-white hover:text-emerald-300 transition-color duration:300'>&gt; how to hate shit?</p>
            <p className='text-white hover:text-emerald-300 transition-color duration:300'>&gt; how to revolt?</p>
        </div>
        <div className='w-2/4 p-4 text-[1rem] text-white sm:pt-8'>
        <ul className="flex flex-col gap-1 items-end sm:items-start">
          <li><Link to="/" className="transition-colors duration-200 hover:text-emerald-200" >Home</Link></li>
          <li><Link to="/blogs" className=" transition-colors duration-200 hover:text-emerald-200" >Blogs</Link></li>
          <li><Link to="/create" className="transition-colors duration-200 hover:text-emerald-200" >Create</Link></li>
          <li><Link to="/onboarding" className="transition-colors duration-200 hover:text-emerald-200" >Login</Link></li>
        </ul>
        </div>
      </div>

      <div className='flex w-full h-60'>
        <div className='w-2/4 p-4 flex justify-start items-end sm:items-start text-emerald-200 sm:pt-8'>
                <p className="text-3xl font-bold">
                  <Link to="/"  className="flex flex-row items-center gap-2 transition-colors duration-300 hover:text-white">
                  <SiTheconversation size={25}/> yaps</Link>
                </p>
        </div>
        <div className='w-2/4 p-4 sm:pt-8 text-emerald-200  flex gap-2 justify-end items-end sm:items-start'>
            <SlSocialInstagram size={25 } className='hover:text-white'/>
            <SlSocialLinkedin size={25} className='hover:text-white'/>

        </div>
      </div>

    </div>
  )
}

export default Footer
