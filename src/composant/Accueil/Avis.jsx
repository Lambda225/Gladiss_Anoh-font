import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carteart from '../General/Carteart';
import Itemavis from './Itemavis';
import { avis } from '../../data';

function Avis() {
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };
  return (
    <div className='py-20'>
        <h1 className="text-xl text-center font-semibold pb-3 after:content-[''] after:h-1 after:w-[20%] md:after:w-[10%] lg:after:w-[5%] after:bg-marron-200 relative after:absolute after:translate-x-[-50%] after:left-1/2 after:bottom-0 mb-10 2xl:text-4xl">Avis internautes</h1>
        <div>
        <Carousel responsive={responsive} infinite={true} className="py-10 z-0">
          {avis.filter(masque => masque.masquer == false).map(avi => {
            return <div key={avi.id} className="flex justify-center"><Itemavis avi={avi} /></div>
          })}
        </Carousel>
        </div>
    </div>
  )
}

export default Avis