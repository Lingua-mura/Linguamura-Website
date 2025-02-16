'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { useSidebar } from '../_Context/SidebarContext'

const Header = () => {
  const { isCollapsed } = useSidebar();
  
  const menuItems = [
    { name: "Home", icon: "hugeicons:home-02" },
    { name: "Education", icon: "lsicon:education-outline" },
    { name: "Health", icon: "ri:hospital-line" },
    { name: "Communities", icon: "raphael:people" },
    { name: "Market Place", icon: "solar:shop-outline" },
    { name: "Transport", icon: "gravity-ui:car", active: true },
    { name: "Entertainment", icon: "hugeicons:game" },
    { name: "Housing", icon: "solar:buildings-2-bold" }
  ];

  return (
    <div>
      <div className={`h-[120px] flex items-center box-border justify-between w-full m-0 bg-white border-[#D9DBE9] border-b-[0.5px] border-l-[0.5px] transition-all duration-300 ease-in-out`}>
        <div className={`flex items-center space-x-8 transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-0' : 'ml-0'}`}>
          {menuItems.map((item, index) => (
            <div key={index} className='flex flex-col items-center mt-4 ml-[50px] group relative cursor-pointer'>
              <Icon 
                className={`${item.active ? 'text-[#00BBBB]' : 'text-[#4E4B66]'} group-hover:text-[#00BBBB] transition-colors duration-200`}
                icon={item.icon} 
                width="19" 
                height="19" 
              />
              <p className={`text-[0.8rem] ${item.active ? 'text-[#00BBBB]' : 'text-[#4E4B66]'} mt-2 mb-2 group-hover:text-[#00BBBB] transition-colors duration-200 relative`}>
                {item.name}
                <span className={`absolute left-0 bottom-[-8px] ${item.active ? 'w-full' : 'w-0'} h-[4px] bg-[#00BBBB] transition-all duration-200 group-hover:w-full`}></span>
              </p>
            </div>
          ))}
        </div>

        <div className='flex items-center gap-x-4 mr-8'>
          <div className='flex items-center gap-x-3 hover:text-[#00BBBB] transition-colors duration-200 cursor-pointer'>
            <div className='flex items-center'>
              <p className='leading-0 m-0 p-0'>EN</p>
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
