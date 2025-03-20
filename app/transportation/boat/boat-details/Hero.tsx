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
                                        size: 24,
                                        link: '/transportation/flight/flight-booking', // Added the link for Travel by Air
                                    },
                                    {
                                        icon: "teenyicons:car-outline",
                                        text: "Travel by Land",
                                        size: 20,
                                        link: '/transportation/bus/bus-booking', // Link for Travel by Land
                                    },
                                    { icon: "hugeicons:boat", text: "Travel by Water", bg: "#A0EBEB", textColor: "#4E4B66" },
                                ].map(({ icon, text, size = 24, bg, textColor, link }, index) => (
                                    link ? (
                                        <Link href={link} key={index} className="no-underline text-white">
                                            <div
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
                                        </Link>
                                    ) : (
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
                                    )
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
                                    <input type="text" placeholder='Where are you going?' className='outline-none border-none text-[#A0A3BD] bg-transparent' />
                                </div>

                                <div className='rounded-[40px] justify-between p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#F7F7FC] border-[0.3px] border-[#D9DBE9]'>
                                    <input
                                        type="date"
                                        placeholder='Pick a date'
                                        className='outline-none border-none text-[#A0A3BD] bg-transparent w-full'
                                    />

                                </div>

                                <div className='rounded-[40px] justify-start p-3 items-center box-border text-[0.9rem] flex items text-[#A0A3BD] center gap-x-2 w-[25%] h-[50px] bg-[#F7F7FC] border-[0.3px] border-[#D9DBE9]'>
                                    <Icon icon="fa:user-o" width="24" height="24" />
                                    <input type="text" placeholder='Who is in?' className='outline-none border-none text-[#A0A3BD] bg-transparent' />

                                </div>

                                <button className='rounded-[35px] -mt-[10px] text-[#EFF0F6] flex items-center justify-center h-[50px] gap-x-2 min-w-[15%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                    search

                                </button>

                            </div>

                            <div className='w-full flex items-start mt-[30px] mb-[40px]'>
                                <Icon
                                    icon="cuida:arrow-left-outline"
                                    width="90"
                                    height="40"
                                    onClick={() => router.back()}
                                    className='cursor-pointer'
                                />
                            </div>


                            <div className='flex items-center w-full h-[350px] gap-x-6 justify-between px-[30px] mt-[30px]'>
                                <div style={{ backgroundImage: 'url(/download3.svg)', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='w-[50%] h-full rounded-[10px]'></div>
                                <div className='w-[60%] grid grid-cols-2 gap-3 h-full rounded-[10px] bg-transparent'>
                                    <div style={{ backgroundImage: 'url(/download4.png)', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='h-[100%] w-[100%] rounded-[10px]'></div>
                                    <div style={{ backgroundImage: 'url(/download7.svg)', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='h-[100%] w-[100%] rounded-[10px]'></div>
                                    <div style={{ backgroundImage: 'url(/download6.svg)', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='h-[100%] w-[100%] rounded-[10px]'></div>
                                    <div style={{ backgroundImage: 'url(/download5.svg)', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='h-[100%] w-[100%] rounded-[10px]'></div>
                                </div>
                            </div>

                            <div className='p-[30px]'>
                                <p className='text-[1.2rem] font-semibold text-[#14142A]'>45ft Power Catamaran Chater in Lagos,Nigeria</p>
                                <p className='text-[#6E7191] text-[0.9rem]'>Lagos, Nigeria Province,Lagos Powerboats</p>

                            </div>

                            <div className='w-full min-h-[400px] flex items-start gap-x-5 bg-transparent px-[30px]'>
                                <div className='w-[65%] box-border p-3 h-auto bg-transparent flex flex-col items-start'>
                                    <div className='border-[#D9DBE9] border-y-[0.4px] py-[20px]'>
                                        <p className='text-[#6E7191] text-[1.1rem]'>Come celebrate your special occassion on a catamarani  in lagos charter the 45 feet power catamaran for up to 30 person rate as low as NGN80,000 per hour and aminimum booking of 5 hours.</p>
                                    </div>

                                    <div className='border-[#D9DBE9] mt-[10px] flex items-center w-full border-b-[0.4px] gap-x-2 py-[20px]'>
                                        <Image alt='profile picture' src='/Ellipse554.svg' height={50} width={50} />

                                        <div className='leading-0'>
                                            <p className='m-0 p-0 text-[#14142A]'>Athkins</p>
                                            <p className='text-[#6E7191] m-0 p-0 text-[0.9rem]'>Owner</p>
                                        </div>
                                    </div>


                                    <div className='border-[#D9DBE9] mt-[10px] flex flex-col items-start w-full border-b-[0.4px] gap-x-5 py-[20px]'>
                                        <div className='flex items-center gap-x-5'>
                                            <Icon className='text-[#6E7191]' icon="lucide:user-round" width="24" height="24" />

                                            <div className='leading-0'>
                                                <p className='m-0 p-0 text-[#14142A]'>30 guests</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-x-5 mt-[25px]'>
                                            <Icon className='text-[#6E7191]' icon="ph:boat-light" width="24" height="24" />

                                            <div className='leading-0'>
                                                <p className='m-0 p-0 text-[#14142A]'>Powerboats,Pontoons, & RIBs</p>
                                                <p className='text-[#14142A] m-0 p-0 text-[0.9rem]'>Power Catamaran</p>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='border-[#D9DBE9] mt-[10px] flex flex-col items-start w-full pb-[40px] border-b-[0.4px] gap-x-5 py-[20px]'>
                                        <p className='text-[#14142A]'>Check Availability</p>

                                        <div className='w-full flex items-center justify-between'>
                                            <div className='h-6 flex justify-center items-center w-14 rounded-md border-[0.3px] border-[#00BBBB]'><p className='text-[0.7rem] m-0 p-0'>2024</p></div>

                                            <div className='flex items-center gap-x-5 text-[#00BBBB]'>
                                                <Icon icon="iconamoon:arrow-left-6-circle-light" width="24" height="24" />
                                                <Icon icon="iconamoon:arrow-right-6-circle-light" width="24" height="24" />
                                            </div>
                                        </div>

                                        <div className='h-[420px] p-4 w-full mt-[30px] border-[#00BBBB] border-[0.3px] rounded-[12px] flex flex-col justify-evenly items-center leading-0'>
                                            <p className='font-bold m-0 p-0'>May</p>
                                            <ul className='flex m-0 p-0 items-center justify-between w-full text-[0.9rem]'>
                                                <li>Sun</li>
                                                <li>Mon</li>
                                                <li>Tue</li>
                                                <li>Wed</li>
                                                <li>Thur</li>
                                                <li>Fri</li>
                                                <li>Sat</li>
                                            </ul>

                                            <ul className='grid m-0 p-0 grid-cols-7 gap-x-14 gap-8 text-[0.9rem]'>
                                                <li>27</li>
                                                <li>28</li>
                                                <li>29</li>
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>
                                                <li className='p-2 bg-[#00BBBB] rounded-md flex justify-center items-center m-0'>8</li>
                                                <li className='p-2 bg-[#00BBBB] rounded-md flex justify-center items-center m-0'>9</li>
                                                <li>10</li>
                                                <li>11</li>
                                                <li>12</li>
                                                <li>13</li>
                                                <li>14</li>
                                                <li>15</li>
                                                <li>16</li>
                                                <li>17</li>
                                                <li>18</li>
                                                <li>19</li>
                                                <li>20</li>
                                                <li>21</li>
                                                <li>22</li>
                                                <li>23</li>
                                                <li>24</li>
                                                <li>25</li>
                                                <li>26</li>
                                                <li>27</li>
                                                <li>28</li>
                                                <li>29</li>
                                                <li>30</li>

                                            </ul>


                                        </div>


                                    </div>

                                    <div className='border-[#D9DBE9] mt-[10px] w-full border-b-[0.4px] py-[20px]'>
                                        <div className='flex items-start justify-center p-[25px] h-[200px] bg-[#E4FFFF] rounded-[12px] w-full gap-x-2'>
                                            <Image alt='profile picture' src='/Ellipse554.svg' height={50} width={50} />

                                            <div className='leading-0'>
                                                <p className='m-0 p-0 text-[#14142A]'>Athkins</p>
                                                <p className='text-[#6E7191] m-0 p-0 text-[0.9rem]'>Owner</p>
                                                <p className='text-[#6E7191] m-0 p-0 text-[0.9rem]'>we provide an individualized and personalized service according to  the requirements and needs of each clients. our team is highly specialized in the areas in which we operates and customer satisfaction is our main objective.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='border-[#D9DBE9] flex-col mt-[10px] flex items-center w-full border-b-[0.4px] gap-x-2 py-[20px]'>
                                        <div className='w-full flex items-center justify-between'>
                                            <p className='fon-bold p-0 m-0 font-bold'>More of Honours Listings</p>

                                            <div className='flex items-center gap-x-5 text-[#00BBBB]'>
                                                <Icon icon="solar:round-alt-arrow-left-bold-duotone" width="24" height="24" />
                                                <Icon icon="solar:round-alt-arrow-right-bold-duotone" width="24" height="24" />
                                            </div>
                                        </div>

                                        <div className={`grid grid-cols-3 ${isCollapsed ? 'gap-6' : 'gap-[50%]'}  mt-[30px] w-full`}>
                                            {[...Array(2)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`h-[250px] relative ${isCollapsed ? 'w-[200px]' : 'w-[200px]'} rounded-[24px] bg-transparent flex flex-col shadow-md items-start`}
                                                >

                                                    <div style={{ background: "url(/download5.svg)" }} className='h-[100px] rounded-t-[25px] w-[200px]'></div>
                                                    <div className="p-[20px] leading-3">
                                                        <p className="text-[0.6rem] font-bold">
                                                            45ft Power Catamaran Charter
                                                        </p>
                                                        <p className="text-[0.5rem] text-[#4E4B66] mt-4">
                                                            Powerboats in linguamura
                                                        </p>
                                                        <p className="text-[0.6rem] font-semibold mt-4 text-[#4E4B66]">NGN 100,000+ /hour</p>
                                                        <div className="flex items-center gap-x-[1px]">
                                                            <Icon
                                                                className="text-[#FFC000]"
                                                                icon="icon-park-outline:star-one"
                                                                width="10"
                                                                height="10"
                                                            />
                                                            <Icon
                                                                className="text-[#FFC000]"
                                                                icon="icon-park-outline:star-one"
                                                                width="10"
                                                                height="10"
                                                            />
                                                            <Icon
                                                                className="text-[#FFECB2]"
                                                                icon="icon-park-outline:star-one"
                                                                width="10"
                                                                height="10"
                                                            />
                                                            <Icon
                                                                className="text-[#FFECB2]"
                                                                icon="icon-park-outline:star-one"
                                                                width="10"
                                                                height="10"
                                                            />
                                                            <Icon
                                                                className="text-[#FFECB2]"
                                                                icon="icon-park-outline:star-one"
                                                                width="10"
                                                                height="10"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-[5%] right-[5%] h-auto w-auto p-[5px] rounded-lg bg-[#F7F7FC]">
                                                        <Icon
                                                            icon="iconamoon:heart-fill"
                                                            className="text-[#A0A3BD]"
                                                            width="14"
                                                            height="14"
                                                        />
                                                    </div>
                                                </div>
                                            ))}



                                        </div>




                                    </div>

                                    <div className='border-[#D9DBE9] flex-col mt-[10px] flex items-start w-full border-b-[0.4px] pb-[50px] py-[20px]'>
                                        <div className='leading-0 '>
                                            <p className='m-0 p-0 font-bold'>Cancellation Policy</p>
                                            <p className='text-[0.9rem] m-0 p-0 text-[#6E7191]'>Full refund up to 5 days prior.</p>
                                        </div>

                                        <div className='leading-0 mt-[20px]'>
                                            <p className='m-0 p-0 font-bold'>Approximate Location</p>
                                            <p className='text-[0.9rem] m-0 p-0 text-[#6E7191]'>You’ll get directions to the depature location when you make a booking.</p>
                                        </div>

                                        <Image className='w-full mt-[10px]' alt='map' height={200} width={750} src='/Group45.svg' />
                                    </div>


                                    <p className='mt-[25px] font-bold'>Features & Details</p>
                                    <div className='h-[95px] w-[320px] flex items-center justify-between bg-[#E4FFFF] p-[10px] rounded-[12px]'>



                                        <div className='flex items-center gap-x-2'>

                                            <Icon icon="fontisto:arrow-h" width="24" height="24" />

                                            <div>
                                                <p className='m-0 p-0 text-[#14142A]'>Length</p>
                                                <p className='m-0 p-0 text-[#6E7191]'>45ft</p>
                                            </div>
                                        </div>


                                        <div className='flex items-center gap-x-2'>

                                            <Icon icon="solar:calendar-linear" width="24" height="24" />

                                            <div>
                                                <p className='m-0 p-0 text-[#14142A]'>Length</p>
                                                <p className='m-0 p-0 text-[#6E7191]'>45ft</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex items-start pb-[50px] mt-7 gap-x-32'>
                                        <div className='w-[200px] flex flex-col gap-y-5 text-[0.9rem] text-[#6E7191] h-[400px] bg-transparent'>
                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="uil:trophy" width="24" height="24" />
                                                <p className='m-0 p-0'>Bar</p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="game-icons:gas-stove" width="24" height="24" />
                                                <p className='m-0 p-0'>Galley Stove & Oven</p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="ph:engine-bold" width="24" height="24" />
                                                <p className='m-0 p-0'>Twin engine</p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="ph:toilet-bold" width="24" height="24" />
                                                <p className='m-0 p-0'>Toilet</p>
                                            </div>


                                        </div>
                                        <div className='w-[200px] flex flex-col gap-y-5 text-[0.9rem] text-[#6E7191] h-[400px] bg-transparent'>
                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="material-symbols:bluetooth" width="24" height="24" />
                                                <p className='m-0 p-0'>Bluetooth</p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="tabler:jacket" width="24" height="24" />
                                                <p className='m-0 p-0'>Life jackets/required safety gear </p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="radix-icons:dot-filled" width="24" height="24" />
                                                <p className='m-0 p-0'>Center Cockpit</p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="radix-icons:dot-filled" width="24" height="24" />
                                                <p className='m-0 p-0'>Wheel steering</p>
                                            </div>

                                            <div className='flex items-center gap-x-5'>
                                                <Icon icon="radix-icons:dot-filled" width="24" height="24" />
                                                <p className='m-0 p-0'>Wheel steering</p>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                                <div className='w-[65%] h-[500px] bg-[#F7F7FC] flex flex-col p-4'>
                                    <div className='leading-1'>
                                        <p className='m-0 p-0'>Starting from</p>
                                        <p className='m-0 p-0 font-bold text-[1.4rem]'>NGN 100,000/hour</p>

                                        <div className='flex items-center justify-center mt-[30px]'>
                                            <button className='rounded-[35px] text-[#EFF0F6] flex items-center justify-center h-[40px] gap-x-2 min-w-[55%] w-auto bg-gradient-to-r from-[#04E2E2] to-[#00BBBB]
 shadow-[0_4px_0_#4C3A00] px-6 py-2 hover:bg-white hover:translate-y-[2px] hover:shadow-[0_2px_0_#4C3A00] transition-all duration-200'>
                                                send inquiry

                                            </button>
                                        </div>

                                        <div className='flex mt-5 items-end justify-between'>
                                            <div>
                                                <p className='font-medium'>Base Cost </p>
                                                <p className='text-[0.8rem] text-[#A0A3BD]'>NGN 200/hr</p>
                                                <p className='text-[0.8rem] text-[#A0A3BD]'>NGN 200/hr</p>
                                            </div>

                                            <div>

                                                <p className='text-[0.8rem] text-[#A0A3BD]'>4 hrs min</p>
                                                <p className='text-[0.8rem] text-[#A0A3BD]'>7 hrs min</p>
                                            </div>
                                        </div>
                                        <p className='font-medium mt-[15px]'>Independent Captain </p>
                                        <p className='text-[0.8rem] text-[#A0A3BD]'>Payment go to the captain directly on your behalf.</p>

                                        <div className='flex justify-center items-center mt-[30px] border-[#D9DBE9] border-t-[0.3px] pt-4'>
                                            <p className='text-[#00BBBB] font-bold text-[0.9rem]'>View all</p>
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>



                    </div>

                </div>




            </div>



        </div >
    )
}

export default Hero
