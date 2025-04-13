import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import { HiOutlineHeart } from "react-icons/hi2"

const ShelterProfilePage = () => {
    return (
        <div>
            <div className="flex gap-15 mb-10">
                <div>
                    <Image src="/shelterLogo.png" alt="Dog" width={360} height={340} className="mb-8" />
                    <p className="text-[32px] font-semibold">Статистика:</p>
                    <p className="text-[24px] text-[#888888] font-semibold">
                    Кількість оголошень:  10<br/>
                    Кількість відгуків:  10<br/>
                    Кількість тварин,<br/>
                    яким уже знайдено дім:  10
                    </p>
                </div>
                <div>
                    <div className="w-full flex items-center  gap-20">
                        <p className="text-[48px] font-bold">Домівка врятованих тварин</p>
                        <p className="text-[48px] font-bold">4.6 ⭐</p>
                    </div>
                    <p className="text-[32px] text-[#888888] font-semibold mb-4">Притулок для тварин</p>

                    <p className="text-[24px] text-[#888888] font-medium">📍8592 Fairground St. ,Tallahassee, FL 32303</p>
                    <p className="text-[24px] text-[#888888] font-medium mb-12">📞 +775 378-6348</p>

                    <div className="flex items-center mb-10">
                        <div className="bg-[#F87537] mr-15 w-fit mb-8 py-5 px-7 rounded-[12px] text-ceneter text-[#fff] font-semibold text-[20px]">
                            Пожертвувати
                        </div>
                        <div className="bg-none mr-5 border-[#A68B8B] border-[2px] w-fit mb-8 py-5 px-7 rounded-[12px] text-ceneter font-semibold text-[20px]">
                            Написати
                        </div>
                        <div className="bg-none border-[#A68B8B] border-[2px] w-fit mb-8 py-5 px-7 rounded-[12px] text-ceneter font-semibold text-[20px]">
                            Подзвонити
                        </div>
                    </div>
                    <p className="text-[24px] text-[#888888] font-semibold max-w-[900px]">Наш притулок – це місце, де кожна тварина отримує шанс на нове життя. Ми відкриті для всіх, хто шукає не лише тимчасове притулок для тварин, а й справжню домівку, де панує любов, турбота та повага до життя. Місія нашого закладу полягає у тому, щоб забезпечити безпечний простір для всіх тварин, надати їм необхідну ветеринарну допомогу, адаптацію до нових умов та знайти для них люблячі родини.</p>
                </div>
            </div>
            <p className="text-[48px] font-bold mb-6">Активні оголошення:</p>
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
            <div className="flex gap-20 items-center mb-4">
                <p className="text-[48px] font-bold">Залиш свій відгук тут:</p>
                <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} color="#888888" size={48} />
                    ))}
                </div>
            </div>
            <input
                type="text"
                className=" px-6 mb-10 py-3 w-200 rounded-[18px] bg-[#e9e5e5] text-[24px] text-[#2f2929] placeholder:text-[#aaa] shadow-md focus:outline-none focus:ring-2 focus:ring-[#4AA8FF]"
            />

            <p className="text-[48px] font-bold mb-5">Відгуки волонтерів:</p>

            <div className="flex gap-3 mb-40">
                <Image src="/person.png" alt="Dog" width={108} height={108} />
                <div>
                <div className="flex gap-10">
                    <div className="flex gap-5 items-center mb-4">
                        <p className="text-[20px] font-bold">Олена</p>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} color="#FFD700" size={24} />
                            ))}
                        </div>
                    </div>
                    <p className="text-[20px] text-[#888888] font-semibold">10 годин назад</p>
                </div>
                <p className="text-[20px] max-w-[800px] text-[#888888] font-semibold">🌟 Дуже вдячна притулку за чудового пса Макса! Все пройшло легко, тварина здорова, доглянута, а команда — неймовірно турботлива. Рекомендую! ❤️</p>
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

export default ShelterProfilePage