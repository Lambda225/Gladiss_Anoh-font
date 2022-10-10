import React from "react";
import {
  BellIcon,
  ChatIcon,
  UserIcon,
  DotsVerticalIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [nav, setNav] = useState(false);
  const changeNav = () => {
    setNav(!nav);
  };
  const [sousmenu, setsousmenu] = useState(false);
  return (
    <div>
      <nav className="flex justify-between py-8 px-7 bg-rose-50 border-[1px] border-b-marron-200 fixed w-full z-30">
        <div className="flex">
          <h1 className="font-bold items-center flex text-2xl 2xl:text-4xl">
            <NavLink to="/" className='relative'>NALA <span className=" absolute bottom-[-10px] left-4 font-normal text-xs">coaching</span> </NavLink>
          </h1>
          <ul className="hidden md:flex items-center ml-8">
            <NavLink to="/forum">
              <li className="mx-3 2xl:text-2xl">Forum</li>
            </NavLink>
            <li className="mx-3 group relative">
              <span className=" cursor-pointer 2xl:text-2xl">Ressources</span>
              <ul className="bg-white hidden group-hover:block absolute bottom-[-52px] 2xl:bottom-[-60px] translate-y-1/2 left-0 rounded-lg border-[1px] border-gray-400 overflow-hidden">
                <li className="mb-2 2xl:text-2xl hover:bg-gray-100 py-3 px-5">
                  <NavLink to="/article">Article</NavLink>
                </li>
                <li className="2xl:text-2xl hover:bg-gray-100 py-3 px-5">
                  <NavLink to="/podcast">Podcast</NavLink>
                </li>
              </ul>
            </li>
            <NavLink to="/calendrier">
              <li className="mx-3 2xl:text-2xl">Calendrier</li>
            </NavLink>
            <NavLink to="/boutique">
              <li className="mx-3 2xl:text-2xl">Boutique</li>
            </NavLink>
            <NavLink to="/apropos">
              <li className="mx-3 2xl:text-2xl">A propos</li>
            </NavLink>
          </ul>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <NavLink to="/message">
            <div>
              <ChatIcon className="h-6 mx-2 2xl:h-10" />
            </div>
          </NavLink>
          <div>
            <BellIcon className="h-6 mx-2 2xl:h-10" />
          </div>
          <NavLink to="/userinfo">
            <div className="h-16 w-16 2xl:h-20 2xl:w-20 mx-2 rounded-full bg-white flex justify-center items-center">
              <UserIcon className="h-10 2xl:h-14" />
            </div>
          </NavLink>
          <div
            onClick={changeNav}
            className="cursor-pointer hidden mx-2 sm:block md:hidden"
          >
            <DotsVerticalIcon className="h-6" />
          </div>
        </div>
        <div onClick={changeNav} className="cursor-pointer sm:hidden">
          <DotsVerticalIcon className="h-6" />
        </div>
      </nav>
      <div className=" h-24 sm:h-32"></div>
      <div></div>
      <div
        className={`fixed w-full h-screen z-50 bg-white top-0 duration-200 ease-ino overflow-y-scroll sm:overflow-auto sm:w-1/2 ${
          !nav ? "right-[-100%]" : "right-0"
        }`}
      >
        <div className="flex justify-between sm:justify-end items-center py-8 px-7 bg-white">
          <h1 className="font-bold text-2xl sm:hidden">
            <NavLink to="/">LOGO</NavLink>
          </h1>
          <div className="flex md:hidden justify-center items-center">
            <div>
              <ChatIcon className="h-6 mx-2 hidden sm:block md:hidden" />
            </div>
            <div>
              <BellIcon className="h-6 mx-2 hidden sm:block md:hidden" />
            </div>
            <NavLink to="/userinfo ">
              <div className="h-16 w-16 mx-2 rounded-full bg-rose-50 hidden sm:flex md:hidden justify-center items-center">
                <UserIcon className="h-10" />
              </div>
            </NavLink>
            <div onClick={changeNav} className="cursor-pointer mx-2">
              <DotsVerticalIcon className="h-6" />
            </div>
          </div>
        </div>
        <ul className="flex flex-col relative overflow-hidden">
          <NavLink to="/forum">
            <li className="px-8 py-5 border-b-2 border-marron-200">Forum</li>
          </NavLink>
          <li
            className="px-8 py-5 border-b-2 border-marron-200 flex justify-between"
            onClick={(e) => {
              setsousmenu(!sousmenu);
            }}
          >
            Post <ChevronRightIcon className="h-6" />
          </li>
          <NavLink to="/calendrier">
            <li className="px-8 py-5 border-b-2 border-marron-200">
              Calendrier
            </li>
          </NavLink>
          <NavLink to="/boutique">
            <li className="px-8 py-5 border-b-2 border-marron-200">Boutique</li>
          </NavLink>
          <NavLink to="/apropos">
            <li className="px-8 py-5 border-b-2 border-marron-200">A propos</li>
          </NavLink>
          <ul
            className={`absolute top-0 duration-300 ${
              sousmenu ? "right-0" : "right-[-100%]"
            } bg-white h-screen w-full`}
          >
            <div
              className="flex mb-4 cursor-pointer"
              onClick={(e) => {
                setsousmenu(!sousmenu);
              }}
            >
              <ChevronLeftIcon className="h-6" />{" "}
              <span className="ml-4">Ressources</span>
            </div>
            <li className="px-8 py-5 border-b-2 border-marron-200">
              <NavLink to="/article">Article</NavLink>
            </li>
            <li className="px-8 py-5 border-b-2 border-marron-200">
              <NavLink to="/podcast">Podcast</NavLink>
            </li>
          </ul>
        </ul>
        <NavLink
          to="/connexion"
          className="py-8 px-5 flex items-center w-fit sm:hidden"
        >
          <div className="h-16 w-16 rounded-full bg-rose-50 flex justify-center items-center">
            <UserIcon className="h-10" />
          </div>
          <h4 className="ml-8">Connexion</h4>
        </NavLink>
        <ul className="flex flex-col sm:hidden">
          <NavLink to="/message">
            <li className="px-8 py-5 border-b-2 border-marron-200 flex justify-between">
              Message <ChatIcon className="h-6" />
            </li>
          </NavLink>
          <li className="px-8 py-5 border-b-2 border-marron-200 flex justify-between">
            Notification <BellIcon className="h-6" />
          </li>
        </ul>
        <div className="flex py-8 justify-center">
          <div className="h-14 w-14 rounded-full bg-rose-50 mx-3"></div>
          <div className="h-14 w-14 rounded-full bg-rose-50 mx-3"></div>
          <div className="h-14 w-14 rounded-full bg-rose-50 mx-3"></div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
