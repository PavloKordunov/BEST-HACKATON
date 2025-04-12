"use client"

import { useUserRegister } from "@/hooks/useRegister";
import Image from "next/image";;
import Link from "next/link";
import { useState } from "react";

export default function TypePage() {

    const {user, setUser} = useUserRegister()
    const [userType, setUserType] = useState('')

    const handleChange = () => {
        setUser({
            ...user,
            userType: userType,
        })
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4">
      
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <svg className="w-8 h-8" fill="#000">
          <use href={`/sprite.svg?v=1#icon-logo`}></use>
        </svg>
        <p className="text-lg font-bold">Pet Shelter</p>
      </div>

      <div className="absolute left-0 bottom-20 hidden md:block transform translate-x-[-150px] translate-y-[40px]">
        <Image src="/dogSide.png" alt="Dog" width={400} height={400} />
     </div>
     <div className="absolute right-0 top-20 hidden md:block transform translate-x-[150px] translate-y-[-40px]">
        <Image src="/catSide.png" alt="Cat" width={400} height={400} />
     </div>

      <div className="bg-[#fef4ef] rounded-[32px] shadow-md py-16 px-30 text-center z-10">
        <div className="flex-1 justify-center mb-30">
            <p className="text-2xl md:text-3xl font-bold">Оберіть хто ви є:</p>
            <p className="text-[#888] text-[24px] font-bold mb-4">Ми адаптуємо реєстрацію під ваші потреби</p>
        </div>
        <div className="px-15 flex items-center gap-40 mb-30">
            <div className="bg-[#F87537] p-7 rounded-[28px]">
                <div className="flex-1 justify-center">
                    <p className="text-[64px] md:text-3xl font-bold">🏠</p>
                    <p className="text-[#fff] text-[32px] font-bold">Я — Притулок</p>
                    <p className="text-[#fff] text-[16px] font-bold mb-4">Хочу розміщувати тварин <br /> для прилаштування</p>
                    <Link
                        href='/register/type/shelter'
                        className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition"
                        onClick={() => { 
                            setUserType("shelter")
                            handleChange()
                        }}
                    >
                        Продовжити
                    </Link>
                </div>
            </div>
            <div className="bg-[#D9A4A9] p-7 rounded-[28px]">
                <div className="flex-1 justify-center">
                    <p className="text-[64px] md:text-3xl font-bold">🤝</p>
                    <p className="text-[#fff] text-[32px] font-bold">Я — Волонтер</p>
                    <p className="text-[#fff] text-[16px] font-bold mb-4">Хочу допомагати з доглядом<br/> та пошуком домівок</p>
                    <Link
                        href='/register/type/volunteer'
                        className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition"
                        onClick={() => { 
                            setUserType("volunteer")
                            handleChange()
                        }}
                    >
                        Продовжити
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
