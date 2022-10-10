import React from 'react'

function Itemsnote(propos) {
  return (
    <div className=' flex px-[6%] py-7 justify-start items-center gap-6 bg-rose-50 cursor-pointer' onClick={(e) =>{propos.setcontVisible(!propos.contVisible)}}>
        <div className=" h-12 w-12 rounded-full bg-blue-200 2xl:h-20 2xl:w-20"></div>
        <p className='2xl:text-2xl'>Billet d'évenement</p>
    </div>
  )
}

export default Itemsnote