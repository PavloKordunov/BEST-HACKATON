'use client'

import Filters from "@/components/Filters"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { HiOutlineHeart } from "react-icons/hi2"

const Search = () => {
    const [petType, setPetType] = useState('Cat')
    return (
        <div className="w-full">
            <div className="w-full bg-[#FAF3EF] rounded-[60px] p-10 gap-40 flex mb-10">
                <div className="w-[50%]">
                    <h1 className="text-[48px] font-bold ">
                    Знайди собі нового друга
                    </h1>
                    <p className="text-[32px]/10 text-[#888888] font-semibold">
                    Шукайте свого нового члена сім’ї серед наших чудових домашніх творин, які можна приютити
                    </p>
                </div>
                <div className=" hidden md:block ">
                    <Image src="/searchImg.png" alt="Dog" width={400} height={400} />
                </div>
            </div>

            <div className="flex justify-between w-full items-center mb-6">
                <p className="text-[48px] font-bold ">Шукай за типом улюбленця</p>
                <div className="flex items-center gap-8">
                    <FaChevronLeft size={36} />
                    <FaChevronRight size={36} />
                </div>
            </div>

            <div className="flex items-center justify-between mb-20">
                <div className="w-[180px]" onClick={() => setPetType("Cat")}>
                    <div className="w-full h-[187px] relative mb-6">
                        {petType === 'Cat' && <Image src="/searchItemBackground.png" alt="Dog" width={180} height={187} className="top-0 absolute z-10" />}
                        <Image src="/catImg.png" alt="Dog" width={160} height={160} className="top-3 right-3 absolute z-100" />
                    </div>
                    <p className="text-[20px] text-center font-semibold">
                        Кіт
                    </p>
                </div>
                <div className="w-[180px]" onClick={() => setPetType("Hamster")}>
                    <div className="w-full h-[187px] relative mb-6">
                        {petType === 'Hamster' && <Image src="/searchItemBackground.png" alt="Dog" width={180} height={187} className="top-0 absolute z-10" />}
                        <Image src="/searchItem1.png" alt="Dog" width={160} height={160} className="top-3 right-3 absolute z-100" />
                    </div>
                    <p className="text-[20px] text-center font-semibold">
                        Хом'як
                    </p>
                </div>
                <div className="w-[180px]" onClick={() => setPetType("Dog")}>
                    <div className="w-full h-[187px] relative mb-6">
                        {petType === "Dog" && <Image src="/searchItemBackground.png" alt="Dog" width={180} height={187} className="top-0 absolute z-10" />}
                        <Image src="/searchItem2.png" alt="Dog" width={160} height={160} className="top-3 right-3 absolute z-100" />
                    </div>
                    <p className="text-[20px] text-center font-semibold">
                        Собака
                    </p>
                </div>
                <div className="w-[180px]" onClick={() => setPetType("Parrot")}>
                    <div className="w-full h-[187px] relative mb-6">
                        {petType === "Parrot" && <Image src="/searchItemBackground.png" alt="Dog" width={180} height={187} className="top-0 absolute z-10" />}
                        <Image src="/searchItem3.png" alt="Dog" width={160} height={160} className="top-3 right-3 absolute z-100" />
                    </div>
                    <p className="text-[20px] text-center font-semibold">
                        Папугай
                    </p>
                </div>
                <div className="w-[180px]" onClick={() => setPetType("Rabbit")}>
                    <div className="w-full h-[187px] relative mb-6">
                       {petType === "Rabbit" && <Image src="/searchItemBackground.png" alt="Dog" width={180} height={187} className="top-0 absolute z-10" />}
                        <Image src="/searchItem4.png" alt="Dog" width={160} height={160} className="top-3 right-3 absolute z-100" />
                    </div>
                    <p className="text-[20px] text-center font-semibold">
                        Кролик
                    </p>
                </div>
                <div className="w-[180px]" onClick={() => setPetType("Turtle")}>
                    <div className="w-full h-[187px] relative mb-6">
                        {petType === "Turtle" && <Image src="/searchItemBackground.png" alt="Dog" width={180} height={187} className="top-0 absolute z-10" />}
                        <Image src="/searchItem5.png" alt="Dog" width={160} height={160} className="top-3 right-3 absolute z-100" />
                    </div>
                    <p className="text-[20px] text-center font-semibold">
                        Черепаха
                    </p>
                </div>
            </div>
            <div className="flex gap-20">
                <Filters />
                <div className="flex flex-wrap ">
                    <Link href='announcement/:id' className="w-fit bg-[#FFF] pb-2">
                        <Image src="/catImg.png" alt="Dog" width={306} height={306} className="mb-4" />
                        <div className="flex justify-between px-8">
                            <div>
                                <p className="texr-[20px] font-semibold">Мурчик</p>
                                <p className="text-[16px]">2 роки</p>
                            </div>
                            <HiOutlineHeart size={24} color="#F87537" />
                        </div>
                    </Link>
                    
                    <Link href='announcement/:id' className="w-fit bg-[#FFF] pb-2">
                        <Image src="/catImg.png" alt="Dog" width={306} height={306} className="mb-4" />
                        <div className="flex justify-between px-8">
                            <div>
                                <p className="texr-[20px] font-semibold">Мурчик</p>
                                <p className="text-[16px]">2 роки</p>
                            </div>
                            <HiOutlineHeart size={24} color="#F87537" />
                        </div>
                    </Link>
                    <Link href='announcement/:id' className="w-fit bg-[#FFF] pb-2">
                        <Image src="/catImg.png" alt="Dog" width={306} height={306} className="mb-4" />
                        <div className="flex justify-between px-8">
                            <div>
                                <p className="texr-[20px] font-semibold">Мурчик</p>
                                <p className="text-[16px]">2 роки</p>
                            </div>
                            <HiOutlineHeart size={24} color="#F87537" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Search