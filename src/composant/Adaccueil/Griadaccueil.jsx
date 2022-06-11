import React from 'react'
import Cartcat from '../General/Cartcat'

function Griadaccueil(props) {
  return (
    <div >
        <h2 className='text-xl text-marron-200 ml-9 my-10 font-semibold'>{props.categorie}</h2>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
            <Cartcat evenement={props.evenement}/>
            <Cartcat evenement={props.evenement}/>
            <Cartcat evenement={props.evenement}/>
        </div>
    </div>
  )
}

export default Griadaccueil