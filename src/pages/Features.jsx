import React from 'react';
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FEA_1 } from '../consts/img';

function Features() {
    return ( 
        <div className='w-full h-screen bg-black mb-[50px] flex justify-between' id='features'>
            <AnimationOnScroll animateIn='animate__slideInLeft' animateOut='animate__slideOutLeft' duration='0.5'>
            <div className='w-[200px] ml-[100px] grid grid-rows-5 h-full mt-[40px] mb-[40px] text-white'>
                <p className='text-[20px] h-fit w-fit px-4 border-l-[3px] border-blue-700 '>New unique <span className='font-medium'>5.0-liter </span> Coyote V8 engine</p>
                <p className='text-[20px] h-fit w-fit px-4 border-l-[3px] border-blue-700 '>Engine power will <span className='font-medium'>be 500 hp</span></p>
                <p className='text-[20px] h-fit w-fit px-4 border-l-[3px] border-blue-700 '><span className='font-medium'>6 speed</span> automatic transmission</p>
                <p className='text-[20px] h-fit w-fit px-4 border-l-[3px] border-blue-700 '>Improved <span className='font-medium'>aerodynamics, tires, steering</span></p>
                <p className='text-[20px] h-fit w-fit px-4 border-l-[3px] border-blue-700 '>Unique chassis setup, <span className='font-medium'>large rear anti-roll bars</span></p>
            </div>
            </AnimationOnScroll>
            <div className='w-[700px] relative overflow-hidden flex'>
                <img className='w-full absolute opacity-80 blur-[1px]'
                 src='https://images.unsplash.com/photo-1613283850334-9219c5fb7143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80' alt=''></img>
                <div className='h-full bg-white w-full mt-[50%] relative'>
                    <AnimationOnScroll animateIn='animate__slideInRight' animateOut='animate__slideOutRight'>
                        <img src={FEA_1} alt='' className=' w-[480px] absolute top-[-170px] left-[100px]'></img>
                    </AnimationOnScroll>
                    <p className='relative mt-[20%] mx-[40px] text-[18px] italic'>We took the all-new Mustang, 
                    the best of our new 5.0-liter V8, and added power, improved aerodynamics, tires, steering,
                    and provided an interactive cockpit
                    to create a Mustang that outperforms any 5.0-liter Mustang built before this,
                     <p className='mt-[20px] font-medium '>Ed Krenz, Ford Mustang chief engineer.</p>
                    </p>
                    
                </div>
            </div>
        </div>
     );
}

export default Features;