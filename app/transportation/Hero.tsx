'use client'
import React from 'react'
import Header from './_Components/Header'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from './_Context/SidebarContext'
import Link from 'next/link'
const Hero = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`h-screen flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[calc(100vw-100px)]' : 'w-[calc(100vw-280px)]'}`}>
      <Header />
      <div className='flex-1 overflow-y-auto no-scrollbar'>
        <div className='min-h-[100vh] h-auto w-full border-[#D9DBE9] border-l-[0.5px]'>
          <div className='p-[50px] flex items-center'>
            <p className='p-0 m-0 hover:text-[#04E2E2] transition-colors duration-200 cursor-pointer'>Home</p>
            <Icon icon="ep:d-arrow-right" width="18" height="18" className='hover:text-[#04E2E2] transition-colors duration-200 cursor-pointer' />
          </div>

          <div className='h-[120px] w-full flex justify-center items-center bg-[#FFF9E5] mt-[20px]'>
            <p className='text-black font-bold'>No Ads yet...</p>
          </div>

          <div className='mt-[50px] flex justify-evenly w-full items-center'>
          <div className='bg-white shadow-md p-0 rounded-[20px] h-[320px] w-[320px]'>
              <Image className='rounded-t-[20px] h-[160px] object-cover' src='/Airplane.webp' alt='passenger plane' height={160} width={320} />
              <div>
                <p className='font-bold text-[1.3rem] text-[#4E4B66] pl-[15px] p-[10px]'>Travel by Air</p>
                <div className='flex justify-between items-center px-[12px]'>
                  <p className='text-[#4E4B66]'> Plan your next trip or commute with our transportation features</p>
                  <Link href='/transportation/flight/flight-booking'>
                  <button className="h-[44px] w-[50px] flex justify-center items-center rounded-md bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] shadow-[0_4px_0_#009999] hover:translate-y-[2px] hover:shadow-[0_2px_0_#009999] transition-all duration-200">
                    <Icon className='p-0 m-0 text-white transition-transform duration-200 group-hover:translate-x-1' icon="pepicons-pop:arrow-right" width="20" height="20" />
                  </button>
                  </Link>
                </div>
              </div>
            </div>


            <div className='bg-white shadow-md p-0 rounded-[20px] h-[320px] w-[320px]'>
              <Image className='rounded-t-[20px] h-[160px] object-cover' src='/coach-bus.webp' alt='passenger plane' height={160} width={320} />
              <div>
                <p className='font-bold text-[1.3rem] text-[#4E4B66] pl-[15px] p-[10px]'>Travel by Land</p>
                <div className='flex justify-between items-center px-[12px]'>
                  <p className='text-[#4E4B66]'> Plan your next trip or commute with our transportation features</p>
                  <Link href='/transportation/bus/bus-booking'>
                  <button className="h-[44px] w-[50px] flex justify-center items-center rounded-md bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] shadow-[0_4px_0_#009999] hover:translate-y-[2px] hover:shadow-[0_2px_0_#009999] transition-all duration-200">
                    <Icon className='p-0 m-0 text-white transition-transform duration-200 group-hover:translate-x-1' icon="pepicons-pop:arrow-right" width="20" height="20" />
                  </button>
                </Link>
                </div>
              </div>
            </div>


            <div className='bg-white shadow-md p-0 rounded-[20px] h-[320px] w-[320px]'>
              <Image className='rounded-t-[20px] h-[160px] object-cover' src='/boat.webp' alt='passenger plane' height={160} width={320} />
              <div>
                <p className='font-bold text-[1.3rem] text-[#4E4B66] pl-[15px] p-[10px]'>Travel by Water</p>
                <div className='flex justify-between items-center px-[12px]'>
                  <p className='text-[#4E4B66]'> Plan your next trip or commute with our transportation features</p>
                  <Link href='/transportation/boat/boat-booking'>
                  <button className="h-[44px] w-[50px] flex justify-center items-center rounded-md bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] shadow-[0_4px_0_#009999] hover:translate-y-[2px] hover:shadow-[0_2px_0_#009999] transition-all duration-200">
                    <Icon className='p-0 m-0 text-white transition-transform duration-200 group-hover:translate-x-1' icon="pepicons-pop:arrow-right" width="20" height="20" />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white h-auto w-full pb-[70px] flex justify-center items-center'>
            <div className='mt-[70px] bg-[#FFF9E5] flex flex-col justify-center w-[92%] h-[220px] rounded-[20px] p-10 mb-[100px]'>
              <div className='flex justify-between items-center px-[12px]'>
                <p className='text-[1.8rem] font-bold w-[45%]'>Find your ideal flight with exclusive deals on airfare and travel options</p>
                <Link href='/transportation/flight/flight-booking' className='no-underline'>
                <button className='rounded-[35px] flex items-center justify-center h-[50px] gap-x-2 min-w-[250px] w-auto bg-[#FFFFFF] text-[#292D32] shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>View details
                  <Icon className='p-0 m-0 transition-transform duration-200 group-hover:translate-x-1' icon="pepicons-pop:arrow-right" width="20" height="20" />
                </button>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
