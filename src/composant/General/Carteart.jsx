import React from 'react'

function Carteart(props) {
  return (
    <div className='w-64 h-80 overflow-hidden rounded-lg shadow-3xl cursor-pointer bg-white' onClick={(e) => {props.setopencatre(!props.opencatre)}}>
        <div className='h-[50%] bg-blue-200'></div>
        <div className='p-[6%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cum.</p>
            <div className='flex items-center mt-4'>
                <div className="h-8 w-8 bg-marron-200 mr-3 rounded-full"></div>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
    </div>
  )
}

export default Carteart