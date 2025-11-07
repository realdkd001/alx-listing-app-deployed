import Image from 'next/image'
import React from 'react'
import { ArrowLeft } from '@/constants'


function PageNav() {
    return (
        <div className='h-12 sm:h-20 px-6 sm:px-34 flex items-center  bg-[#F8FAFC] text-[#34967C]'>
            <button className='h-full flex relative items-center gap-x-2 sm:gap-x-3
            hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-[1px] hover:after:sm:h-[2px] hover:after:bg-[#34967C]
            hover:after:left-0 hover:after:bottom-0 
            '>
                <div className='relative size-4 sm:size-7'>
                    <Image src={ArrowLeft} fill alt='Go back' />
                </div>
                <span className='text-base sm:text-2xl font-bold'>
                    Booking
                </span>
            </button>
        </div>
    )
}

export default PageNav