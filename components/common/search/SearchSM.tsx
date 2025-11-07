import React from 'react'
import Input from '../Input'
import { SEARCHFIELDSM, MagniferIcon } from '@/constants'
import Image from 'next/image'

function SearchSM() {
    return (
        <div className="px-4 w-full h-14.5 flex justify-center items-center 
        rounded-[60px] border border-coloraccent">
            {SEARCHFIELDSM.map((f, index) => (
                <div
                    key={index}
                    className='flex justify-center items-center'
                >
                    <div className='flex justify-center items-center'>
                        <Input
                            label={f.label != "" ? f.label : ""}
                            placeholder={f.placeholder}
                            type={f.type}
                        />
                        {index !== SEARCHFIELDSM.length - 1 &&

                        <div className='w-fit px-2 h-full'>
                            <div className='w-[5px] h-[5px] bg-gray-500 rounded-full'>
                            </div>
                        </div>
                        


                        }
                    </div>

                </div>

            ))}

            <div className=" h-full flex  items-center">
                <button
                    aria-label="Search"
                    className="hover:cursor-pointer flex justify-center items-center 
                    w-8 h-8 bg-[#FFA800] rounded-full"
                >
                    <Image src={MagniferIcon} width={15} height={15} alt="Search Icon" />
                </button>
            </div>
        </div>
    )
}

export default SearchSM