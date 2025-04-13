import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { HiOutlineHeart } from "react-icons/hi2"

const volunteerProfile = () => {
    return (
        <div>
            <div className="flex gap-10 mb-10">
                <Image src="/person.png" alt="Dog" width={360} height={360} />
                <div>
                    <p className="text-[48px] font-bold ьи-5">Олена Кравець</p>
                    <p className="text-[24px] text-[#888888] font-semibold">
                    Місто: Львів<br />
                    Електронна пошта: olena@example.com
                    </p>
                    <p className="text-[48px] font-bold ьи-5">Активність:</p>
                    <p className="text-[24px] text-[#888888] font-semibold">
                    Кількість переданих тваринок:  10<br/>
                    Кількість відгуків: 20
                    </p>
                </div> 
            </div>
            <p className="text-[48px] font-bold mb-6">Улюблені оголошення:</p>
            <div className="flex gap-6 w-full items-center mb-40">
                <FaChevronLeft size={36} />
                <div className="flex w-full justify-between">
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
                <FaChevronRight size={36} />
            </div>

            <div className="relative">
                <div className="w-full h-70 relative">
                    <Image src='/footerImg.png' alt="homeImg" fill className="object-contain"/> 
                    <div className="mt-10 flex items center justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                        <svg  className="w-10 h-8" fill="#2F2929" >
                            <use href={`/sprite.svg?v=1#icon-logo`}></use>
                        </svg>
                        <p className="text-[26px] font-bold color">Pet Shelter</p>
                        </div>
                        <p className="text-[#888] text-[16px] mb-4">Приєднуйся до великої справи — даруй<br /> шанс на краще життя тим, хто чекає на<br /> турботу!</p>  
                        <div className="flex items-center gap-4">
                        <svg  className="w-7 h-7" >
                            <use href={`/sprite.svg#icon-facebook`}></use>
                        </svg>
                        <svg  className="w-7 h-7">
                            <use href={`/sprite.svg#icon-instagram`}></use>
                        </svg>
                        <svg  className="w-7 h-7">
                            <use href={`/sprite.svg#icon-twitter`}></use>
                        </svg>
                        <svg  className="w-7 h-7">
                            <use href={`/sprite.svg#icon-youtube`}></use>
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-[26px] font-bold color mb-4">Звяжіться з нами: </p>
                        <p className="text-[#888] text-[16px] mb-4">Маєте питання або пропозиції? Залиште <br /> свій email — ми зв’яжемося з вами!</p>
                        <div className="flex items-center gap-4">
                        <input
                            type="text"
                            className=" px-6 py-4 w-75 rounded-[18px] bg-[#e9e5e5] text-[#2f2929] placeholder:text-[#aaa] shadow-md focus:outline-none focus:ring-2 focus:ring-[#4AA8FF]"
                        />
                        <button className="bg-[#D9A4A9] text-white text-[16px] font-semibold px-6 py-3 rounded-[16px] shadow-md hover:bg-[#c18c91] transition duration-200">
                            Відправити
                        </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-[26px] font-bold color mb-4">Контакти: </p>
                        <p className="text-[#888] text-[16px] mb-2">📍8592 Fairground St. ,Tallahassee, FL 32303</p>
                        <p className="text-[#888] text-[16px] mb-2">📞 +775 378-6348</p>
                        <p className="text-[#888] text-[16px] mb-2">✉️ rgarton@outlook.com</p>
                    </div>  
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default volunteerProfile