import React from "react";
import { useNavigate } from "react-router-dom";

function Btnaddcat(props) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(props.lien)}
      className="flex items-center ml-10 w-fit cursor-pointer"
    >
      <div className="h-14 z-50 shadow-3xl w-14 flex justify-center items-center text-2xl rounded-full bg-white">
        +
      </div>
      <h4 className="px-5 ml-[-10px]  shadow-3xl rounded-r-lg py-2 bg-white">
        {props.categorie}
      </h4>
    </button>
  );
}

export default Btnaddcat;
