import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemPodcast from './ItemPodcast'

function GridItemPod(props) {

  return (
    <div className=' min-h-fit'>

      {
        props.data.map(item =>{
          return <ItemPodcast compter={props.compter} setcompter={props.setcompter} key={item.id} data={item} avis={props.avis} part={props.part}/>
        })
      }
    
    </div>
  )
}

export default GridItemPod