import React from 'react'
import Dropdown from './Dropdown'
import Image from 'next/image'

const SortBy = () => {
  return (
    <div className='flex justify-center items-center gap-x-4'>
        <DropBy/>
        <BY />
    </div>
  )
}

const BY= () => {
    return (
        <button className="flex text-colorSecondary font-Quicksand text-[19px] justify-center items-center h-12 px-6 py-2.5
        border-[1.5px] border-[#E9E9E9] rounded-[30px]">
            <span className='text-gray-400'>Sorted by:</span>&nbsp; Highest Price
        </button>
    )
}

const DropBy = () => {
  return (
    <div>
   
        <button className="flex text-colorSecondary font-Quicksand font-semibold text-[19px] justify-center items-center h-13  w-13
         active:bg-[#F0FFFB] border-[1.5px] border-[#E9E9E9] rounded-full active:border-[#34967C]">
            <Image src={"/assets/icons/filter.svg"} width={24}  height={24} alt='Dropdown'/>
        </button>
    </div>
  )
}



export default SortBy
