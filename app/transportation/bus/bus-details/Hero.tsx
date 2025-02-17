'use client'
import React from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../../_Context/SidebarContext'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const { isCollapsed } = useSidebar();
    const router = useRouter();

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
                                        link: "/transportation/flight/flight-booking", // Add route here for Travel by Air
                                    },
                                    {
                                        icon: "teenyicons:car-outline",
                                        text: "Travel by land",
                                        size: 20,
                                        bg: "#A0EBEB",
                                        textColor: "#4E4B66",
                                        link: "/transportation/bus/bus-booking", // Add route here for Travel by Land
                                    },
                                    {
                                        icon: "hugeicons:boat",
                                        text: "Travel by water",
                                        link: "/transportation/boat/boat-booking", // Add route here for Travel by Water
                                    },
                                ].map(({ icon, text, size = 24, bg, textColor, link }, index) => (
                                    link ? (
                                        <Link href={link} key={index} className="text-white no-underline">
                                            <div
                                                className={`flex items-center gap-x-2 cursor-pointer transition-transform duration-300 hover:scale-105 ${bg ? "px-3 py-1 rounded-[30px]" : ""}`}
                                                style={{
                                                    backgroundColor: bg || "transparent",
                                                    color: textColor || "inherit",
                                                }}
                                            >
                                                <Icon icon={icon} width={size} height={size} />
                                                <span className="text-[0.9rem]">{text}</span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-x-2 cursor-pointer transition-transform duration-300 hover:scale-105 ${bg ? "px-3 py-1 rounded-[30px]" : ""}`}
                                            style={{
                                                backgroundColor: bg || "transparent",
                                                color: textColor || "inherit",
                                            }}
                                        >
                                            <Icon icon={icon} width={size} height={size} />
                                            <span className="text-[0.9rem]">{text}</span>
                                        </div>
                                    )
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
                                <Icon
                                    icon="cuida:arrow-left-outline"
                                    width="90"
                                    height="40"
                                    onClick={() => router.back()}
                                    className='cursor-pointer'
                                />
                            </div>
                            <div className='h-[90%] w-full mt-[40px] bg-transparent flex flex-col justify-center items-center'>
                                <p className='font-bold text-[1rem]'>Booking</p>
                                <p className='font-semibold text-[0.8rem]'>Cross River ={`>`} Calabar to Lagos=={`>`} Ajah September 21,2024,1 Adult(s) </p>
                                <div className='h-[169px] flex justify-between items-center px-[20px] box-border w-[90%] border-[#D9DBE9] border-[0.3px] rounded-[10px]'>
                                    <div>
                                        <Image src='/download 1.svg' alt='bus image' height={100} width={180} />
                                    </div>
                                    <div>
                                        <p className='text-[1.4rem] font-bold'>Toyota (Hiace X)</p>
                                        <p className='text-[0.9rem] text-[#A0A3BD]'>Departure: Cross River ={`>`} Calabar =={`>`} Arrival: Lagos ={`>`} Ajah</p>
                                        <div className='flex text-[#6E7191] items-center gap-x-10'>
                                            <p className='m-0 p-0'>8 seats(available)</p>
                                            <div className='flex items-center gap-x-2'>
                                                <Icon icon="iconoir:timer" width="24" height="24" />
                                                <p className='m-0 p-0'>06:30 AM</p>
                                            </div>
                                            <p className='m-0 p-0'>Adult: 1</p>
                                        </div>
                                    </div>


                                    <div>
                                        <p className='text-[1.4rem] font-bold'>NGN30,000</p>
                                        <p className='text-[0.9rem] text-[#CC0000]'>CashBack: N656</p>

                                        <Link href='/transportation/bus/select-seat' className='no-underline'>
                                            <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[30px] mt-[10px] gap-x-2 min-w-[45%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                                view seats

                                            </button>
                                        </Link>
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
