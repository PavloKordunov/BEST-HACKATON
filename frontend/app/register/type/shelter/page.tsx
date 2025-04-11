import Image from "next/image";
import Link from "next/link";

export default function ShelterRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden px-10">
      
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <svg className="w-8 h-8" fill="#000">
          <use href={`/sprite.svg?v=1#icon-logo`}></use>
        </svg>
        <p className="text-lg font-bold">Pet Shelter</p>
      </div>

      <div className=" hidden md:block ">
        <Image src="/shelterImg.jpg" alt="Dog" width={900} height={700} />
     </div>
     
     <div className="bg-[#FF7A2F] rounded-2xl p-8 w-full max-w-md mx-auto text-white text-center space-y-5 shadow-lg">
  <h2 className="text-xl font-bold">Розкажіть трохи про свій притулок 🐾</h2>

  <div className="text-left">
    <label className="block mb-1">🏠 Назва притулку</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">🏙️ Місто</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">📍 Адреса місця знаходження</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">🐶 Вид притулку</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left">
    <label className="block mb-1">📞 Контактний номер телефону</label>
    <input
      type="tel"
      className="w-full px-4 py-2 rounded-md bg-[#FCA27E] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <button className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition">
    Завершити реєстрацію
  </button>
</div>

    </div>
  );
}
