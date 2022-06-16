import React from "react";
import Adnavbar from "../../composant/General/Adnavbar";
import Adsearchbar from "../../composant/General/Adsearchbar";
import { DownloadIcon } from "@heroicons/react/solid";

function Formevent() {
  return (
    <div className="flex">
      <Adnavbar />
      <div className="w-3/4 h-screen overflow-y-scroll">
        <Adsearchbar />
        <div className="bg-rose-50 py-10 flex justify-center items-center min-h-full">
          <form className="flex flex-col w-6/12 items-center bg-white px-[8%] py-9 lg:py-7 sm:p-[6%] lg:px-[4%] rounded-lg shadow-3xl">
            <div className="mb-7">
              <div className=" h-28 w-28 rounded-lg bg-blue-200 flex justify-center items-center"></div>
              <div className=" relative">
                <input type="file" name="" id="bim" className="hidden" />
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
            />
            <textarea
              name=""
              id=""
              placeholder="Description"
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none resize-none"
            ></textarea>
            <input
              type="text"
              placeholder="Coût"
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Date de L'évenement "
              className="w-full bg-transparent border-b-2 border-blue-200 py-2 mb-8 focus:outline-none"
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
