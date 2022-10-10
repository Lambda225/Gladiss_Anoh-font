import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'
import Footer from '../../composant/General/Footer'
import Itemsnote from '../../composant/General/Itemsnote'
import Navbar from '../../composant/General/Navbar'
import Contenumessage from '../../composant/Message/Contenumessage'

function Message() {
    const [contVisible,setcontVisible] = useState(false)
    const [evenements,setevenements] = useState({})

    useEffect(()=>{

      axios.get('/event/create')
      .then((resp) =>{
        if(resp.data.length > 0){
          setevenements(resp.data[0])
        }
      }).catch((errors) =>{
        console.log(errors.request.response);
      })

    },[])

  return (
    <div className='relative overflow-hidden'>
        <Navbar />
        <header className='h-screen relative'>
            <Itemsnote  contVisible={contVisible} setcontVisible={setcontVisible} />
            <Contenumessage evenement={evenements} contVisible={contVisible} setcontVisible={setcontVisible} />
        </header>
        
        <Footer />
    </div>
  )
}

export default Message