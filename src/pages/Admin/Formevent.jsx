import React, { useState } from "react";
import Adnavbar from "../../composant/General/Adnavbar";
import Adsearchbar from "../../composant/General/Adsearchbar";
import { DownloadIcon } from "@heroicons/react/solid";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Formevent() {
  const [image,setimage] = useState()
  const [title,settitle] = useState()
  const [desc,setdesc] = useState()
  const [cout,setcout] = useState()
  const [day,setday] = useState()
  const [afficher,setafficher] = useState()
  const [present,setpresent] = useState(true)
  const [place,setplace] = useState()
  const navigate = useNavigate()

  const onImageChange = (event) => {

    setimage(event.target.files[0])

    if (event.target.files && event.target.files[0]) {
      setafficher(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleSubmit  = (e) =>{
    e.preventDefault();

    let formData = new FormData();

    formData.append('photo',image)
    formData.append('titre',title)
    formData.append('description',desc)
    formData.append('cout',cout)
    formData.append('date',day)
    formData.append('nom_de_place',place)
    formData.append('presentiel',present)

    axios({
      url:'/event/create',
      method : 'POST',
      headers : {
        "Content-Type": "multipart/form-data",
        authorization: 'your token'
      },
      data : formData
    }).then((resp) =>{
      console.log(resp.data)
      navigate('/admin/evenement')
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

    console.log({"image":image,"Titre":title,"Description":desc,'Prix':cout,"Date":day})
  }
  return (
    <div className="flex">
      <Adnavbar />
      <div className="w-3/4 h-screen overflow-y-scroll">
        <Adsearchbar />
        <div className="bg-rose-50 py-10 flex justify-center items-center min-h-full">
          <form className="flex flex-col w-6/12 items-center bg-white px-[8%] py-9 lg:py-7 sm:p-[6%] lg:px-[4%] rounded-lg shadow-3xl" onSubmit={handleSubmit}>
            <div className="mb-7">
              <div className=" h-28 w-28 rounded-lg bg-blue-200 flex justify-center items-center"><img src={afficher} alt="" /></div>
              <div className=" relative">
                <input type="file" name="" id="bim" className="hidden" onChange={onImageChange} />
                <label
                  htmlFor="bim"
                  className="absolute right-[-8px] bottom-[-8px] bg-white rounded-full p-1 shadow-3xl cursor-pointer"
                >
                  <DownloadIcon className=" h-6" />
                </label>
              </div>
            </div>
            <input
              type="text"
              placeholder="Titre"
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
              onChange={ e => settitle(e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder="Description"
              onChange={ e => setdesc(e.target.value)}
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none resize-none"
            ></textarea>
            <input
              type="number"
              placeholder="Coût"
              onChange={ e => setcout(e.target.value)}
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Date de L'évenement "
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
              onChange={ e => setday(e.target.value)}
              onFocus={(e) => {
                e.target.type = "date";
              }}
              onBlur={(e) => {
                e.target.value
                  ? (e.target.type = "text")
                  : (e.target.type = "date");
              }}
              onClick={(e) => {
                e.target.type = "date";
              }}
            />
            <input type="number" placeholder="Nombre de place"  
              value={place}
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
              // onChange={e => pass}
            />
            <div className="flex justify-start items-center mb-6 w-full">
              <input
                checked={!present}
                type="checkbox"
                onChange={(e) => {
                  setpresent(!present);
                  if(present){
                    setplace(100)
                    console.log(present)
                  }else{
                    setplace(0)
                    console.log(present)
                  }
                }}
                id="souvenir"
                className=" h-5 w-5 mr-4"
              />
          <label htmlFor="souvenir" className="2xl:text-xl">
            Presidentiel
          </label>
        </div>
            <button className="w-full py-4 text-white bg-blue-200 rounded-lg mb-4">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formevent;
