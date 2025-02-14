import React from 'react'
import Hero from './Hero'
import LeftNavBar from './_Components/LeftNavBar'
const page = () => {
  return (
    <div className='flex'>
      <div className='w-1/4 bg-red-500 min-h-[100vh]'>
        <LeftNavBar />
      </div>
      <div className='w-3/4 bg-blue-500 min-h-[100vh]'>
        <Hero />
      </div>
    </div>
  )
}

export default page
