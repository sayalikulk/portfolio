import React, { useEffect, useState } from 'react';
import LeftConstant from './LeftConstant'
import RightConstant from './RightConstant'

const MainComponent = () => {
  return (
    <div>
      <div >
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-white h-full'>
        <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='p-[100px] col-span-1 md:col-start-1 md:col-span-2 fixed-screen'>
                    <LeftConstant/>
                </div>
                <div className='col-span-1 md:col-start-3 md:col-span-3'>
                    <RightConstant/>
                </div>
            </div>   
      </div>
    </div>
    </div>
    
  )
}

export default MainComponent