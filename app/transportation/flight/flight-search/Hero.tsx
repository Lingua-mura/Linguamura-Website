'use client'
import React, { useState } from 'react'
import Header from './Header'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../../_Context/SidebarContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const CalendarComponent = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const visibleDays = 7;
   

    const handleNext = () => {
        if (startIndex + visibleDays < daysInMonth.length) {
            setStartIndex(startIndex + visibleDays);
        }
    };

    const handlePrev = () => {
        if (startIndex - visibleDays >= 0) {
            setStartIndex(startIndex - visibleDays);
        }
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
        setShowDatePicker(false);
    };

    return (
        <div className="w-full mt-[35px] flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    className={`p-2 rounded-full ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    disabled={startIndex === 0}
                >
                    <Icon icon="solar:alt-arrow-left-outline" width="24" height="24" />
                </button>
                <div className="flex items-center justify-between w-full mx-4 gap-2">
                    {daysInMonth.slice(startIndex, startIndex + visibleDays).map((day) => (
                        <Link className='no-underline' href='/transportation/flight/flight-details'>
                            <div
                                key={day}
                                className="flex flex-1 flex-col items-center justify-center text-center py-3 rounded-md bg-[#D9DBE9] cursor-pointer h-[170px] w-[105px] hover:bg-[#00BBBB] hover:text-white transition-all duration-300"
                            >
                                <div className='flex flex-col items-center justify-center'>
                                    {day} <p>Feb</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-4 flex  flex-col items-center space-x-2 cursor-pointer" onClick={() => setShowDatePicker(!showDatePicker)}>
                    <Icon icon="solar:calendar-outline" width="24" height="24" className="text-gray-600 hover:text-black" />
                    <span className="text-gray-700 text-[1rem] font-bold whitespace-nowrap mt-3 mr-3">{selectedDate ? selectedDate : "Calendar"}</span>
                    {showDatePicker && (
                        <input
                            type="date"
                            className="mt-2 p-2 border rounded-md"
                            onChange={handleDateChange}
                        />
                    )}
                </div>
                <button
                    onClick={handleNext}
                    className={`p-2 rounded-full ${startIndex + visibleDays >= daysInMonth.length ? "opacity-50 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    disabled={startIndex + visibleDays >= daysInMonth.length}
                >

                    <Icon icon="solar:alt-arrow-right-outline" width="24" height="24" />
                </button>
            </div>


        </div>
    );
};

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
                                        <Link href={link} key={index} className="no-underline text-white">
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
                            <div className={`h-[85%] py-[40px] w-[100%] bg-[#FCFCFC] -mt-[6px] rounded-[13px] rounded-tl-none`}>

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
                                            {/* Lines (Put before the checkpoint) */}
                                            {index !== steps.length - 1 && (
                                                <div className="absolute top-3 -right-[50%] w-full h-[2px] bg-gray-300" />
                                            )}

                                            {/* Step Circle */}
                                            <div
                                                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 z-10 ${index === activeStep
                                                    ? "border-teal-500 bg-teal-500 text-white"
                                                    : "border-gray-300 bg-white text-gray-400"
                                                    }`}
                                            >
                                                {index === activeStep ? (
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
                                            <p className='m-0 p-0'>Wed Sep 04 - Wed Sep 04 </p>
                                            <Icon className='m-0 p-0 text-[#FCFCFC]' icon="ci:line-xl" width="20" height="20" />
                                            <p className='m-0 p-0'>1 Adult, 0 Child, 0 Infant</p>
                                            <Icon className='m-0 p-0 text-[#FCFCFC]' icon="ci:line-xl" width="20" height="20" />
                                            <p className='m-0 p-0'>Round Trip</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-[#14142A] text-[0.9rem] font-bold'>TOTAL PRICE</p>
                                        <p className='text-[#FCFCFC] text-[0.9rem]'>0 <span>NGN</span></p>
                                    </div>
                                </div>


                                <div className='flex items-center justify-between w-full px-8 mt-[40px]'>
                                    <p className='m-0 font-bold text-[1.1rem]'>Departing Flight <span>Uyo (QUO) - Lagos (LOS)</span></p>

                                    <div className='flex m-0 items-center gap-x-4'>
                                        <div className='text-[#4E4B66] flex items-center gap-x-4'>
                                            <Icon className='m-0 p-0' icon="akar-icons:sort" width="24" height="24" />
                                            <p className='m-0 p-0'>Sort flights</p>
                                        </div>

                                        <button className='text-[#4E4B66] bg-transparent border-[#4E4B66] flex items-center border-[0.5px] justify-center gap-x-4 rounded-[8px] h-[40px] w-[150px]'>
                                            <Icon icon="lets-icons:candlestick" width="24" height="24" />
                                            Filter
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </button>


                                        <button className='text-[#4E4B66] bg-transparent border-[#4E4B66] flex items-center border-[0.5px] rounded-[8px] gap-x-4 h-[40px] justify-center w-[150px]'>
                                            NGN
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </button>

                                    </div>
                                </div>
                                <CalendarComponent />

                                <p className='ml-[30px] mt-[90px]'>Number of flight 2</p>

                                <div className='flex items-end justify-items-center px-[30px]'>
                                    <div className='h-[195px] flex items-center justify-between box-border p-3 rounded-tl-[8px] rounded-bl-[8px] w-[70%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>09:30</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Uyo (QUO)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>
                                            <div className='flex items-center gap-x-2'>
                                                <Icon icon="flowbite:info-circle-outline" className='text-[#255427]' width="18" height="18" />
                                                <p className='text-[0.9rem] m-0 p-0 text-[#255427]'>Flight Info</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                            <p className='text-[#4E4B66]'>1h 15m</p>
                                            <div className='h-[0.5px] w-[200px] bg-[#4E4B66]'></div>
                                            <p className='text-[#4E4B66] mt-3'>Nonstop</p>
                                        </div>

                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>10:45</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Lagos (LOS)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>

                                        </div>
                                    </div>


                                    <div className='h-[245px] rounded-tr-[8px] rounded-tl-[8px] relative flex items-center flex-col rounded-br-[8px] w-[30%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex justify-center rounded-tr-[8px] rounded-tl-[8px] items-center bg-[#00BBBB] text-white h-[50px] w-full'>PREMIUM</div>
                                        <div className='flex text-[0.7rem] justify-center items-center text-white bg-[#A0EBEB] rounded-bl-[5px] rounded-br-[5px] w-[30%]'>Best offer</div>

                                        <p className='mt-[40px]'>From</p>
                                        <p className='font-bold text-[1.1rem]'>NGN 193,000</p>

                                        <div className='absolute right-[15%] top-1/2'>
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mt-[25px] items-end justify-items-center px-[30px]'>
                                    <div className='h-[195px] flex items-center justify-between box-border p-3 rounded-tl-[8px] rounded-bl-[8px] w-[70%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>09:30</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Uyo (QUO)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>
                                            <div className='flex items-center gap-x-2'>
                                                <Icon icon="flowbite:info-circle-outline" className='text-[#255427]' width="18" height="18" />
                                                <p className='text-[0.9rem] m-0 p-0 text-[#255427]'>Flight Info</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                            <p className='text-[#4E4B66]'>1h 15m</p>
                                            <div className='h-[0.5px] w-[200px] bg-[#4E4B66]'></div>
                                            <p className='text-[#4E4B66] mt-3'>Nonstop</p>
                                        </div>

                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>10:45</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Lagos (LOS)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>

                                        </div>
                                    </div>


                                    <div className='h-[195px] rounded-tr-[8px] relative flex items-center flex-col rounded-br-[8px] w-[30%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex text-[0.7rem] justify-center items-center text-white bg-[#A0EBEB] rounded-bl-[5px] rounded-br-[5px] w-[30%]'>Best offer</div>

                                        <p className='mt-[40px]'>From</p>
                                        <p className='font-bold text-[1.1rem]'>NGN 193,000</p>

                                        <div className='absolute right-[15%] top-1/2'>
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </div>
                                    </div>
                                </div>



                                <div className='flex items-center justify-between w-full px-8 mt-[150px]'>
                                    <p className='m-0 font-bold text-[1.1rem]'>Return Flight <span>Uyo (QUO) - Lagos (LOS)</span></p>

                                    <div className='flex m-0 items-center gap-x-4'>
                                        <div className='text-[#4E4B66] flex items-center gap-x-4'>
                                            <Icon className='m-0 p-0' icon="akar-icons:sort" width="24" height="24" />
                                            <p className='m-0 p-0'>Sort flights</p>
                                        </div>

                                        <button className='text-[#4E4B66] bg-transparent border-[#4E4B66] flex items-center border-[0.5px] justify-center gap-x-4 rounded-[8px] h-[40px] w-[150px]'>
                                            <Icon icon="lets-icons:candlestick" width="24" height="24" />
                                            Filter
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </button>


                                        <button className='text-[#4E4B66] bg-transparent border-[#4E4B66] flex items-center border-[0.5px] rounded-[8px] gap-x-4 h-[40px] justify-center w-[150px]'>
                                            NGN
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </button>

                                    </div>
                                </div>
                                <CalendarComponent />

                                <p className='ml-[30px] mt-[90px]'>Number of flight 2</p>

                                <div className='flex items-end justify-items-center px-[30px]'>
                                    <div className='h-[195px] flex items-center justify-between box-border p-3 rounded-tl-[8px] rounded-bl-[8px] w-[70%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>09:30</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Uyo (QUO)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>
                                            <div className='flex items-center gap-x-2'>
                                                <Icon icon="flowbite:info-circle-outline" className='text-[#255427]' width="18" height="18" />
                                                <p className='text-[0.9rem] m-0 p-0 text-[#255427]'>Flight Info</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                            <p className='text-[#4E4B66]'>1h 15m</p>
                                            <div className='h-[0.5px] w-[200px] bg-[#4E4B66]'></div>
                                            <p className='text-[#4E4B66] mt-3'>Nonstop</p>
                                        </div>

                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>10:45</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Lagos (LOS)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>

                                        </div>
                                    </div>


                                    <div className='h-[245px] rounded-tr-[8px] rounded-tl-[8px] relative flex items-center flex-col rounded-br-[8px] w-[30%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex justify-center rounded-tr-[8px] rounded-tl-[8px] items-center bg-[#00BBBB] text-white h-[50px] w-full'>PREMIUM</div>
                                        <div className='flex text-[0.7rem] justify-center items-center text-white bg-[#A0EBEB] rounded-bl-[5px] rounded-br-[5px] w-[30%]'>Best offer</div>

                                        <p className='mt-[40px]'>From</p>
                                        <p className='font-bold text-[1.1rem]'>NGN 193,000</p>

                                        <div className='absolute right-[15%] top-1/2'>
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex mt-[25px] items-end justify-items-center px-[30px]'>
                                    <div className='h-[195px] flex items-center justify-between box-border p-3 rounded-tl-[8px] rounded-bl-[8px] w-[70%] bg-transparent border-[#D9DBE9] border-[0.5px]'>
                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>09:30</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Uyo (QUO)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>
                                            <div className='flex items-center gap-x-2'>
                                                <Icon icon="flowbite:info-circle-outline" className='text-[#255427]' width="18" height="18" />
                                                <p className='text-[0.9rem] m-0 p-0 text-[#255427]'>Flight Info</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col items-center'>
                                            <p className='text-[#4E4B66]'>1h 15m</p>
                                            <div className='h-[0.5px] w-[200px] bg-[#4E4B66]'></div>
                                            <p className='text-[#4E4B66] mt-3'>Nonstop</p>
                                        </div>

                                        <div className='flex flex-col items-start leading-3'>
                                            <p className='text-[1.1rem] font-bold'>10:45</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>Lagos (LOS)</p>
                                            <p className='text-[0.9rem] text-[#4E4B66]'>05 Sep 202</p>

                                        </div>
                                    </div>


                                    <div className='h-[195px] rounded-tr-[8px] relative flex items-center flex-col rounded-br-[8px] w-[30%] bg-transparent border-[#D9DBE9] border-[0.5px]'>

                                        <div className='flex text-[0.7rem] justify-center items-center text-white bg-[#A0EBEB] rounded-bl-[5px] rounded-br-[5px] w-[30%]'>Best offer</div>

                                        <p className='mt-[40px]'>From</p>
                                        <p className='font-bold text-[1.1rem]'>NGN 193,000</p>

                                        <div className='absolute right-[15%] top-1/2'>
                                            <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
                                        </div>
                                    </div>
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
