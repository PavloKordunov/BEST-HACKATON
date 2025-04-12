"use client"

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {

    const [active, setActive] = useState("home");

    return (
        <div className="w-full bg-[#fff] px-10 py-6 rounded-[40px] shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
                <svg className="w-7 h-7" fill="#000">
                    <use href={`/sprite.svg?v=1#icon-logo`}></use>
                </svg>
                <p className="text-[20px] font-bold">Pet Shelter</p>
            </div>
            <div className="flex gap-12">
                <p
                    onClick={() => setActive("home")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "home" ? "text-[#F87537] font-bold" : "text-black font-medium"
                    }`}
                >
                    Домашня
                    {active === "home" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F87537]"></span>
                    )}
                </p>
                <p
                    onClick={() => setActive("search")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "search" ? "text-[#F87537] font-bold" : "text-black font-medium"
                    }`}
                >
                    Пошук
                    {active === "search" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F87537]"></span>
                    )}
                </p>
                <p
                    onClick={() => setActive("stories")}
                    className={`text-[20px] cursor-pointer relative transition duration-200 ${
                    active === "stories" ? "text-[#F87537] font-bold" : "text-black font-medium"
                    }`}
                >
                    Pet stories
                    {active === "stories" && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#F87537]"></span>
                    )}
                </p>
            </div>
            <FaUserCircle size={36} color="#2F2929" />            
        </div>
    )
}

export default NavBar