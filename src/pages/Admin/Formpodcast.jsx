import React from 'react'
import Adnavbar from '../../composant/General/Adnavbar'
import Adsearchbar from '../../composant/General/Adsearchbar'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { DownloadIcon, UserIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import axios from '../../api/axios'

function Formpodcast() {
    const [image,setimage] = useState()
    const [title,settitle] = useState()
    const [desc,setdesc] = useState()
    const [afficher,setafficher] = useState()
    const [ifram,setifram] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    const onImageChange = (event) => {

      setimage(event.target.files[0])

      if (event.target.files && event.target.files[0]) {
        setafficher(URL.createObjectURL(event.target.files[0]));
      }
    }

    const hundelSubmit = (e) =>{
        e.preventDefault();
        let formData = new FormData();

        formData.append('photo',image)
        formData.append('titre',title)
        formData.append('description',desc)
        formData.append('ifram',ifram)
        formData.append('cat_id',id)

        axios({
            url:'/podcast/create',
            method : 'POST',
            headers : {
              "Content-Type": "multipart/form-data",
              authorization: 'your token'
            },
            data : formData
          }).then((resp) =>{
            console.log(resp.data)
            navigate(`/admin/listpodcast/${id}`)
          }).catch((errors) =>{
            console.log(errors.request.response);
          })
    }
  return (
    <div className='flex'>
        <Adnavbar />
        <div className='w-3/4 h-screen overflow-y-scroll'>
          <Adsearchbar />
          <div className='bg-rose-50 py-10 flex justify-center items-center h-full'>
            <form action="#" className='flex flex-col w-6/12 items-center bg-white px-[8%] py-9 lg:py-7 sm:p-[6%] lg:px-[4%] rounded-lg shadow-3xl' onSubmit={hundelSubmit}>
                <div className='mb-7'>
                    <div className=" h-28 w-28 rounded-lg bg-blue-200 flex justify-center items-center overflow-hidden"><img src={afficher} alt="" className='object-cover w-full h-full' /></div>
                    <div className=' relative'>
                        <input type="file" name="" id="bim" className='hidden' onChange={ onImageChange } />
                        <label htmlFor="bim" className='absolute right-[-8px] bottom-[-8px] bg-white rounded-full p-1 shadow-3xl cursor-pointer'><DownloadIcon className=' h-6' /></label>
                    </div>
                </div>
                <input type="text" placeholder='Titre' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' onChange={ e => settitle(e.target.value)}/>
                <input type="text" placeholder='Ifram' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none' onChange={ e => setifram(e.target.value)}/>
                <textarea name="" id="" placeholder='Description' className='w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none resize-none' onChange={ e => setdesc(e.target.value)}></textarea>
                <button className='w-full py-4 text-white bg-blue-200 rounded-lg mb-4'>Ajouter</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Formpodcast