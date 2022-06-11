import { PaperAirplaneIcon } from '@heroicons/react/solid'
import React from 'react'

function Champenvoi({schear,setschear}) {
  return (
    <div className=' bg-white sticky bottom-0 left-0 w-full py-4'>
        <form action="#" className='flex justify-center'>
            <div className='w-3/4 flex justify-center px-4'><textarea name="" id="" cols="2" rows="2" className='py-2 rounded-2xl w-full shadow-3xl px-4 focus:outline-0 resize-none 2xl:py-6 2xl:text-2xl ' onChange={e => {setschear(e.target.value);console.log(schear)} }></textarea></div>
            <div className='flex items-center'><button className='h-14 w-14 2xl:h-20 2xl:w-20 rounded-full bg-rose-50 flex justify-center items-center shadow-3xl'><PaperAirplaneIcon className='rotate-90 h-7 2xl:h-12' /></button></div>
        </form>
    </div>
  )
}

export default Champenvoi