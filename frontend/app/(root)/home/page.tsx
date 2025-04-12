import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-[#FAF3EF] rounded-[60px] p-10 gap-40 flex mb-10">
                <div className="w-[50%]">
                    <h1 className="text-[48px] font-bold ">
                    Новини, які рятують життя
                    </h1>
                    <p className="text-[32px]/10 text-[#888888] font-semibold">
                    Дізнавайтеся про події, історії успіху та корисні поради від нашої спільноти – разом ми робимо світ кращим для тварин!
                    </p>
                </div>
                <div className=" hidden md:block ">
                    <Image src="/newsImg.png" alt="Dog" width={400} height={400} />
                </div>
            </div>

            <div className="flex gap-6 w-full items-center mb-10">
                <FaChevronLeft size={36} />
                <div className="flex w-full justify-between">
                    <div className="w-90 bg-[#FAF3EF] rounded-[20px] pb-4">
                        <Image src="/newsItemImg.png" alt="Dog" width={360} height={260} className="mb-4" />
                        <p className="text-[32px]/10 text-[#888888] font-semibold ml-10">The Top 10 Most Popular Dogs</p>
                    </div>
                    <div className="w-90 bg-[#FAF3EF] rounded-[20px] pb-4">
                        <Image src="/newsItemImg.png" alt="Dog" width={360} height={260} className="mb-4" />
                        <p className="text-[32px]/10 text-[#888888] font-semibold ml-10">The Top 10 Most Popular Dogs</p>
                    </div>
                    <div className="w-90 bg-[#FAF3EF] rounded-[20px] pb-4">
                        <Image src="/newsItemImg.png" alt="Dog" width={360} height={260} className="mb-4" />
                        <p className="text-[32px]/10 text-[#888888] font-semibold ml-10">The Top 10 Most Popular Dogs</p>
                    </div>
                </div>
                <FaChevronRight size={36} />
            </div>

            <div className="w-full bg-[#FAF3EF] rounded-[60px] p-10 gap-20 flex mb-10">
                <div className="w-[60%]">
                    <h1 className="text-[48px] font-bold ">
                    💔 Тварини, які потребують термінової допомоги
                    </h1>
                    <p className="text-[16px] text-[#888888] mb-4">
                    Вони борються за життя — ти можеш стати їхнім героєм.
                    </p>
                    <p className="text-[32px]/10 text-[#888888] font-semibold">
                    Познайомся з тими, хто зараз проходить лікування або чекає на твою підтримку. Разом ми зможемо подарувати їм шанс на здорове життя!
                    </p>
                </div>
                <div className=" hidden md:block ">
                    <Image src="/helpPet.png" alt="Dog" width={600} height={400} />
                </div>
            </div>

            <div className="flex gap-6 w-full items-center mb-10">
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

            <div className="w-full bg-[#FAF3EF] rounded-[60px] p-10 gap-20 flex mb-10">
                <div className="w-[60%]">
                    <h1 className="text-[48px] font-bold ">
                    Вигравай разом із рятунком!
                    </h1>
                    <p className="text-[32px]/10 text-[#888888] font-semibold">
                    Беріть участь у наших розіграшах – отримуйте корисні призи для вихованців та підтримуйте тварин із притулку!
                    </p>
                </div>
                <div className=" hidden md:block ">
                    <Image src="/prizesImg.png" alt="Dog" width={600} height={400} />
                </div>
            </div>

            <div className="flex justify-between w-full items-center mb-6">
                <p className="text-[48px] font-bold ">Можливі призи за донат </p>
                <div className="flex items-center gap-8">
                    <FaChevronLeft size={36} />
                    <FaChevronRight size={36} />
                </div>
            </div>

            <div className="flex w-full justify-between mb-40">
                <div className="w-fit bg-[#FFF] pb-2">
                    <Image src="/prize1.png" alt="Dog" width={306} height={306} className="mb-4" />
                    <div className="flex justify-between px-8">
                        <div>
                            <p className="texr-[20px] font-semibold">Корм для улюбленця</p>
                            <p className="text-[16px]">За донат від ... гривень</p>
                        </div>
                        <FiArrowRight size={24} color="#F87537" />
                    </div>
                </div>
                <div className="w-fit bg-[#FFF] pb-2">
                    <Image src="/prize2.png" alt="Dog" width={306} height={306} className="mb-4" />
                    <div className="flex justify-between px-8">
                        <div>
                            <p className="texr-[20px] max-w-[250px] font-semibold">Іграшка для улюбленця</p>
                            <p className="text-[16px]">За донат від ... гривень</p>
                        </div>
                        <FiArrowRight size={24} color="#F87537" />
                    </div>
                </div>
                <div className="w-fit bg-[#FFF] pb-2">
                    <Image src="/prize3.png" alt="Dog" width={306} height={306} className="mb-4" />
                    <div className="flex justify-between px-8">
                        <div>
                            <p className="texr-[20px] max-w-[250px] font-semibold">Спальне місце для вашого друга</p>
                            <p className="text-[16px]">За донат від .. гривень</p>
                        </div>
                        <FiArrowRight size={24} color="#F87537" />
                    </div>
                </div>
                <div className="w-fit bg-[#FFF] pb-2">
                    <Image src="/prize4.png" alt="Dog" width={306} height={306} className="mb-4" />
                    <div className="flex justify-between px-8">
                        <div>
                            <p className="texr-[20px] font-semibold">Мисочки для їжі</p>
                            <p className="text-[16px]">За донат від .. гривень</p>
                        </div>
                        <FiArrowRight size={24} color="#F87537" />
                    </div>
                </div>
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

export default HomePage