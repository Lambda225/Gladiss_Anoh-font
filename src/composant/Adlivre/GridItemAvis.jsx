import React from 'react'
import ItemAvis from './ItemAvis'

function GridItemAvis(props) {
  return (
    <div className=' min-h-fit'>

      {
        props.data.map(item =>{
          return <ItemAvis key={item.id} data={item} avis={props.avis} part={props.part}/>
        })
      }
    
    </div>
  )
}

export default GridItemAvis