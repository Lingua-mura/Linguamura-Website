'use client'
import React from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../../_Context/SidebarContext'
import Link from 'next/link';
const Hero = () => {
    const { isCollapsed } = useSidebar();

    return (
        <div className={`h-screen flex flex-col transition-all duration-300 ease-in-out border-[#D9DBE9] border-[0.5px] ${isCollapsed ? 'w-[calc(100vw-100px)]' : 'w-[calc(100vw-280px)]'}`}>
            <Header />
            <div className='flex-1 overflow-y-auto no-scrollbar'>
                <div className='min-h-[100vh] h-auto w-full border-[#D9DBE9] border-l-[0.5px]'>
                    <div className='w-[100%] h-[500px] p-0'>
                        <div className='w-full p-[30px] h-1/2 bg-[hsl(180,100%,37%)] text-white'>
                            <div className="flex items-center justify-between w-full">
                                {[
                                    { icon: "solar:bag-4-linear", text: "Market" },
                                    { icon: "ph:building-apartment", text: "Apartments" },
                                    { icon: "mingcute:hotel-line", text: "Hotels" },
                                    { icon: "lucide:home", text: "Properties" },
                                    {
                                        icon: "majesticons:airplane-line",
                                        text: "Travel by Air",
                                    },
                                    {
                                        icon: "teenyicons:car-outline", text: "Travel by land", size: 20,
                                        bg: "#A0EBEB",
                                        textColor: "#4E4B66",
                                    },
                                    { icon: "hugeicons:boat", text: "Travel by water" },
                                ].map(({ icon, text, size = 24, bg, textColor }, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-x-2 cursor-pointer transition-transform duration-300 hover:scale-105 ${bg ? "px-3 py-1 rounded-[30px]" : ""
                                            }`}
                                        style={{
                                            backgroundColor: bg || "transparent",
                                            color: textColor || "inherit",
                                        }}
                                    >
                                        <Icon icon={icon} width={size} height={size} />
                                        <span className="text-[0.9rem]">{text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className='text-white text-[1.9rem] mt-[55px] font-bold'>Bus</p>

                            <div className='leading-none'>
                                <p className='text-white text-[1.2rem] mt-[10px]'>African pro technology powered company providing </p>
                                <p className='text-white text-[1.2rem] mt-[10px]'>seamless services to commuters across africa </p>
                            </div>

                        </div>


                        <div
                            style={{
                                backgroundImage: "url(/coach-bus.webp)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[400px] flex relative justify-center items-start before:content-[''] before:absolute before:inset-0 before:backdrop-blur-[2px] before:bg-black/10"
                        >
                            <p className='text-white text-[2rem] font-bold w-[40%] absolute top-[40%] left-7'>The modern way to <br />commute across cities</p>
                            <div className={`h-[450px] -top-7 right-3 border-[#D9DBE9] border-[0.4px]  ${isCollapsed ? 'w-[450px]' : 'w-[450px]'} bg-[#FCFCFC] absolute rounded-[13px]`}>
                                <div className='h-[70px] text-[#4E4B66] w-full flex items-end rounded-tr-[12px] rounded-tl-[12px] box-border justify-between px-[30px] text-[0.9rem] bg-[#EFF0F6]'>
                                    <p className='text-[#00BBBB] cursor-pointer border-[#00BBBB] border-b-[0.7px]'>Book a seat</p>
                                    <p className='cursor-pointer'>Hire a bus</p>
                                    <p className='cursor-pointer'>Booking status</p>
                                </div>
                                <div className="flex px-[30px] py-[10px] items-center gap-x-6">
                                    <label className="flex items-center gap-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tripType"
                                            className="w-5 h-5 appearance-none rounded-full border border-gray-400 checked:bg-[#04E2E2] checked:border-transparent"
                                        />
                                        <p className="text-gray-900 mt-3 text-[0.8rem]">One way</p>
                                    </label>

                                    <label className="flex items-center gap-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tripType"
                                            className="w-5 h-5 appearance-none rounded-full border border-gray-400 checked:bg-[#04E2E2] checked:border-transparent"
                                        />
                                        <p className="text-gray-900 mt-3 text-[0.8rem]">Round Trip</p>
                                    </label>
                                </div>

                                <div className='flex justify-center items-center'>
                                <div className='w-[85%] flex justify-center items-center flex-col'>
                                <div className='w-full border-b-[0.3px] border-[#D9DBE9] mt-[10px] flex items-center justify-between'>
                                    <div className='leading-none'>
                                        <p className='text-[#14142] text-[0.9rem] font-bold'>Travelling From</p>
                                        <p className='text-[#4E4B66] text-[0.7rem]'>Departure Terminal</p>
                                    </div>

                                    <Icon className='m-0 p-0 text-[#4E4B66]' icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                </div>


                                <div className='w-full mt-[30px] border-b-[0.3px] border-[#D9DBE9] flex items-center justify-between'>
                                    <div className='leading-none'>
                                        <p className='text-[#14142] text-[0.9rem] font-bold'>Travelling To</p>
                                        <p className='text-[#4E4B66] text-[0.7rem]'>Arrival Terminal</p>
                                    </div>

                                    <Icon className='m-0 p-0 text-[#4E4B66]' icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                </div>

                                <div className='w-full mt-[30px] border-b-[0.3px] border-[#D9DBE9] flex items-center justify-between'>
                                    <div className='leading-none'>
                                        <p className='text-[#14142] text-[0.9rem] font-bold'>Departure date</p>
                                        <p className='text-[#4E4B66] text-[0.7rem]'>21/09/2024</p>
                                    </div>

                                    <div className='leading-none flex flex-col items-center'>
                                        <p className='text-[#14142] text-[0.8em] font-bold'>Adult</p>
                                        <p className='text-[#4E4B66] text-[0.7rem]'>1</p>
                                    </div>

                                    <Icon className='m-0 p-0 text-[#4E4B66]' icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                </div>

                                <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[30px] mt-[10px] gap-x-2 min-w-[45%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                            Proceed

                                        </button>
                                </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>


                <div className='h-[120px] w-full flex mt-[90px] mb-[70px] justify-center items-center bg-[#FFF9E5]'>
                    <p className='text-black font-bold'>No Ads yet...</p>
                </div>

            </div>



        </div>
    )
}

export default Hero
