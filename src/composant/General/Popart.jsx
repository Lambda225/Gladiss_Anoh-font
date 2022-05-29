import React from 'react'
import { XIcon } from '@heroicons/react/solid'

function Popart(props) {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen z-50 ${props.opencatre ? 'flex' : 'hidden'} flex-col justify-center items-center`}>
        <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-90 z-[-1]'></div>
        <XIcon className='text-white h-7 absolute top-3 right-3 cursor-pointer'  onClick={(e) => {props.setopencatre(!props.opencatre)}}/>
        <div className=' w-11/12 h-1/3 sm:h-2/4 md:w-9/12 lg:w-6/12 bg-white'>
        </div>
        <p className='text-white w-11/12 mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis necessitatibus dolore perspiciatis tempora porro sunt laudantium distinctio cumque, ab suscipit dolorem debitis doloremque officiis architecto voluptates. In, quasi voluptatibus!</p>
    </div>
  )
}

export default Popart