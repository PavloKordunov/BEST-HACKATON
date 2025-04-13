import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { HiOutlineHeart } from "react-icons/hi2"

const AnnouncementPage = () => {
    return (
        <div className="w-full">
            <div className="flex">
                <div className="flex flex-col ml-10">
                    <Image src="/catImg.png" alt="Dog" width={429} height={429} className="mb-6" />
                    <div className="bg-[#F87537] w-fit mb-8 py-5 px-7 rounded-[12px] text-ceneter text-[#fff] font-semibold text-[20px]">
                        Допомогти донатом
                    </div>
                    <p className="text-[20px] font-bold mb-4">Місце знаходження:</p>
                    <Link href="/profile/shelter/:id" className="flex gap-2">
                        <Image src="/shelterLogo.png" alt="Dog" width={56} height={53} className="mb-6" />
                        <div className="w-fit h-fit bg-[#FAF3EF] rounded-[20px] p-2">
                            <p className="text-[13px] font-semibold">Домівка врятованих тварин</p>
                            <p className="text-[12px] text-[#888888] font-semibold">м.Львів вул. Олекси Довбуша, 24</p>
                        </div>
                    </Link>
                </div>
                <div className="w-full">
                    <div className="w-full bg-[#FAF3EF] rounded-[60px] p-10 gap-7 flex flex-col mb-10">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-[48px] font-bold ">Мурчик</p>
                            <HiOutlineHeart size={48} color="#F87537" />
                        </div>
                        <p className="text-[24px]/8 text-[#888888] font-semibold">
                        Вік: 2 роки<br/>
                        Стать: дівчинка<br/>
                        Порода: британська короткошерста (можлива змішана порода)<br/>
                        Розмір: середній<br/>
                        Колір шерсті: сірий з відтінками бежевого<br/>
                        Стан здоров’я: потребує лікування / на реабілітації<br/>
                        </p>
                    </div>
                    <div className="w-full bg-[#FAF3EF] rounded-[60px] p-10 gap-7 flex flex-col mb-10">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-[48px] font-bold ">Детальна інформація:</p>
                        </div>
                        <p className="text-[24px]/8 text-[#888888] font-semibold">
                        Мурчик — неймовірно ніжна та спокійна кішечка, яка дуже цінує людську увагу й ласку. Вона легко знаходить спільну мову з людьми, добре адаптується до нового середовища, особливо коли відчуває турботу і безпеку. Любить затишні куточки, часто мурчить, коли поруч хтось із людей, та із задоволенням проводить час біля вікна, спостерігаючи за тим, що відбувається на вулиці.
                        Вона має спокійний характер, не конфліктує з іншими котами, терпляча й ніжна з дітьми. Мурчик ще проходить реабілітацію після складного періоду вуличного життя, тому потребує регулярного догляду, дотримання рекомендацій ветеринара та лікувального харчування.
                        Попри випробування, через які їй довелося пройти, Мурчик залишилась дуже довірливою й лагідною кішкою, і щиро чекає на людину, яка подарує їй дім, турботу та любов.
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-[48px] font-bold mb-6">Фото:</p>

            <div className="flex gap-6 w-full items-center mb-40">
                <FaChevronLeft size={36} />
                <div className="flex w-full justify-between">
                    <div className="w-90 bg-[#FAF3EF] rounded-[20px] pb-4">
                        <Image src="/catsImg.png" alt="Dog" width={360} height={240} className="mb-4" />
                    </div>
                    <div className="w-90 bg-[#FAF3EF] rounded-[20px] pb-4">
                        <Image src="/catsImg.png" alt="Dog" width={360} height={240} className="mb-4" />
                    </div>
                    <div className="w-90 bg-[#FAF3EF] rounded-[20px] pb-4">
                        <Image src="/catsImg.png" alt="Dog" width={360} height={240} className="mb-4" />
                    </div>
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

export default AnnouncementPage