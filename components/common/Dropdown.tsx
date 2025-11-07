import React from 'react'
import Image from 'next/image'

const Dropdown = () => {
  return (
    <div>
   
        <button className="flex text-colorSecondary font-Quicksand font-semibold text-[19px] justify-center items-center h-13  w-13
         active:bg-[#F0FFFB] border-[1.5px] border-[#E9E9E9] rounded-full active:border-[#34967C]">
            <Image src={"/assets/icons/arrow.svg"} width={24}  height={24} alt='Dropdown'/>
        </button>
    </div>
  )
}

export default Dropdown