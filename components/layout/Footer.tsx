import Image from "next/image";
import { LogoWhite } from "@/constants";
import Link from "next/link";
import { NavLinks, ButtomNavLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#222222] font-Quicksand
     text-[#CACACA]  w-full min-h-186.5 overflow-hidden ">
      <div className="bg-colorPrimary h-[29px]"></div>

      <div className="mt-8 px-8 sm:px-29">
        <div className="mb-6">
          <Image src={LogoWhite} width={58.73} height={30.6} alt='Logo' />
        </div>

        <div className="mb-15 sm:mb-10 sm:max-w-md  leading-[26px] text-base">
          ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
        </div>

        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-10 justify-between  sm:w-[792px]">
          {
            NavLinks.map((n, index) => (
              <div key={index}>
                <h4 className="mb-4 text-[25px]">{n.title}</h4>
                <ul className="flex flex-col gap-y-[9px]">
                  {n.links.map((l, index) => (
                    <li key={index}><Link  href={l.link}>{l.text}</Link></li>
                  ))}
                </ul>
              </div>
            ))
          }
        </nav>

        <div className="h-[1px] bg-white mt-8 mb-4 sm:mb-0 sm:mt-0 sm:my-20"></div>

        <div className="flex mb-8 text-center sm:text-left flex-col gap-y-6 
        justify-center items-center text-xs sm:text-sm">
          <h5>Some hotel requires you to cancel more than 24 hours before check-in. Details <Link href={"/"} className="text-colorPrimary">here</Link></h5>
          <ul className="text-left flex  sm:flex-row gap-x-4 sm:gap-x-8">
            {
              ButtomNavLinks.map((b, index) => (
                <li key={index}><Link href={b.link}>{b.text}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
