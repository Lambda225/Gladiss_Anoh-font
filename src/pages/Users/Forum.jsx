import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../api/axios'
import Champenvoi from '../../composant/Forum/Champenvoi'
import Navbar from '../../composant/General/Navbar'
import UserMessage from '../../composant/Forum/UserMessage'

function Forum() {
  const [schear,setschear] = useState('')
  const [questions,setquestion] = useState([])
  const [reponses,setreponses] = useState([])
  const [compte,setcompte] = useState(0)

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
    <div className='relative flex flex-col h-screen'>
        <Navbar />
        <div className=" px-[6%] 2xl:px-[10%] h-full overflow-y-scroll py-12">
          {
          questions.filter(mots => mots.contenu.toLowerCase().includes(schear.toLowerCase()) ).map(question => {
              return <UserMessage reponses={reponses} question={question} key={question.id} />
            })
          }
            <div className=' h-12'></div>
        </div>
        <Champenvoi compte={compte} setcompte={setcompte} schear={schear} setschear={setschear} />
    </div>
  )
}

export default Forum