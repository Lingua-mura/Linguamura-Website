'use client'
import React from 'react'
import Hero from './Hero'
import LeftNavBar from '../../_Components/LeftNavBar'
import { SidebarProvider } from '../../_Context/SidebarContext'

const page = () => {
  return (
    <SidebarProvider>
      <div className='flex'>
        <LeftNavBar />
        <Hero />
      </div>
    </SidebarProvider>
  )
}

export default page