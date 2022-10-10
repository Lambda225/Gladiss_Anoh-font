import { PencilIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import Navbar from "../../composant/General/Navbar";
import useAuth from "../../hooks/useAuth";

function Userinfo() {
  const { auth } = useAuth();
  const { userInfo } = auth;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center items-center h-screen">
        <div className="h-60 w-48 2xl:w-60 2xl:h-72 flex items-center rounded-lg sm:mr-5 shadow-3xl mb-7 sm:mb-0">
          <UserIcon className=" h-80 text-blue-200" />
        </div>
        <div className="text-center sm:text-left">
          <h1 className=" text-xl 2xl:text-3xl font-semibold mb-2">
            {userInfo.nom}
          </h1>
          <h2 className=" 2xl:text-2xl font-semibold mb-2">
            {userInfo.prenom}
          </h2>
          <h3 className="mb-3 2xl:text-xl">{userInfo.email}</h3>
          <a
            href="#"
            className=" bg-blue-200 rounded-lg flex justify-center items-center 2xl:text-xl text-white py-3"
          >
            <PencilIcon className="h-7 2xl:h-10 mr-1" /> Modifier
          </a>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
