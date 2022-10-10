import React from 'react'
import Itemlivre from './Itemlivre'

function GridItemLivre(props) {
  return (
    <div className=' min-h-fit'>

      {
        props.data.map(item =>{
          return <Itemlivre compter={props.compter} setcompter={props.setcompter} key={item.id} data={item}/>
        })
      }
    
    </div>
  )
}

export default GridItemLivre