import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7 } from '../consts/img';
import 'animate.css'

function Photo() {
    return ( 
        <div className='w-full h-screen bg-white mt-[150px] select-none' id='photo'>
            <div className='w-full h-screen flex justify-between ' >
                <AnimationOnScroll animateIn='animate__slideInLeft ' animateOut='animate__slideOutLeft ' duration='0.5'>
                <div className='w-[70%] h-full flex flex-wrap '>
                    <div className='bg-black overflow-hidden'><img src={IMG_4} alt='' className='object-cover h-full hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></div>
                    <div className='bg-black overflow-hidden'><img src={IMG_3} alt='' className='object-cover h-full hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></div>
                    <div className='bg-black overflow-hidden'><img src={IMG_1} alt='' className='object-cover h-full hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></div>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInDown' animateOut='animate__fadeOutDown ' duration='1'>
                <div className='w-[400px] text-center'>
                    <a href='#home' ><img src={IMG_7} alt='' className='object-cover  hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></a>
                    <h1 className='mt-[140px] py-1 border-b-2 w-fit font-medium border-blue-700 text-[24px] m-auto mb-[20px]'>New generation</h1>
                    <p className='mt-[10px]'>The all-new Ford Mustang Dark Horse is the first new high-performance Mustang series in 21 years, featuring sinister yet premium exterior and interior styling and a powerful engine.</p>
                </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__slideInRight' animateOut='animate__slideOutRight' duration='0.5'>
                <div className='w-[70%] h-full flex flex-wrap ml-auto'>
                    <div className='bg-black overflow-hidden'><img src={IMG_6} alt='' className='object-cover h-full hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></div>
                    <div className='bg-black overflow-hidden'><img src={IMG_5} alt='' className='object-cover h-full hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></div>
                    <div className='bg-black overflow-hidden'><img src={IMG_2} alt='' className='object-cover h-full hover:opacity-90 cursor-pointer hover:scale-110 transition-all'></img></div>
                </div></AnimationOnScroll>
            </div>
        </div>
     );
}

export default Photo;