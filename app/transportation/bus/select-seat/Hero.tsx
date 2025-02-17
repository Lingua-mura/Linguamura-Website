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

                            className="w-full h-[400px] flex flex-col relative justify-start items-start bg-transparent"
                        >

                            <div className='w-full flex items-start mt-[30px] mb-[40px]'>
                                <Icon icon="cuida:arrow-left-outline" width="90" height="40" />
                            </div>
                            <div className='flex w-full min-h-[400px] h-auto justify-center items-center'>
                                <div className='h-auto w-[90%] bg-transparent flex flex-col justify-center border-[#D9DBE9] border-[0.3px] mt-[350px] rounded-[10px] items-center p-8'>
                                    <p className='text-[1.3rem] mb-[80px] font-bold'>Select Seat(s)</p>
                                    <div className="flex items-center w-full justify-around">
                                        <div className="flex items-center flex-col space-y-3 justify-center">
                                            <div className="relative z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#2D132C] text-white text-xl font-bold shadow-lg">

                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#332e33] rounded-xl shadow-md" />
                                            </div>
                                            <p className='text-[1rem] font-semibold'>Selected Seat</p>
                                        </div>

                                        <div className="flex items-center flex-col space-y-3 justify-center">
                                            <div className="relative z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#A0A3BD] text-white text-xl font-bold shadow-lg">

                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#A0A3BD] rounded-xl shadow-md" />
                                            </div>
                                            <p className='text-[1rem] font-semibold'>Availble Seat</p>
                                        </div>

                                        <div className="flex items-center flex-col space-y-3 justify-center">
                                            <div className="relative z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#225fbb] text-white text-xl font-bold shadow-lg">

                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#285caa] rounded-xl shadow-md" />
                                            </div>
                                            <p className='text-[1rem] font-semibold'>Booked Seat</p>
                                        </div>



                                    </div>

                                    <div className='w-full mt-14 px-4'>
                                        <div className='grid grid-cols-3 gap-x-[50px] gap-y-12 place-items-center'>
                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#225fbb] text-white text-xl font-bold shadow-lg">
                                                1
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#285caa] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#A0A3BD] text-white text-xl font-bold shadow-lg">
                                                2
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#A0A3BD] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#225fbb] text-white text-xl font-bold shadow-lg">
                                                3
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#285caa] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#225fbb] text-white text-xl font-bold shadow-lg">
                                                4
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#285caa] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#A0A3BD] text-white text-xl font-bold shadow-lg">
                                                5
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#A0A3BD] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#A0A3BD] text-white text-xl font-bold shadow-lg">
                                                6
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#A0A3BD] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#A0A3BD] text-white text-xl font-bold shadow-lg">
                                                7
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#A0A3BD] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#225fbb] text-white text-xl font-bold shadow-lg">
                                                8
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#285caa] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#A0A3BD] text-white text-xl font-bold shadow-lg">
                                                9
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#A0A3BD] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#225fbb] text-white text-xl font-bold shadow-lg">
                                                10
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#285caa] rounded-xl shadow-md" />
                                            </div>

                                            <div className="relative cursor-pointer z-50 w-10 h-10 flex items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-[#2D132C] text-white text-xl font-bold shadow-lg">
                                                11
                                                <div className="absolute -bottom-2 w-14 h-3 bg-gradient-to-b from-[#14142A] to-[#332e33] rounded-xl shadow-md" />
                                            </div>
                                        </div>

                                        <div className='flex justify-center items-center mt-5'>
                                            <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[40px] mt-[10px] gap-x-2 min-w-[25%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                                continue

                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className='h-[120px] w-full flex mt-[500px] mb-[70px] justify-center items-center bg-[#FFF9E5]'>
                    <p className='text-black font-bold'>No Ads yet...</p>
                </div>

            </div>



        </div >
    )
}

export default Hero
