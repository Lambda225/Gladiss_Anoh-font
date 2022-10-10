import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import ChampAdmin from '../../composant/Forum/ChampAdmin'
import Message from '../../composant/Forum/Message'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'

function Adforum() {
    const admin = true
    const [qustBool,setqustBool] = useState(false)
    const [schear,setschear] = useState('')
    const [questions,setquestion] = useState([])
    const [reponses,setreponses] = useState([])
    const [compte,setcompte] = useState(0)
    const [qustSlt,setqustSlt] = useState()
    const [lier1,setlier1] = useState({'valeur':-1,'select':false})
    const [lier2,setlier2] = useState({'valeur':-1,'select':false})

    useEffect(()=>{

    axios.get('/question/create')
    .then((resp) =>{
      setquestion(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })
  
    axios.get('/reponse/create')
    .then((resp) =>{
      setreponses(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })
  
    },[compte])

  return (
    <div className='flex h-screen bg-rose-50'>
      <Adnavbar />
      <div className='w-full lg:w-3/4 h-full relative flex flex-col'>
        <Adsearchbar /> 
          <div className=' bg-rose-50 flex h-full overflow-hidden flex-col'>
            <div className=" px-[6%] 2xl:px-[10%] h-full overflow-y-scroll pt-10 ">
              {
              questions.map(question => {
                  return <Message compte={compte} setcompte={setcompte} lier1={lier1} setlier1={setlier1} lier2={lier2} setlier2={setlier2} qustSlt={qustSlt} qustBool={qustBool} setqustBool={setqustBool} setqustSlt={setqustSlt} reponses={reponses} question={question} key={question.id} admin={admin} />
                })
              }
               <div className=' h-12'></div>
            </div>
            <ChampAdmin setqustBool={setqustBool} qustSlt={qustSlt} qustBool={qustBool} compte={compte} setcompte={setcompte} schear={schear} setschear={setschear} />
          </div>
      </div>
    </div>
  )
}

export default Adforum