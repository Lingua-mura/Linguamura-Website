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
                    <div className='w-[100%] h-[600px] p-0'>
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
                                <button className='bg-transparent border-[#FCFCFC] border-[0.5px] text-[#FCFCFC] rounded-[8px] h-[60px] w-[220px]'>
                                    Loyalty
                                </button>
                            </div>

                        </div>


                        <div
                            style={{
                                backgroundImage: "url(/aeroplane.webp)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[400px] flex justify-center items-start"
                        >
                            <div className={`h-[85%] px-[30px] py-[40px] ${isCollapsed ? 'w-[95.3%]' : 'w-[94.4%]'} bg-[#FCFCFC] -mt-[6px] rounded-[13px] rounded-tl-none`}>

                                <div className="flex items-center gap-x-6">
                                    <label className="flex items-center gap-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tripType"
                                            className="w-5 h-5 appearance-none rounded-full border border-gray-400 checked:bg-[#04E2E2] checked:border-transparent"
                                        />
                                        <p className="text-gray-900 mt-3">One way</p>
                                    </label>

                                    <label className="flex items-center gap-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tripType"
                                            className="w-5 h-5 appearance-none rounded-full border border-gray-400 checked:bg-[#04E2E2] checked:border-transparent"
                                        />
                                        <p className="text-gray-900 mt-3">Round Trip</p>
                                    </label>
                                </div>

                                <div className='mt-[20px] flex items-center space-x-4'>

                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Flying from</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>departure</p>
                                        </div>
                                        <Icon icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                    </div>

                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Flying to</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>arrival</p>
                                        </div>
                                        <Icon icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                    </div>


                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Departure date</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>mm/dd/yyyy</p>
                                        </div>
                                        <Icon icon="solar:calendar-outline" width="24" height="24" />
                                    </div>


                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Return date</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>mm/dd/yyyy</p>
                                        </div>
                                        <Icon icon="solar:calendar-outline" width="24" height="24" />
                                    </div>


                                </div>
                                <div className='mt-[20px] flex items-center space-x-4'>

                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Adult(12yrs+)</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>2</p>
                                        </div>
                                        <Icon icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                    </div>


                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Child(22-11yrs)</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>0</p>
                                        </div>
                                        <Icon icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                    </div>


                                    <div className='bg-[#EFF0F6] box-border rounded-[10px] text-[0.9rem] p-[20px] flex items-center justify-between h-[80px] w-[25%]'>
                                        <div className='leading-[1.2] flex flex-col justify-center'>
                                            <p className='text-[#A0A3BD] mt-[15px]'>Infant(0-2yrs)</p>
                                            <p className='text-[#4E4B6] font-bold text-[1rem]'>0</p>
                                        </div>
                                        <Icon icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                                    </div>


                                    <Link href='/transportation/flight/flight-search' className='w-[25%] no-underline'>
                                        <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[50px] gap-x-2 min-w-[100%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                            Search flights

                                        </button>
                                    </Link>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
                <p className='mt-[100px] ml-[34px] text-[1.4rem]'>Our destinations</p>

                <div className="relative w-[95%] ml-[34px]  min-h-[500px] items-center bg-transparent mt-[20px] flex gap-2">
                    {/* Top Image (70% Width, 200px Height) */}
                    <div className='flex flex-col w-[100%]'>
                        <div className="w-[100%] h-[220px] mx-auto">
                            <Image src="/Rectangle 2447.svg" alt="aeroplane" width={100} height={220} className="w-full h-full object-cover" />
                        </div>

                        {/* Three Images Below (Share Width Equally, 200px Height) */}
                        <div className="flex w-[100%] mt-[10px] space-x-3 mx-auto">
                            <Image src="/Frame 626456.svg" alt="aeroplane" width={100} height={220} className="w-1/3 h-[200px] rounded-lg object-cover" />
                            <Image src="/Frame 626455.svg" alt="aeroplane" width={100} height={220} className="w-1/3 h-[200px] rounded-lg object-cover" />
                            <Image src="/Frame 626454.svg" alt="aeroplane" width={100} height={220} className="w-1/3 h-[200px] rounded-lg object-cover" />
                        </div>
                    </div>

                    {/* Last Image on the Right (Height Matches Combined Divs) */}
                    <Image
                        src="/Frame 626419.svg"
                        alt="image"
                        width={350}
                        height={400}
                        className="h-[430px] object-cover"
                    />
                </div>


                <div className='h-[120px] w-full flex mb-[70px] justify-center items-center bg-[#FFF9E5] mt-[20px]'>
                    <p className='text-black font-bold'>No Ads yet...</p>
                </div>

            </div>



        </div>
    )
}

export default Hero
