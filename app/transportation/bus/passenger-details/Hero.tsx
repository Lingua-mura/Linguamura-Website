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
                            <div className='pb-[50px] h-auto flex flex-col ml-[30px] mt-[45px] box-border w-[95%] bg-transparent border-[#D9DBE9] border-[0.5px] rounded-[12px]'>
                                <div className='border-[#D9DBE9] w-full h-[80px] border-b-[0.5px]'>
                                    <p className='font-bold ml-[30px] text-[1.1rem] pt-[30px] '>Passenger </p>
                                </div>

                                <p className='font-bold ml-[30px] text-[1.1rem] pt-[30px] '>Selected Passenger 1 </p>
                                <div className='p-[20px] h-auto flex flex-col ml-[30px] mt-[20px] mb-[10px] box-border w-[95%] bg-transparent border-[#D9DBE9] border-[0.5px] rounded-[12px]'>
                                    <p className='font-bold'>Traveller</p>

                                    <div className='flex items-start pb-[50px] gap-x-20'>
                                        <div className='min-h-[400px] h-auto w-[30%] bg-transparent flex flex-col items-start box-border'>
                                            <div className='flex flex-col items-start space-y-2'>
                                                <label htmlFor='gender'>Gender</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <select className='outline-none border-none bg-transparent w-full'>
                                                        <option value="">Select a gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    {/* <Icon icon="ep:arrow-down" className='text-[#A0A3BD]' width="20" height="20" /> */}
                                                </div>
                                            </div>

                                            <div className='flex mt-[30px] flex-col items-start space-y-2'>
                                                <label htmlFor='DOB'>Date of birth</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <input type="date" placeholder='dd/mm/yyyy' className='outline-none border-none bg-transparent w-full' />
                                                    {/* <Icon className='text-[#A0A3BD]' icon="solar:calendar-outline" width="24" height="24" /> */}
                                                </div>
                                            </div>



                                            <div className='flex mt-[30px] flex-col items-start space-y-2'>
                                                <label htmlFor='Phone Number'>Phone Number</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-2 w-[300px] h-[50px]'>
                                                    <Icon icon="twemoji:flag-nigeria" width="30" height="30" />
                                                    <Icon icon="ep:arrow-down" className='text-[#A0A3BD]' width="20" height="20" />
                                                    <input type="tel" placeholder='Enter phone number' className='outline-none border-none bg-transparent w-full' />
                                                </div>
                                            </div>

                                            <div className='flex mt-[30px] flex-col items-start space-y-2'>
                                                <label htmlFor='Nationality'>Nationality</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <select className='outline-none border-none bg-transparent w-full'>
                                                        <option value="">Select nationality</option>
                                                        <option value="nigeria">Nigerian</option>
                                                        <option value="ghana">Ghanaian</option>
                                                        <option value="kenya">Kenyan</option>
                                                        <option value="south-africa">South African</option>
                                                    </select>
                                                    {/* <Icon icon="ep:arrow-down" className='text-[#A0A3BD]' width="20" height="20" /> */}
                                                </div>
                                            </div>

                                        </div>



                                        <div className='min-h-[400px] h-auto w-[30%] bg-transparent flex flex-col items-start box-border'>
                                            <div className='flex flex-col items-start space-y-2'>
                                                <label htmlFor='title'>Title</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <input type="select" placeholder='Enter title' className='outline-none border-none bg-transparent' />
                                                    {/* <Icon icon="ep:arrow-down" className='text-[#A0A3BD]' width="20" height="20" /> */}
                                                </div>
                                            </div>

                                            <div className='flex flex-col mt-[30px] items-start space-y-2'>
                                                <label htmlFor='gender'>FullName</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <input type="select" placeholder='Enter Full Name' className='outline-none border-none bg-transparent' />

                                                </div>
                                            </div>

                                            {/* <div className='flex mt-[30px] flex-col items-start space-y-2'>
                                                <label htmlFor='Nationality'>Nationality</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <input type="select" placeholder='Select nationality' className='outline-none border-none bg-transparent' />
                                                    <Icon icon="ep:arrow-down" className='text-[#A0A3BD]' width="20" height="20" />
                                                </div>
                                            </div> */}

                                            <div className='flex mt-[30px] flex-col items-start space-y-2'>
                                                <label htmlFor='gender'>Email Address</label>
                                                <div className='bg-[#EFF0F6] box-border p-[20px] rounded-[10px] flex items-center gap-x-4 w-[300px] h-[50px]'>
                                                    <input type="select" placeholder='Enter email address' className='outline-none border-none bg-transparent' />
                                                </div>
                                                <p className='text-[0.8rem]'>Please input a valid Email</p>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                                <div className='h-[75px] mt-[30px] flex justify-between ml-[30px] items-center p-[30px] box-border w-[95%] bg-transparent'>
                                    <button className='rounded-[35px] text-black border-[#4C3A00] border-[0.5px] flex items-center justify-center h-[50px] gap-x-2 min-w-[25%] w-auto bg-transparent
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                        Back

                                    </button>


                                    <Link href='/transportation/bus/bus-details' className='no-underline w-[25%]'>
                                        <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[50px] gap-x-2 min-w-[100%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                            Continue

                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>


                <div className='h-[120px] w-full flex mt-[850px] mb-[70px] justify-center items-center bg-[#FFF9E5]'>
                    <p className='text-black font-bold'>No Ads yet...</p>
                </div>

            </div>



        </div >
    )
}

export default Hero
