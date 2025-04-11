import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <div>
    <div className="px-30 pt-10">
      <div className="flex gap-20">
        <div>
          <div className="flex items-center gap-4 mb-14">
            <svg  className="w-14 h-12" fill="#2F2929" >
              <use href={`/sprite.svg?v=1#icon-logo`}></use>
            </svg>
            <p className="text-[36px] font-bold color">Pet Shelter</p>
          </div>
          <div className="pl-20 ">
            <p className="text-[48px] font-bold color mb-10">Даруємо другий шанс <br /> тим, хто цього потребує.</p>
            <p className="text-[16px] font-bold color mb-9">Наша платформа створена для того, щоб об’єднати людей,<br /> яким не байдуже життя безпритульних тварин.</p>
            <p className="text-[24px] font-bold color mb-8">На нашій платформі ви можете:</p>
            <div className="flex items-center gap-7 mb-16">
              <div>
                <div className="bg-[#F87537] py-4 px-6 rounded-[16px] text-ceneter text-[#fff] text-[16px] mb-7">🧡 Повідомити Про Знайдену Тварину</div>
                <div className="bg-[#D9A4A9] py-4 px-6 rounded-[16px] text-ceneter text-[#fff] text-[16px]">🌸 Передати Її В Надійні Руки</div>
              </div>
              <div>
                <div className="bg-[#D9A4A9] py-4 px-6 rounded-[16px] text-ceneter text-[#fff] text-[16px] mb-7">🐾 Знайти Нового Друга</div>
                <div className="bg-[#F87537] py-4 px-6 rounded-[16px] text-ceneter text-[#fff] text-[16px]">🎁 Допомогти Їжею Або Донатом</div>
              </div>
            </div>
            <Link href='/login' className="bg-[#F87537] py-5 px-8 rounded-[12px] text-ceneter text-[#fff] font-semibold text-[20px]">
              Приєднатися
            </Link>
          </div>
        </div>
        <div className="w-195 h-195 relative">
          <Image src='/homeImg.jpg' alt="homeImg" fill className="object-contain"/>       
        </div>
      </div>
    </div>
    <div className="relative pr-30 pl-50">
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
  );
}
