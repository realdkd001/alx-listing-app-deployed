import React from 'react'
import Pill from './Pill'
import { FILTERS } from '@/constants'
import Dropdown from './Dropdown'
import SortBy from './SortBy'


const  FilterSection = () => {
  return (
    <div className='w-full flex justify-between items-center'>
    <div className='flex gap-x-2 sm:gap-x-4'>
        {
            FILTERS.map((f, index) => (
                <Pill key={index} filter={f}/>
            ))
        }
        <div className='w-full'>
        <Dropdown />

        </div>
    </div>

    <div className='w-full flex flex-row-reverse gap-x-4'>
        <SortBy />
    </div>

    </div>
  )
}




export default FilterSection