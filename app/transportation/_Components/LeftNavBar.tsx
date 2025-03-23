'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { useSidebar } from '../_Context/SidebarContext';

const LeftNavBar = () => {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  
  const menuItems = [
    { name: "Home", icon: "hugeicons:home-02" },
    { name: "Wallet", icon: "solar:wallet-money-outline" },
    { name: "Friends", icon: "raphael:people" },
    { name: "Messages", icon: "hugeicons:message-01" },
    { name: "Bookmarks", icon: "material-symbols-light:bookmark-check-outline-rounded" },
    { name: "Go Premium", icon: "fluent:premium-16-regular", iconColor: "text-btnPrimary" },
    { name: "Updates", icon: "hugeicons:location-update-01" },
    { name: "Notifications", icon: "famicons:notifications-outline" },
    { name: "Settings", icon: "hugeicons:settings-01" },
    { name: "Help Center", icon: "mage:message-question-mark" },
    { name: "Logout", icon: "humbleicons:logout" },
  ];

  return (
    <div className={`flex flex-col h-screen relative transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[100px]' : 'w-[280px]'}`}>
      <div className='p-[24px] flex justify-start'>
        <Image 
          src={isCollapsed ? '/linguamura_logo.svg' : '/logo and icon 1.svg'} 
          alt='logo' 
          width={isCollapsed ? 40 : 140} 
          height={isCollapsed ? 40 : 25} 
          className='transition-all duration-300 ease-in-out'
        />
      </div>

      <div 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className='absolute -right-5 top-[5%] h-[40px] flex justify-center items-center w-[40px] rounded-[50%] bg-slate-300 
        hover:bg-[#04E2E2] hover:text-white hover:scale-110 hover:shadow-lg
        transform transition-all duration-300 ease-in-out cursor-pointer'
      >
        <Icon 
          icon={isCollapsed ? "iconamoon:arrow-right-2-duotone" : "iconamoon:arrow-left-2-duotone"} 
          width="24" 
          height="24" 
          className="transition-transform duration-300 hover:translate-x-[-2px]"
        />
      </div>

      <div className='flex-1 overflow-y-auto no-scrollbar'>
        <div className={`min-h-[70vh] mt-[70px] h-auto w-full flex flex-col justify-start p-[24px] items-start bg-transparent border-t border-b border-[#D9DBE9] ${isCollapsed ? 'items-center' : ''}`}>
          <div className={`h-[45px] box-border space-x-2 p-[12px] ${isCollapsed ? 'w-[45px]' : 'w-[220px]'} border border-[#D9DBE9] rounded-[30px] flex justify-center items-center mt-[15px] transition-all duration-300`}>
            <Icon icon="ri:search-2-line" width="30" height="30" className='text-[#6E7191]' />
            <input type='text' placeholder='Search' className={`w-full outline-none border-none mt-1 text-[0.9rem] text-[#6E7191] ${isCollapsed ? 'hidden' : 'block'}`} />
          </div>

          <div className={`mt-[30px] w-[100%] space-y-[25px] flex flex-col justify-start ${isCollapsed ? 'items-center' : 'items-start'}`}>
            {menuItems.map((item, index) => (
              <div key={index} className={`flex items-center ${isCollapsed ? 'justify-center w-[45px]' : 'gap-x-2 w-full px-3'} py-2 rounded-lg 
              hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
              transform hover:scale-105 hover:translate-x-2
              transition-all duration-300 ease-in-out cursor-pointer`}>
                <Icon className={`${item.iconColor || 'text-[#6E7191]'} transition-transform duration-300 group-hover:rotate-12`} icon={item.icon} width="24" height="24" />
                <p className={`m-0 p-0 leading-none text-[#14142A] text-[1rem] ${isCollapsed ? 'hidden' : 'block'}`}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-[40px] cursor-pointer flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} mb-[90px] p-[24px] 
        hover:bg-sidebar-accent rounded-lg transform hover:scale-105
        transition-all duration-300 ease-in-out`}>
          <Image src='/Avatar.svg' height={30} width={30} alt='avatar' />
          <div className={`leading-0 ${isCollapsed ? 'hidden' : 'block'}`}>
            <p className='font-bold text-[1rem] m-0 p-0'>Darlington Bruggles</p>
            <p className='font-medium text-[#4e4b66] text-[0.9rem] m-0 p-0'>User1D39037</p>
          </div>
          <Icon className={`hover:text-primary transition-transform duration-300 hover:translate-x-1 ${isCollapsed ? 'hidden' : 'block'}`} icon="ic:round-keyboard-arrow-right" width="24" height="24" />
        </div>
      </div>
    </div>
  )
}

export default LeftNavBar
