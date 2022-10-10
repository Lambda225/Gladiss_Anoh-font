import React from 'react'

function UserMessage({reponses,question}) {
    let reponse = {}
  
  if(reponses.length > 0){
    if(reponses.filter((repo) => repo.id === question.reponse_id).length > 0)
    reponse = reponses.filter((repo) => repo.id === question.reponse_id)[0]
  }

  return (
    <div>
      <div className="rounded-lg shadow-3xl px-7 py-6 mb-7 bg-white">
        <h3 className=" text-lg font-semibold relative pb-2 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-1/3 after:bg-marron-200 2xl:text-2xl">
          {question.contenu}
        </h3>
        <p className="2xl:text-2xl">{reponse.contenu}</p>
      </div>
    </div>
  )
}

export default UserMessage