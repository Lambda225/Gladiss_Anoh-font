import React from 'react'
import ItemPart from './ItemPart'

function GridItemPart(props) {
  return (
    <div className=' min-h-fit'>

      {
        props.data.map(item =>{
          return <ItemPart key={item.id} data={item} avis={props.avis} part={props.part}/>
        })
      }
    
    </div>
  )
}

export default GridItemPart