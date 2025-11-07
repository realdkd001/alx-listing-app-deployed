import React from 'react'
import Image from 'next/image'
import { PropertyProps } from '@/interfaces'

const Card: React.FC<PropertyProps> = ({ name, category, image, address, rating, offers, price }) => {
  return (
    <div className="px-4 w-full min-h-[450px] font-Quicksand grid subgrid ">
      <div className='relative w-full h-[273px] sm:h-[305px]'>
        <Image src={image} fill className='rounded-[20px]' alt='Property Image' />
      </div>

      <div className='flex flex-col gap-y-2 sm:gap-y-4'>
        <section className='flex items-center gap-x-4'>
          {category.map((text, index) => (
            <div key={index} className='bg-[#F9F9F9] h-8 px-3 flex justify-center
             items-center whitespace-nowrap text-xs sm:text-sm rounded-[31px]'>{text}</div>

          ))}
        </section>

        <section className='flex justify-between'>
          <div>
            <h5 className='text-[23px] font-semibold sm:text-[26px]'>{name}</h5>
            <h6 className='font-Quicksand text-lg sm:text-[20px] font-medium'>
              {address?.city}, {address?.country}, {address?.state}
              </h6>
          </div>

          <div className='text-lg flex justify-center gap-x-1 sm:gap-x-2'>
            <div className='relative  w-5 h-5 sm:w-6 sm:h-6'>
              <Image src={"/assets/icons/star.svg"} fill alt='Rating Logo' />
            </div>
            {rating}
          </div>
        </section>

        <section className='flex justify-between'>
          <div className='flex gap-x-4 items-center justify-center px-4 h-11 rounded-[31px] border-2 border-colorborder'>

            <div className='flex justify-center gap-x-2'>
              <div className='relative  w-[20px] h-[20px] sm:w-[23px] sm:h-[23px]'>
                <Image src={"/assets/icons/bed.svg"} fill alt='Bed Logo' />
              </div>
              {offers?.bed}
            </div>

            <div className='flex justify-center gap-x-2'>
              <div className='relative  w-[20px] h-[20px] sm:w-[23px] sm:h-[23px]'>
                <Image src={"/assets/icons/bathtub.svg"} fill alt='Bathtube Logo' />
              </div>
              {offers?.shower}
            </div>

            <div className='flex justify-center gap-x-2'>
              <div className='relative  w-[20px] h-[20px] sm:w-[23px] sm:h-[23px]'>
                <Image src={"/assets/icons/people.svg"} fill alt='People Logo' />
              </div>
              {offers?.shower}
            </div>
          </div>

          <div>
            <span className='font-Quicksand text-[23px] font-semibold sm:text-[26px]'>${price}</span>
            <span className='text-sm font-semibold'>&nbsp;/n</span>
          </div>
        </section>

      </div>

    </div>
  )
}

export default Card