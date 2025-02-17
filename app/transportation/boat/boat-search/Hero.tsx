'use client'
import React, { useState } from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../../_Context/SidebarContext'
import Link from 'next/link';
const Hero = () => {
    const { isCollapsed } = useSidebar();
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

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
                                      
                                    },
                                    { icon: "hugeicons:boat", text: "Travel by water",
                                        bg: "#A0EBEB",
                                        textColor: "#4E4B66", },
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

                            <p className='text-white text-[1.9rem] mt-[55px] font-bold'>Boats</p>

                            <div className='leading-none'>
                                <p className='text-[#6E7191] text-[0.9rem] mt-[10px]'>Find the apartments that appeal to you the most</p>
                            </div>

                        </div>


                        <div

                            className="w-full min-h-[400px] h-auto flex flex-col relative justify-center items-start"
                        >
                            <div className='w-full px-[30px] h-full flex items-center justify-between -mt-5'>
                                <div className='rounded-[40px] justify-start p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#F7F7FC] border-[0.3px] border-[#D9DBE9]'>
                                    <Icon icon="mingcute:location-line" width="24" height="24" />
                                    <p className='m-0 p-0'>Where are you going?</p>
                                </div>

                                <div className='rounded-[40px] justify-between p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#F7F7FC] border-[0.3px] border-[#D9DBE9]'>

                                    <p className='m-0 p-0'>Pick a date</p>
                                    <Icon icon="solar:calendar-linear" width="24" height="24" />
                                </div>

                                <div className='rounded-[40px] justify-start p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#F7F7FC] border-[0.3px] border-[#D9DBE9]'>
                                    <Icon icon="fa:user-o" width="24" height="24" />
                                    <p className='m-0 p-0'>Who's in?</p>

                                </div>

                                <button className='rounded-[35px] -mt-[10px] text-[#EFF0F6] flex items-center justify-center h-[50px] gap-x-2 min-w-[15%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                    search

                                </button>

                            </div>

                            <Icon className='mt-[30px]' icon="cuida:arrow-left-outline" width="90" height="40" />


                            <div className='w-full border-[#D9DBE9] border-t-[0.4px] py-4 border-b-[0.4px] pl-[30px] pr-[50px] h-full flex items-center justify-between mt-[50px]'>
                                <div className='w-[70%] flex items-center justify-between'>
                                    <div className='rounded-[40px] justify-between p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#A0EBEB]'>

                                        <p className='m-0 p-0 text-[#003838]'>09/27/2024</p>

                                        <Icon className='text-red-400' icon="material-symbols-light:cancel-presentation-outline-rounded" width="24" height="24" />
                                    </div>

                                    <div className='rounded-[40px] justify-between p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#A0EBEB]'>

                                        <p className='m-0 p-0 text-[#003838]'>09/27/2024</p>

                                        <Icon className='text-red-400' icon="material-symbols-light:cancel-presentation-outline-rounded" width="24" height="24" />
                                    </div>

                                    <div className='rounded-[40px] justify-between p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#A0EBEB]'>

                                        <p className='m-0 p-0 text-[#003838]'>Group Size (5)</p>

                                        <Icon className='text-red-400' icon="material-symbols-light:cancel-presentation-outline-rounded" width="24" height="24" />
                                    </div>
                                </div>

                                <p className='text-[1rem] p-0 m-0 font-semibold'>Explore</p>

                            </div>


                            <div className='w-full mt-[40px] flex flex-col justify-center items-start px-[30px]'>
                                <div className='w-full flex justify-between items-center px-[10px]'>
                                    <p className='text-[1.6rem] p-0 m-0 text-[#14142A] font-semibold'>Boat Rides Near You</p>
                                    <div className='flex items-center gap-x-5'>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                checked={isChecked}
                                                onChange={handleChange}
                                            />
                                            <div className={`w-8 h-4 ${isChecked ? 'bg-[#00BBBB]' : 'bg-gray-500'} rounded-full transition-colors duration-300 ease-in-out`}>
                                                <div
                                                    className={`w-4 h-4 bg-gray-200 rounded-full transition-transform duration-300 ease-in-out transform ${isChecked ? 'translate-x-4' : 'translate-x-0'
                                                        }`}
                                                />
                                            </div>
                                        </label>

                                        <p className='text-[1rem] p-0 m-0 text-[#14142A] font-semibold'>Map view</p>
                                    </div>
                                </div>

                                <div className='pl-[10px] leading-none mt-2 text-[#4E4B66]'>
                                    <p>Boat Rentals</p>
                                    <p>Page 1 0f 2 .listings</p>
                                </div>
                                <div className={`grid grid-cols-3 ${isCollapsed ? 'gap-24' : 'gap-6'}  mt-[30px] w-full`}>
                                    {[...Array(9)].map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-[338px] relative ${isCollapsed ? 'w-[25vw]' : 'w-[24vw]'} rounded-[24px] bg-transparent flex flex-col shadow-md items-start`}
                                        >
                                            {/* <Image
                                                className="rounded-t-[24px]"
                                                src="/download 2.svg"
                                                alt="boat image"
                                                height={150}
                                                width={335}
                                            /> */}
                                            <div style={{ background: "url(/coach-bus.webp)" }} className='h-[150px] rounded-t-[25px] w-full'></div>
                                            <div className="p-[20px] leading-3">
                                                <p className="text-[1.1rem] font-bold">
                                                    45ft Power Catamaran Charter
                                                </p>
                                                <p className="text-[0.8rem] text-[#4E4B66] mt-4">
                                                    Powerboats in linguamura
                                                </p>
                                                <p className="text-[1rem] font-semibold mt-4 text-[#4E4B66]">NGN 100,000+ /hour</p>
                                                <div className="flex items-center gap-x-[1px]">
                                                    <Icon
                                                        className="text-[#FFC000]"
                                                        icon="icon-park-outline:star-one"
                                                        width="20"
                                                        height="20"
                                                    />
                                                    <Icon
                                                        className="text-[#FFC000]"
                                                        icon="icon-park-outline:star-one"
                                                        width="20"
                                                        height="20"
                                                    />
                                                    <Icon
                                                        className="text-[#FFECB2]"
                                                        icon="icon-park-outline:star-one"
                                                        width="20"
                                                        height="20"
                                                    />
                                                    <Icon
                                                        className="text-[#FFECB2]"
                                                        icon="icon-park-outline:star-one"
                                                        width="20"
                                                        height="20"
                                                    />
                                                    <Icon
                                                        className="text-[#FFECB2]"
                                                        icon="icon-park-outline:star-one"
                                                        width="20"
                                                        height="20"
                                                    />
                                                </div>
                                            </div>
                                            <div className="absolute top-[5%] right-[5%] h-auto w-auto p-[5px] rounded-lg bg-[#F7F7FC]">
                                                <Icon
                                                    icon="iconamoon:heart-fill"
                                                    className="text-[#A0A3BD]"
                                                    width="24"
                                                    height="24"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='mt-10 w-full pb-[100px] gap-x-2 flex justify-center items-center'>
                                    <Icon icon="iconamoon:arrow-left-2-light" width="24" height="24" />

                                    <ul className='flex items-center gap-x-2 m-0 p-0'>
                                        <li className='h-auto w-auto bg-primary text-white rounded-md'>1</li>
                                        <li>2</li>
                                    </ul>
                                    <Icon icon="iconamoon:arrow-right-2-light" width="24" height="24" />
                                </div>

                            </div>

                        </div>



                    </div>

                </div>




            </div>



        </div>
    )
}

export default Hero
