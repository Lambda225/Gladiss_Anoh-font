import React, { useState } from "react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carteart from "../General/Carteart";
import Popart from "../General/Popart";

function Slidearticle({articles,catarticle}) {
  const [itemart, setitemart] = useState({});

  const [catartchoix, setcatartchoix] = useState(1);

  const [liscatart, setliscatart] = useState(false);

  const [opencatre, setopencatre] = useState(false);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="my-20">
      <p className="text-center 2xl:text-2xl">Chercher vous des ressources ?</p>
      <div
        className="flex justify-center items-center mt-8 cursor-pointer "
        onClick={(e) => setliscatart(!liscatart)}
      >
        <h3 className="text-xl font-semibold text-marron-200 2xl:text-3xl">
          {catarticle
            .filter((cat) => cat.id === catartchoix)
            .map((e) => {
              return e.titre;
            })}
        </h3>{" "}
        <ChevronDownIcon className="h-5 ml-4 text-blue-200" />
      </div>
      <ul
        className={`fixed ${
          liscatart ? "flex" : "hidden"
        } z-50 top-0 left-0 w-full h-screen bg-white opacity-90 flex-col justify-center items-center`}
        onClick={(e) => setliscatart(!liscatart)}
      >
        <div className=" absolute top-4 right-4">
          <XIcon
            className=" text-blue-200 h-6 cursor-pointer 2xl:h-10"
            onClick={(e) => setliscatart(!liscatart)}
          />
        </div>
        {catarticle.map((cat) => {
          return (
            <li
              key={cat.id}
              className=" cursor-pointer text-2xl font-semibold mb-6 2xl:text-4xl"
              onClick={(e) => {
                setcatartchoix(cat.id);
                setliscatart(!liscatart);
              }}
            >
              {cat.titre}
            </li>
          );
        })}
      </ul>
      <div>
        <div className="px-10">
          <Carousel
            responsive={responsive}
            autoPlay={false}
            infinite={true}
            className="py-10 z-0"
          >
            {articles
              .filter((cat) => cat.cat_article_id === catartchoix)
              .slice(0, 8)
              .map((art) => {
                return (
                  <div key={art.id} className="flex justify-center">
                    <Carteart
                      opencatre={opencatre}
                      article={art}
                      itemart={itemart}
                      setitemart={setitemart}
                      setopencatre={setopencatre}
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
      <Popart
        opencatre={opencatre}
        setopencatre={setopencatre}
        itemart={itemart}
        setitemart={setitemart}
      />
    </div>
  );
}

export default Slidearticle;
