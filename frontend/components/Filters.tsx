'use client'

import { useState } from 'react'
import { Slider } from '@mui/material' // Можна замінити, якщо не хочеш залежність від MUI
import Image from 'next/image'
import Link from 'next/link'

const healthStatuses = [
  { label: 'Повністю здоровий(а)', count: 21 },
  { label: 'Потребує лікування / на реабілітації', count: 28 },
  { label: 'З хронічними захворюванням', count: 12 },
  { label: 'Інвалідність / особливі потреби', count: 80 },
]

const Filters = () => {
  const [selectedHealth, setSelectedHealth] = useState<string[]>([])
  const [ageRange, setAgeRange] = useState<number[]>([0.5, 15])

  const toggleHealth = (label: string) => {
    setSelectedHealth(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  return (
    <aside className="w-[270px] shrink-0 font-sans">
      <h3 className="text-[18px] font-bold mb-4">Фільтр по стану здоров’я</h3>
      <ul className="flex flex-col gap-3 mb-6">
        {healthStatuses.map(({ label, count }, idx) => (
          <label key={idx} className="flex items-start justify-between cursor-pointer text-[14px]">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={selectedHealth.includes(label)}
                onChange={() => toggleHealth(label)}
                className="accent-black mt-[2px]"
              />
              <span>{label}</span>
            </div>
            <span className="text-[#F87537] font-semibold">{count}</span>
          </label>
        ))}
      </ul>

      <h3 className="text-[18px] font-bold mb-2">Фільтр за віком</h3>
      <div className="mb-3 px-2">
        <Slider
          value={ageRange}
          onChange={(_, newValue) => setAgeRange(newValue as number[])}
          valueLabelDisplay="off"
          min={0.5}
          max={15}
          step={0.5}
          sx={{
            color: '#F87537',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 16,
              height: 16,
            },
          }}
        />
      </div>
      <p className="text-sm mb-3 pl-1">Вік: {ageRange[0]}–{ageRange[1]} років</p>
      <button className="bg-black text-white text-sm font-semibold rounded px-3 py-1 ml-1 mb-6">
        Підтвердити
      </button>
      <div className="mb-6">
          <h3 className="text-[18px] font-bold mb-3">Фільтр за розташуванням</h3>
          <input
              type="text"
              placeholder="Введіть місто або область"
              className="w-full border px-3 py-2 rounded text-sm mb-2"
          />
      </div>
        
      <p className="text-[18px] font-bold mb-3">Популярні притулки</p>
      <Link href="/profile/shelter/:id" className="flex gap-2 mb-2">
        <Image src="/shelterLogo.png" alt="Dog" width={56} height={53} className="mb-6" />
        <div className="w-fit h-fit bg-[#FAF3EF] rounded-[20px] p-2">
            <p className="text-[13px] font-semibold">Домівка врятованих тварин</p>
            <p className="text-[12px] text-[#888888] font-semibold">м.Львів вул. Олекси Довбуша, 24</p>
        </div>
    </Link>
    <Link href="/profile/shelter/:id" className="flex gap-2 mb-2">
        <Image src="/shelterLogo.png" alt="Dog" width={56} height={53} className="mb-6" />
        <div className="w-fit h-fit bg-[#FAF3EF] rounded-[20px] p-2">
            <p className="text-[13px] font-semibold">Домівка врятованих тварин</p>
            <p className="text-[12px] text-[#888888] font-semibold">м.Львів вул. Олекси Довбуша, 24</p>
        </div>
    </Link>
    <Link href="/profile/shelter/:id" className="flex gap-2">
        <Image src="/shelterLogo.png" alt="Dog" width={56} height={53} className="mb-6" />
        <div className="w-fit h-fit bg-[#FAF3EF] rounded-[20px] p-2">
            <p className="text-[13px] font-semibold">Домівка врятованих тварин</p>
            <p className="text-[12px] text-[#888888] font-semibold">м.Львів вул. Олекси Довбуша, 24</p>
        </div>
    </Link>
    </aside>
  )
}

export default Filters
