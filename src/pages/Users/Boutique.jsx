import React from 'react'
import Gridlivre from '../../composant/Boutique/Gridlivre'
import Headerboutique from '../../composant/Boutique/Headerboutique'
import Navbar from '../../composant/General/Navbar'
import Footer from '../../composant/General/Footer'
import { livres as livresList} from "../../data";

function Boutique() {

  return (
    <div>
        <Navbar />
        <Headerboutique />
        <Gridlivre livres={livresList} />
        <Footer />
    </div>
  )
}

export default Boutique