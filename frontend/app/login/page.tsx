import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden px-4">
      
      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <svg className="w-8 h-8" fill="#000">
          <use href={`/sprite.svg?v=1#icon-logo`}></use>
        </svg>
        <p className="text-lg font-bold">Pet Shelter</p>
      </div>

      <div className="absolute left-0 bottom-20 hidden md:block transform translate-x-[-150px] translate-y-[40px]">
        <Image src="/dogSide.png" alt="Dog" width={400} height={400} />
     </div>
     <div className="absolute right-0 top-20 hidden md:block transform translate-x-[150px] translate-y-[-40px]">
        <Image src="/catSide.png" alt="Cat" width={400} height={400} />
     </div>

      <div className="bg-[#fef4ef] rounded-[32px] shadow-md w-full max-w-md py-12 px-10 text-center z-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
          <svg className="w-6 h-6" fill="#000">
            <use href={`/sprite.svg?v=1#icon-logo`}></use>
          </svg>
          Увійти на платформу
        </h1>

        <form className="space-y-6">
          <div className="text-left">
            <label className="text-sm font-medium mb-1 block">📧 Електронна пошта</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#F87537]"
              placeholder="you@example.com"
            />
          </div>
          <div className="text-left">
            <label className="text-sm font-medium mb-1 block">🔑 Пароль</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-[16px] bg-[#e9e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#F87537]"
              placeholder="********"
            />
          </div>
          <p className="text-sm text-gray-500 text-left">У тебе немає акаунту? <Link href='/register' className="text-[#F87537] cursor-pointer hover:underline">Зареєструватися</Link></p>

          <button
            className="px-8 py-3 rounded-[16px] bg-[#F87537] text-white font-semibold text-[16px] shadow-md hover:bg-[#e56d30] transition"
          >
            Увійти
          </button>
        </form>

        <div className="flex items-center gap-4 mt-8 justify-center">
          <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow border hover:bg-gray-50 transition">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex-1 flex items-center justify-center border-none gap-2 py-3 bg-white rounded-[12px] shadow border hover:bg-gray-50 transition">
            <FaGithub size={20} /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
