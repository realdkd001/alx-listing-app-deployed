import React from 'react'
import { Logo, Profile } from '@/constants';
import Image from 'next/image';
import Button from '../common/Button';
import SearchBar from '../common/search/SearchBar';
import HeaderNotification from './header/HeaderNotification';

const Header = () => {
  return (
    <header className='w-full bg-white  flex flex-col 
    justify-center items-center overflow-hidden'>
      <div className='w-full'>
      <HeaderNotification />
      </div>

      <section className='bg-white h-[88px] w-full border-b
       border-colorborder flex flex-row justify-center gap-x-4 sm:gap-x-8 px-4 sm:px-8 items-center'>
        <div>
          <Image src={Logo} width={58.73} height={30.6} alt='Logo' />
        </div>

        <div className='w-full flex justify-center items-center'>
          <SearchBar />
        </div>

        <div className='flex justify-center bg-colorPrimary rounded-full items-center 2xl:hidden'>
          <Image src={Profile} width={44} height={44} alt='Profile Photo' />
        </div>

        <div className='hidden 2xl:flex gap-x-2'>
          <Button label='Sign in' onClick={() => { }} style={"text-white bg-colorPrimary"} />
          <Button label='Sign up' onClick={() => { }} style={"bg-[#ECECEC]"} />
        </div>
      </section>
    </header>
  )
}

export default Header;