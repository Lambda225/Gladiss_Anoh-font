import React from 'react'
import Cartelivre from './Cartelivre'

function Gridlivre({livres}) {
  console.log(livres);
  return (
    <div className='grid gap-y-16 sm:grid-cols-2 sm:content-center sm:gap-x-8 lg:grid-cols-3 mt-20 bg-rose-50 py-10 w-full p-[6%]'>
       {livres.map(livre =>{
         return  <Cartelivre livre={livre} key={livre.id} />
       })}
        
    </div>
  )
}

export default Gridlivre