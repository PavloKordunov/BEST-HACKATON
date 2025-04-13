"use client"

import { useUserRegister } from "@/hooks/useRegister";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShelterRegister() {
    const {user, setUser} = useUserRegister()
      const [volunteerData, setVolunteerData] = useState({
        name: '',
        location: '',
        city: '',
        shelterType: '',
        telephoneNumber: ''
      })
      
      const createShelter = async() => {
        try {
          const res = await fetch('http://localhost:8080/api/shelter/new', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user?.email,
              password: user?.password,
              name: volunteerData.name,
              city: volunteerData.city,
              location: volunteerData.location,
              shelterType: volunteerData.shelterType,
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
        <Image src="/shelterImg.png" alt="Dog" width={900} height={700} />
     </div>
     
     <div className="bg-[#FF7A2F] rounded-2xl p-8 w-full max-w-md mx-auto text-white text-center space-y-5 shadow-lg">
  <h2 className="text-xl font-bold">Розкажіть трохи про свій притулок 🐾</h2>

  <div className="text-left">
    <label className="block mb-1">🏠 Назва притулку</label>
    <input
      value={volunteerData.name}
      onChange={(e) => setVolunteerData((prev) => ({...prev, name: e.target.value}))}
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">🏙️ Місто</label>
    <input
      value={volunteerData.city}
      onChange={(e) => setVolunteerData((prev) => ({...prev, city: e.target.value}))}
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">📍 Адреса місця знаходження</label>
    <input
      value={volunteerData.location}
      onChange={(e) => setVolunteerData((prev) => ({...prev, location: e.target.value}))}
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">🐶 Вид притулку</label>
    <input
      value={volunteerData.shelterType}
      onChange={(e) => setVolunteerData((prev) => ({...prev, shelterType: e.target.value}))}    
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">📞 Контактний номер телефону</label>
    <input
      value={volunteerData.telephoneNumber}
      onChange={(e) => setVolunteerData((prev) => ({...prev, telephoneNumber: e.target.value}))}         
      type="tel"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <Link onClick={createShelter} href='/login' className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition">
    Завершити реєстрацію
  </Link>
</div>

    </div>
  );
}
