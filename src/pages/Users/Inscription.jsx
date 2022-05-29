import React from 'react'
import { NavLink } from 'react-router-dom'

function Inscription() {
  return (
    <div className='bg-rose-50 min-h-screen flex flex-col items-center py-20 md:flex-row sm:gap-x-5 lg:gap-x-14 sm:justify-center '>
        <form action="#" className='flex flex-col w-11/12 sm:w-[80%] md:w-[55%] lg:w-[45%] items-center bg-white px-[8%] py-9 lg:py-7 sm:p-[6%] lg:px-[4%] rounded-lg shadow-3xl'>
            <h1 className='text-2xl font-semibold mb-12 relative pb-3 after:absolute after:left-[50%] after:bottom-0 after:translate-x-[-50%] after:h-[2px] after:w-3/5 after:bg-marron-200'>Inscription</h1>
            <div className='w-full sm:flex sm:gap-8'>
              <input type="text" placeholder='Nom' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none'/>
              <input type="text" placeholder='Prenom' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none'/>
            </div>
            <input type="text" placeholder='Date de naissance' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' onFocus={(e) => {e.target.type="date"}} onBlur={(e) => {e.target.value ? e.target.type = "text" : e.target.type="date"}} onClick={(e) => {e.target.type="date"}}/>
            <input type="email" placeholder='Mail' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none'/>
            <div className='w-full sm:flex sm:gap-8'>
              <input type="password" placeholder='Mots de passe' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' />
              <input type="password" placeholder='Confirmer mots de passe' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' />
            </div>
            <div className='flex justify-start items-center mb-6 w-full'><input type="checkbox" id='souvenir' className=' h-5 w-5 mr-4' /><label htmlFor="souvenir">Se souvenir de moi</label></div>
            <button className='w-full py-4 text-white bg-blue-200 rounded-lg mb-4'>S'inscrire</button>
            <NavLink to='/connexion' ><p className='font-semibold text-marron-200'>Se connecter</p></NavLink>
        </form>
      <p className='w-4/5 md:w-[40%] lg:w-[30%] mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae labore totam corporis ut, dolore a pariatur animi enim laborum sunt doloribus eaque placeat mollitia neque necessitatibus obcaecati provident distinctio?</p>
    </div>
  )
}

export default Inscription