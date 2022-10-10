import React from 'react'
import ItemArticle from './ItemArticle'

function GridItemArt(props) {
  return (
    <div className=' min-h-fit'>

      {
        props.data.map(item =>{
          return <ItemArticle key={item.id} data={item} avis={props.avis} part={props.part}/>
        })
      }
    
    </div>
  )
}

export default GridItemArt