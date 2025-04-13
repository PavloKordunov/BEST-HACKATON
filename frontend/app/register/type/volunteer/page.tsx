'use client'

import { useUserRegister } from "@/hooks/useRegister";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShelterRegister() {

  const {user, setUser} = useUserRegister()
  const [volunteerData, setVolunteerData] = useState({
    name: '',
    superscription: '',
    telephoneNumber: ''
  })
  
  const createVolunteer = async() => {
    try {
      const res = await fetch('http://localhost:8080/api/volunteer/new', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          password: user?.password,
          name: volunteerData.name,
          superscription: volunteerData.superscription,
          telephoneNumber: volunteerData.telephoneNumber
        })
      })

      const data = await res.json()
      console.log(data)
      console.log(volunteerData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden px-10">
      
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <svg className="w-8 h-8" fill="#000">
          <use href={`/sprite.svg?v=1#icon-logo`}></use>
        </svg>
        <p className="text-lg font-bold">Pet Shelter</p>
      </div>

      <div className=" hidden md:block ">
        <Image src="/volonteerImg.png" alt="Dog" width={900} height={700} />
     </div>
     
     <div className="bg-[#E39B9B] rounded-2xl p-8 w-full max-w-md mx-auto text-white text-center shadow-lg border border-blue-300">
  <h2 className="text-xl font-bold mb-4">Розкажіть про себе 🙌</h2>

  <div className="text-left mb-4">
    <label className="block mb-1">🧑‍💼 Ім’я та прізвище</label>
    <input
      value={volunteerData.name}
      onChange={(e) => setVolunteerData((prev) => ({...prev, name: e.target.value}))}
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left mb-4">
    <label className="block mb-1">🏙️ Місто проживання</label>
    <input
      value={volunteerData.superscription}
      onChange={(e) => setVolunteerData((prev) => ({...prev, superscription: e.target.value}))}
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left mb-4">
    <label className="block mb-1">📞 Номер телефону</label>
    <input
      value={volunteerData.telephoneNumber}
      onChange={(e) => setVolunteerData((prev) => ({...prev, telephoneNumber: e.target.value}))}
      type="tel"
      className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left mb-4">
    <p className="mb-2">🐶 Я хочу допомагати з:</p>
    <div className="grid grid-cols-2 gap-2 text-sm">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-orange-500" />
        <span>Доглядом за тваринами</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-orange-500" />
        <span>Перевезенням</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-orange-500" />
        <span>Пошуком нових домівок</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox text-orange-500" />
        <span>Фото / соцмережі</span>
      </label>
    </div>
  </div>

  <div className="text-left mb-6">
    <label className="block mb-1">Інше:</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <Link href='/home' onClick={createVolunteer} className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition">
    Завершити реєстрацію
  </Link>
</div>

    </div>
  );
}
