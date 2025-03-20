'use client'
import React from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
import { useSidebar } from '../../_Context/SidebarContext'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Hero = () => {
    const { isCollapsed } = useSidebar();
    const steps = [
        "Flight Section",
        "Passenger",
        "Additional Service",
        "Payment",
        "Confirmation",
    ];
    

    const activeStep = 0;
    const router = useRouter()
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
                                    {
                                        icon: "teenyicons:car-outline",
                                        text: "Travel by land",
                                        size: 20,
                                        link: "/transportation/bus/bus-booking", // Route for Travel by Land
                                    },
                                    {
                                        icon: "hugeicons:boat",
                                        text: "Travel by water",
                                        link: "/transportation/boat/boat-booking", // Route for Travel by Water
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


                        <div

                            className="w-full bg-[#FCFCFC] h-auto min-h-[400px] flex justify-center items-start"
                        >
                            <div className={`h-[85%] flex flex-col py-[40px] w-[100%] bg-[#FCFCFC] -mt-[6px] rounded-[13px] rounded-tl-none`}>

                                <div className='w-full flex items-start mt-[30px] mb-[40px]'>
                                    <Icon
                                        icon="cuida:arrow-left-outline"
                                        width="90"
                                        height="40"
                                        onClick={() => router.back()}
                                        className='cursor-pointer'
                                    />
                                </div>


                                <div className="flex mt-[40px] items-center justify-between w-[100%] px-8">
                                    {steps.map((step, index) => (
                                        <div key={index} className="flex flex-col items-center relative w-[100%]">
                                            {/* Lines */}
                                            {index !== steps.length - 1 && (
                                                <div className={`absolute top-3 -right-[50%] w-full h-[2px] ${index < activeStep + 1 ? 'bg-teal-500' : 'bg-gray-300'}`} />
                                            )}

                                            {/* Step Circle */}
                                            <div
                                                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 z-10 ${index <= activeStep + 1
                                                    ? "border-teal-500 bg-teal-500 text-white"
                                                    : "border-gray-300 bg-white text-gray-400"
                                                    }`}
                                            >
                                                {index <= activeStep + 1 ? (
                                                    <Icon icon="mdi:check" className="text-[14px]" />
                                                ) : (
                                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                                )}
                                            </div>

                                            {/* Step Label */}
                                            <p className="text-sm mt-4 text-gray-600">{step}</p>
                                        </div>
                                    ))}
                                </div>


                                <div className='flex justify-between h-[150px] w-full bg-gradient-to-b from-[#04E2E2] to-[#00BBBB] items-center mt-[40px] px-8'>
                                    <div className='flex flex-col justify-center items-start'>
                                        <p className='text-[1rem] text-[#14142A] font-bold'>Uyo (QUO) - Lagos (LOS)</p>
                                        <div className='flex items-center text-[#4E4B66] text-[0.9rem] gap-x-2'>
                                            <div className='flex items-start gap-y-2 flex-col'>
                                                <p className='m-0 p-0'>Wed Sep 04 - Wed Sep 04 </p>
                                                <p className='m-0 p-0'>Fri Sep 07 - Fri Sep 07 </p>
                                            </div>
                                            <Icon className='m-0 p-0 text-[#FCFCFC]' icon="ci:line-xl" width="20" height="20" />
                                            <p className='m-0 p-0'>1 Adult, 0 Child, 0 Infant</p>
                                            <Icon className='m-0 p-0 text-[#FCFCFC]' icon="ci:line-xl" width="20" height="20" />
                                            <p className='m-0 p-0'>Round Trip</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-[#14142A] text-[0.9rem] font-bold'>TOTAL PRICE</p>
                                        <p className='text-[#FCFCFC] text-[1.1rem]'>370,000 <span className='text-[0.9rem]'>NGN</span></p>
                                    </div>
                                </div>

                                <p className='font-bold ml-[30px] mt-[45px]'>Your Flights <span className='text-[#4E4B66] ml-[20px] text-[0.8rem] font-normal'> Uyo (QUO) - Lagos (LOS)  </span></p>

                                <div className='h-[170px] flex ml-[30px] box-border w-[95%] bg-transparent border-[#D9DBE9] border-[0.5px] rounded-[12px]'>
                                    <div className='h-full flex justify-center text-white items-center bg-[#00BBBB] w-[45px] rounded-tl-[12px] rounded-bl-[12px]'>
                                        <Icon icon="flowbite:check-outline" width="24" height="24" />
                                    </div>
                                    <div className='h-full w-[25%] flex flex-col items-center justify-center border-[#D9DBE9] border-r-[0.5px]'>
                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='text-[1.1rem] font-bold'>Outbound Flight</p>
                                            <div className='text-[0.7rem] flex items-center gap-x-[2px]'>
                                                <p className='underline m-0 p-0'>Change</p>
                                                <Icon icon="la:pen" width="15" height="15" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-full flex justify-between box-border px-[30px] items-center w-[100%] border-[#D9DBE9] border-r-[0.5px]'>

                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='text-[1.1rem] font-bold'>Uyo (QU0)</p>
                                            <div className='text-[0.8rem] flex items-center gap-x-[2px]'>
                                                <p className='m-0 p-0'>07 Sep 2024 - 15:00</p>

                                            </div>
                                        </div>


                                        <div className='flex flex-col items-center'>
                                            <p className='text-[#4E4B66]'>1h 15m</p>
                                            <div className='h-[0.5px] w-[200px] bg-[#4E4B66]'></div>
                                            <p className='text-[#4E4B66] mt-3'>Nonstop</p>
                                        </div>

                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='text-[1.1rem] font-bold'>Lagos (LOS)</p>
                                            <div className='text-[0.8rem] flex items-center gap-x-[2px]'>
                                                <p className='m-0 p-0'>05 Sep 2024 - 10:45</p>

                                            </div>
                                        </div>


                                    </div>


                                    <div className='h-full flex justify-center items-center w-[40px] rounded-tr-[12px] rounded-br-[12px]'>
                                        <Icon icon="solar:alt-arrow-down-line-duotone" width="24" height="24" />
                                    </div>
                                </div>


                                <div className='h-[170px] mt-[30px] flex ml-[30px] box-border w-[95%] bg-transparent border-[#D9DBE9] border-[0.5px] rounded-[12px]'>
                                    <div className='h-full flex justify-center text-white items-center bg-[#00BBBB] w-[45px] rounded-tl-[12px] rounded-bl-[12px]'>
                                        <Icon icon="flowbite:check-outline" width="24" height="24" />
                                    </div>
                                    <div className='h-full w-[25%] flex flex-col items-center justify-center border-[#D9DBE9] border-r-[0.5px]'>
                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='text-[1.1rem] font-bold'>Outbound Flight</p>
                                            <div className='text-[0.7rem] flex items-center gap-x-[2px]'>
                                                <p className='underline m-0 p-0'>Change</p>
                                                <Icon icon="la:pen" width="15" height="15" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-full flex justify-between box-border px-[30px] items-center w-[100%] border-[#D9DBE9] border-r-[0.5px]'>

                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='text-[1.1rem] font-bold'>Uyo (QU0)</p>
                                            <div className='text-[0.8rem] flex items-center gap-x-[2px]'>
                                                <p className='m-0 p-0'>07 Sep 2024 - 15:00</p>

                                            </div>
                                        </div>


                                        <div className='flex flex-col items-center'>
                                            <p className='text-[#4E4B66]'>1h 15m</p>
                                            <div className='h-[0.5px] w-[200px] bg-[#4E4B66]'></div>
                                            <p className='text-[#4E4B66] mt-3'>Nonstop</p>
                                        </div>

                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='text-[1.1rem] font-bold'>Lagos (LOS)</p>
                                            <div className='text-[0.8rem] flex items-center gap-x-[2px]'>
                                                <p className='m-0 p-0'>05 Sep 2024 - 10:45</p>

                                            </div>
                                        </div>


                                    </div>


                                    <div className='h-full flex justify-center items-center w-[40px] rounded-tr-[12px] rounded-br-[12px]'>
                                        <Icon icon="solar:alt-arrow-down-line-duotone" width="24" height="24" />
                                    </div>
                                </div>

                                <div className='h-[75px] mt-[30px] flex ml-[30px] items-center p-[30px] box-border w-[95%] bg-transparent border-[#D9DBE9] border-[0.5px] rounded-[12px]'>
                                    <div className='flex items-center gap-x-2'>
                                        <Icon icon="flowbite:info-circle-outline" className='text-[#255427]' width="18" height="18" />
                                        <p className='text-[0.9rem] m-0 p-0 text-[#255427]'>Fair rules</p>
                                    </div>
                                </div>


                                <div className='h-[75px] mt-[30px] flex justify-between ml-[30px] items-center p-[30px] box-border w-[95%] bg-transparent'>
                                    <button className='rounded-[35px] text-black border-[#4C3A00] border-[0.5px] flex items-center justify-center h-[50px] gap-x-2 min-w-[25%] w-auto bg-transparent
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                        Back

                                    </button>


                                    <Link className='no-underline w-[25%]' href='/transportation/flight/flight-additional-services'>
                                        <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[50px] gap-x-2 min-w-[100%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                            Continue

                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='pb-[90px]'>
                            <div className='h-[120px] w-full flex justify-center items-center bg-[#FFF9E5] mt-auto'>
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
