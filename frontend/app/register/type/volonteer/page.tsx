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
        <Image src="/volonteerImg.jpg" alt="Dog" width={900} height={700} />
     </div>
     
     <div className="bg-[#E39B9B] rounded-2xl p-8 w-full max-w-md mx-auto text-white text-center shadow-lg border border-blue-300">
  <h2 className="text-xl font-bold mb-4">Розкажіть про себе 🙌</h2>

  <div className="text-left mb-4">
    <label className="block mb-1">🧑‍💼 Ім’я та прізвище</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left mb-4">
    <label className="block mb-1">🏙️ Місто проживання</label>
    <input
      type="text"
      className="w-full px-4 py-2 rounded-md bg-[#F3BEBE] placeholder-white text-white outline-none"
      placeholder=" "
    />
  </div>

  <div className="text-left mb-4">
    <label className="block mb-1">📞 Номер телефону</label>
    <input
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

  <button className="px-8 py-3 rounded-[16px] bg-[#F68C6B] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition">
    Завершити реєстрацію
  </button>
</div>

    </div>
  );
}
