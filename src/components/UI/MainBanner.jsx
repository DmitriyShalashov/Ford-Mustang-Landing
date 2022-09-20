import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BANNER, BANNER_2 } from '../../consts/img';

const fullText='Ford Dark Horse'

function MainBanner() {
    
    const [text, setText]=useState('')
    const [isTyping, setIsTyping]=useState(true)
    const [img, setImg]=useState(BANNER)


    const  typing=()=>{
        let index=0
        let ticker=setInterval(() => {
            if(index===fullText.length)
            {
                return ()=>clearTimeout(ticker)
            }
            type(index)
            index++
        }, 10);
    }
    const type=(index)=>{
            isTyping
            ?setText(fullText.substring(0, fullText.length-index-1))
            :setText(fullText.substring(0, index+1))
    }

    useEffect(()=>{
        setTimeout(() => {
            img===BANNER
            ?setImg(BANNER_2)
            :setImg(BANNER)
        },(Math.random()*2000));
    },[img])

    useEffect(()=>{
        typing()
        setTimeout(() => {
            setIsTyping(!isTyping)
        }, isTyping?2000:4000);
    },[isTyping])

    return ( 
        <div className='fixed w-full h-[370px] top-0 overflow-hidden select-none z-[-20]'>
            <img src={img} alt='' className='w-full mt-[-32%]'></img>
            <div className='absolute left-[100px] top-[100px] text-white '>
                <h1 className='text-[60px] ford mb-[-10px] h-[80px]'>{text}</h1>
                <p>Seventh generation Mustang</p>
            </div>

        </div>
     );
}

export default MainBanner;