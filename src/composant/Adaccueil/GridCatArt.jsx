import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'
import CartCatArt from '../General/CartCatArt'

function GridCatArt(props) {

  useEffect(()=>{

  },[])
  return (
    <div >
        <h2 className='text-xl text-marron-200 ml-9 my-10 font-semibold'>{props.categorie}</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
          {
            props.data.map(item =>{
              return <CartCatArt key={item.id} data={item} />
            })
          }
        </div>
    </div>
  )
}

export default GridCatArt