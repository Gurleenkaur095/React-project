import React from 'react'
import {FaInstagram , FaLinkedin,FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-500 w-full h-[0.5px]'></div>
      <div className='flex justify-center item-center gap-6'>
        <h1>learn coding</h1>
        <div className='flex justify-center gap-4 my-4'>
          <a href="#"><FaLinkedin size={32} /></a>
          <a href="#"><FaInstagram size={32} /></a>
          <a href="#"><FaYoutube size={32} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
