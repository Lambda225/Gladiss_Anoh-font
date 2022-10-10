import React from 'react'
import CartEvent from '../General/CartEvent'

function GridEvent(props) {
  return (
    <div >
        <h2 className='text-xl text-marron-200 ml-9 my-10 font-semibold'>{props.categorie}</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
          {
            props.data.map(item =>{
              return <CartEvent key={item.id} data={item} />
            })
          }
        </div>
    </div>
  )
}

export default GridEvent