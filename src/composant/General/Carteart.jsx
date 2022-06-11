import React from 'react'

function Carteart(props) {
  return (
    <div className='w-64 h-80 2xl:w-80 2xl:h-[25rem] overflow-hidden rounded-lg shadow-3xl cursor-pointer bg-white' onClick={(e) => {props.setopencatre(!props.opencatre);props.setitemart(props.article)}}>
        <div className='h-[50%] bg-blue-200'></div>
        <div className='p-[6%]'>
            <p className='2xl:text-xl'>{props.article.description.substr(0,80)} ...</p>
            <div className='flex items-center mt-4'>
                <div className="h-8 w-8 bg-marron-200 mr-3 rounded-full"></div>
                <p className='2xl:text-xl'>Lorem, ipsum dolor.</p>
            </div>
        </div>
    </div>
  )
}

export default Carteart