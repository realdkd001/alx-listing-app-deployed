import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAVITEMS } from '@/constants'
import { NAVITEMSFIELD } from '@/interfaces'

const Nav = () => {
    return (
        <div className='w-full pl-10 overflow-hidden'>
            <nav className='flex items-center gap-x-11 w-full h-22 overflow-x-scroll [scrollbar-width:none] 
  [-ms-overflow-style:none] 
  [&::-webkit-scrollbar]:hidden overflow-y-hidden'>
                {NAVITEMS.map((n, index) => (
                    <ITEM key={index} title={n.title} imgsrc={n.imgsrc} />
                ))}
            </nav>
        </div>

    )
}

export const ITEM: React.FC<NAVITEMSFIELD> = ({ title, imgsrc }) => {
    return (
        <button >
            <div className="flex flex-col py-2 justify-center items-center hover:border-b-2 transition-all hover:cursor-pointer hover:border-[#0F4E3D]">
                <Image src={imgsrc} width={31} height={25} alt={`${title} Icon`} />
                <h5 className="text-xs font-medium font-Quicksand text-[#616161] py-1 whitespace-nowrap">
                    {title}
                </h5>
            </div>
        </button>
    )
}


export default Nav