import React from 'react'

function Itemsnote(propos) {
  return (
    <div className=' flex px-[6%] py-7 justify-start items-center gap-6 hover:bg-rose-50 cursor-pointer' onClick={(e) =>{propos.setcontVisible(!propos.contVisible)}}>
        <div className=" h-12 w-12 rounded-full bg-blue-200"></div>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Itemsnote