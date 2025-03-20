'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../../_Context/SidebarContext'

const Header = () => {
    const { isCollapsed } = useSidebar();



    return (
        <div>
            <div className={`h-[120px] flex items-center box-border justify-between w-full m-0 bg-white border-[#D9DBE9] border-b-[0.5px] border-l-[0.5px] transition-all duration-300 ease-in-out`}>
                <div className={`flex items-center transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-[50px]' : 'ml-[50px]'}`}>
                    <p className='p-0 m-0'>Linguamura Marketplace / Bookings</p>
                    <Icon className='m-0 p-0' icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                </div>

                <div className='flex items-center gap-x-4 mr-8'>
                    <div className='flex items-center gap-x-3 hover:text-[#00BBBB] transition-colors duration-200 cursor-pointer'>
                        <div className='flex items-center'>
                            <Icon className='mr-2' icon="tabler:world" width="24" height="24" />
                            <p className='leading-0 m-0 p-0'>English</p>
                            <Icon className='m-0 p-0' icon="iconamoon:arrow-down-2-light" width="24" height="24" />
                        </div>
                    </div>

                    <div className='hover:scale-110 transition-transform duration-200 cursor-pointer'>
                        <Image src='/Group 9.svg' alt='group vector' height={35} width={35} />
                    </div>

                    <div className='hover:text-[#00BBBB] transition-colors duration-200 cursor-pointer'>
                        <Icon className='m-0 p-0' icon="hugeicons:message-01" width="24" height="24" />
                    </div>

                    <div className='hover:text-[#00BBBB] transition-colors duration-200 cursor-pointer'>
                        <Icon className='m-0 p-0' icon="famicons:notifications-outline" width="24" height="24" />
                    </div>

                    <div className='hover:scale-110 transition-transform duration-200 cursor-pointer'>
                        <Image src='/Avatar.svg' height={30} width={30} alt='avatar' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header
