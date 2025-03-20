'use client'
import React from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
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
                            <div className='flex w-full min-h-[400px] h-auto justify-center items-center'>
                                <div className='h-auto w-[90%] bg-transparent flex flex-col justify-center border-[#D9DBE9] border-[0.3px] mt-[350px] rounded-[10px] items-center p-8'>
                                    <p className='text-[1.3rem] mb-[50px] font-bold'>Trip Summary</p>

                                    <div className='w-[50%] h-[400px] flex space-x-4 justify-between items-center'>
                                        <div className='w-[100%] text-[0.9rem] flex flex-col item-start gap-y-2 h-[90%] bg-transparent'>
                                            <p>From</p>
                                            <p>To</p>
                                            <p>Date</p>
                                            <p>Time</p>
                                            <p>Adult(s)</p>
                                            <p>Seat Number(s)</p>
                                            <p>Returned Seat Number(s)</p>
                                            <p>Price</p>
                                            <p>Discount</p>
                                            <p>Total Amount</p>
                                        </div>
                                        <div className='w-[100%] text-[0.9rem] flex flex-col items-end gap-y-2 h-[90%] bg-transparent'>
                                            <p>Cross River ={`>`} Calabar  </p>
                                            <p>Lagos=={`>`} Ajah </p>
                                            <p>September 21,2024</p>
                                            <p>06:30:00</p>
                                            <p>1</p>
                                            <p>5</p>
                                            <p>3</p>
                                            <p>NGN30,000</p>
                                            <p>0</p>
                                            <p className='text-[1.2rem] font-bold'>NGN30,000</p>
                                        </div>
                                    </div>

                                    <div className='w-full mt-14 px-4'>


                                        <div className='flex justify-center items-center mt-5'>
                                            <Link href='/transportation/bus/trip-payment' className='no-underline w-[25%]'>
                                                <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[40px] mt-[10px] gap-x-2 min-w-[100%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                                    Pay

                                                </button>
                                            </Link>
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
