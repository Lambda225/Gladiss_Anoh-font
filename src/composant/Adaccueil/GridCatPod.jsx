import React from 'react'
import CartCatPosd from '../General/CartCatPosd'

function GridCatPod({categorie,data,compte,setcompte}) {
  return (
    <div >
        <h2 className='text-xl text-marron-200 ml-9 my-10 font-semibold'>{categorie}</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
          {
            data.map(item =>{
              return <CartCatPosd compte={compte} setcompte={setcompte} key={item.id} data={item} />
            })
          }
        </div>
    </div>
  )
}

export default GridCatPod