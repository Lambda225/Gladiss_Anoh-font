import { LinkIcon, ReplyIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../../api/axios";

function Message({setcompte,compte,lier1,setlier1,lier2,setlier2,question,setqustBool,qustBool,reponses,admin,setqustSlt,qustSlt}) {
  let reponse = {}
  
  if(reponses.length > 0){
    if(reponses.filter((repo) => repo.id === question.reponse_id).length > 0)
    reponse = reponses.filter((repo) => repo.id === question.reponse_id)[0]
  }
  const hundelClick = (e,id) =>{
    setqustBool(false)
    if(!lier1.select){
      setlier1({'valeur':id,'select':true})
    }else if(lier1.valeur == id){
      setlier1({'valeur':id,'select':false})
    }else if(!lier2.select){
      setlier2({'valeur':id,'select':true})
      let lien2 = id
      
      let formData = new FormData();
      formData.append('question1_id',lier1.valeur)
      formData.append('question2_id',lien2)

      axios({
        url:'/lier',
        method : 'POST',
        headers : {
            "Content-Type": "multipart/form-data",
            authorization: 'your token'
        },
        data : formData
      }).then((resp) =>{
        console.log(resp.data);
        setcompte(compte + 1)
        setlier1({'valeur':id,'select':false})
        setlier2({'valeur':id,'select':false})
        alert('Les questions on été lier')
      }).catch((errors) =>{
        console.log(errors.request.response);
      })
      
    }

  }

  return (
    <div>
      <div className="rounded-lg shadow-3xl px-7 py-6 mb-7 bg-white">
        <div className={`${admin ? "flex" : "hidden"} justify-end`}>

          <div className={(lier1.select && lier1.valeur == question.id) || (lier2.select && lier2.valeur == question.id)? 'p-2 rounded-full text-white bg-blue-700 mr-4' : 'text-blue-200 mr-4' }><LinkIcon className="h-5 cursor-pointer" 
          onClick={(e) => hundelClick(e,question.id)}/>
          </div>

          <div className={qustBool && qustSlt == question.id? 'p-2 rounded-full text-white bg-blue-700' : 'text-blue-200'}><ReplyIcon className='h-5 cursor-pointer' onClick={e => {setqustSlt(question.id);setqustBool(!qustBool)}}/></div>
        </div>
        <h3 className=" text-lg font-semibold relative pb-2 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/3 after:bg-marron-200 2xl:text-2xl">
          {question.contenu}
        </h3>
        <p className="2xl:text-2xl">{reponse.contenu}</p>
      </div>
    </div>
  );
}

export default Message;
