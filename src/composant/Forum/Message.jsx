import { ExternalLinkIcon, LinkIcon, ReplyIcon } from '@heroicons/react/solid'
import React from 'react'

function Message(props) {
  return (
    <div>
        <div className='rounded-lg shadow-3xl px-7 py-6 mb-7 bg-white'>
            <div className={`${props.admin ? 'flex' : 'hidden'} justify-end`}>
              <LinkIcon className='h-5 mr-4 text-blue-200'/>
              <ReplyIcon className='h-5 text-blue-200'/>
            </div>
            <h3 className=" text-lg font-semibold relative pb-2 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/3 after:bg-marron-200">Question</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae architecto, eos earum quis, dolore nesciunt eveniet tempora sed porro nisi ea dolores impedit, maxime quod unde totam harum iure laborum.</p>
        </div>
    </div>
  )
}

export default Message