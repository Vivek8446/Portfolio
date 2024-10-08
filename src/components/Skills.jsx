import React from 'react'
import ReactLogo3D from './ReactLogo3D'
import react from '../assets/react.png'
import TechIconsGrid from './TechIconsGrid'

function Skills() {
  return (
    <div className='bg-[#050816] md:p-[3rem] mt-20 p-2' id='skills'>
         <div className='text-left '>
                {/* <p className={`sm:text-[18px] text-[14px] text-secondary text-white uppercase tracking-wider`}>My work</p> */}
                <h2 className={`text-white p-2 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[50px]`}>Skills.</h2>
            </div>
            
    <div className='md:mt-2 mt-60 sm:mt-32 mb-28 md:mb-10 '>
        <TechIconsGrid/>
    </div>
    </div>
  )
}

export default Skills