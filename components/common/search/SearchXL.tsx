import React from 'react'
import Input from '../Input'
import { SEARCHFIELDXL, MagniferIcon } from '@/constants'
import Divide from '../Divide'
import Image from 'next/image'

function SearchXL() {
    return (
        <div className="w-184 h-14.5 grid grid-cols-16 items-center 
        rounded-[60px] px-4 border border-coloraccent">
            {SEARCHFIELDXL.map((f, index) => (
                <div
                    key={index}
                    className={index === 0 ? "col-span-6" : "col-span-3"}
                >
                    <div className='flex justify-center items-center ml-4'>
                        <Input
                            label={f.label}
                            placeholder={f.placeholder}
                            type={f.type}
                        />
                        {index !== SEARCHFIELDXL.length - 1 && <Divide style={"w-[1px] h-6"} />}
                    </div>

                </div>

            ))}

            <div className="col-span-1 w-full h-full flex justify-end items-center">
                <button
                    aria-label="Search"
                    className="hover:cursor-pointer flex justify-center items-center w-10.5 h-10.5 bg-[#FFA800] rounded-full"
                >
                    <Image src={MagniferIcon} width={20} height={20} alt="Search Icon" />
                </button>
            </div>
        </div>
    )
}

export default SearchXL