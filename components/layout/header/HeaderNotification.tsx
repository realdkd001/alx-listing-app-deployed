import React from 'react'
import Image from 'next/image';
import { HeaderNotificationText } from '../../../constants';
import { CaseMinimalistic } from '../../../constants';

const HeaderNotification = () => {
  return (
    <div className='flex justify-center font-Quicksand items-center 
    text-[#EBEBEB] flex-row h-23 sm:h-12 bg-colorPrimary w-full px-4 sm:px-0'>

      <div className='mt-4 sm:mt-0 flex justify-center items-center gap-x-4 sm:gap-x-8'>
        <div>
          <Image src={CaseMinimalistic} width={24} height={24} alt='Case logo' />
        </div>
        <p className='text-xs sm:text-base font-semibold tracking-wide'>{HeaderNotificationText}</p>

        <button className="bg-colorSecondary whitespace-nowrap text-xs sm:text-sm  px-4 py-2 sm:py-2 sm:px-6 rounded-[50px]">
          More Info
        </button>
      </div>

    </div>
  )
}

export default HeaderNotification