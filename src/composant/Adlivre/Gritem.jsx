import React from 'react'
import Itemlivre from './Itemlivre'

function Grilivre(props) {
  return (
    <div className=' min-h-fit'>
        <Itemlivre avis={props.avis} part={props.part}/>
        <Itemlivre avis={props.avis} part={props.part}/>
        <Itemlivre avis={props.avis} part={props.part}/>
    </div>
  )
}

export default Grilivre