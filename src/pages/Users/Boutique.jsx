import React, { useEffect, useState } from 'react'
import Gridlivre from '../../composant/Boutique/Gridlivre'
import Headerboutique from '../../composant/Boutique/Headerboutique'
import Navbar from '../../composant/General/Navbar'
import Footer from '../../composant/General/Footer'
import { livres as livresList} from "../../data";
import axios from '../../api/axios'

function Boutique() {
  const [livres,setlivres] = useState([])

  useEffect(()=>{

    axios.get(`/book/create`)
    .then((resp) =>{
      console.log(resp.data);
      setlivres(resp.data)
    }).catch((errors) =>{
      console.log(errors.request.response);
    })

  },[])

  return (
    <div>
        <Navbar />
        <Headerboutique />
        <Gridlivre livres={livres} />
        <Footer />
    </div>
  )
}

export default Boutique