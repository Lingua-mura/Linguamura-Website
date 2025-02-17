'use client'
import React, { useState } from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../../_Context/SidebarContext'

const Hero = () => {
    const { isCollapsed } = useSidebar();
    const steps = [
        "Flight Section",
        "Passenger",
        "Additional Service",
        "Payment",
        "Confirmation",
    ];

    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className={`h-screen flex flex-col transition-all duration-300 ease-in-out border-[#D9DBE9] border-[0.5px] ${isCollapsed ? 'w-[calc(100vw-100px)]' : 'w-[calc(100vw-280px)]'}`}>
            <Header />
            <div className='flex-1 overflow-y-auto no-scrollbar'>
                <div className='w-full border-[#D9DBE9] border-l-[0.5px]'>
                    <div className='w-[100%] min-h-[600px] h-auto p-0'>
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
                                        bg: "#A0EBEB",
                                        textColor: "#4E4B66",
                                    },
                                    { icon: "teenyicons:car-outline", text: "Travel by land", size: 20 },
                                    { icon: "hugeicons:boat", text: "Travel by water" },
                                ].map(({ icon, text, size = 24, bg, textColor }, index) => (
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
                                ))}
                            </div>

                            <p className='text-white text-[1.9rem] mt-[45px] font-bold'>Flight</p>
                            <p className='text-[#6E7191] mt-[10px]'>Find the property that appeal to you the most </p>
                            <div className='mt-[45px] flex items-center space-x-2'>
                                <button className="bg-[#FCFCFC] text-[hsl(180,100%,37%)] rounded-[8px] rounded-bl-none h-[60px] w-[220px]">
                                    Book Flights
                                </button>

                                <button className='bg-transparent border-[#FCFCFC] border-[0.5px] text-[#FCFCFC] rounded-[8px] h-[60px] w-[220px]'>
                                    My bookings
                                </button>
                                <button className='bg-transparent border-[#FCFCFC] border-[0.5px] text-[#FCFCFC] rounded-[8px] h-[60px] w-[220px]'>
                                    Check-in
                                </button>
                            </div>
                        </div>

                        <div className="w-full bg-[#FCFCFC] h-auto min-h-[100px] flex flex-col justify-center items-start">
                            <div className={`h-[85%] flex flex-col py-[40px] w-[100%] bg-[#FCFCFC] -mt-[6px] rounded-[13px] rounded-tl-none`}>
                                <Icon icon="cuida:arrow-left-outline" width="90" height="40" />
                            </div>
                        </div>

                        <div className='flex min-h-[300px] flex-col bg-[#FCFCFC]'>
                            <div className=' mb-[100px] flex flex-col items-center justify-center space-y-8 pb-[100px] py-4'>
                                <Icon 
                                    className='text-[#00BBBB]' 
                                    icon="icon-park-solid:check-one" 
                                    width="48" 
                                    height="48" 
                                />
                                
                                <p className='text-lg font-medium'>Payment Successful</p>
                                
                                <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[50px] gap-x-2 min-w-[25%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB] shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                    View Receipt
                                </button>
                            </div>

                            <div className='h-[120px] w-full flex justify-center items-center bg-[#FFF9E5]'>
                                <p className='text-black font-bold'>No Ads yet...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;