import React from 'react';
import { BANNER, PAR_1, PAR_2, PAR_3, PAR_4, PAR_5 } from '../consts/img';

function Params() {
   
    return ( 
        <div className='w-full h-screen bg-black mt-[100px] grid grid-cols-12 select-none' id='params'>
            <div className="col-span-4 bg-black text-white grid grid-rows-12 opacity-80">
                <div className='row-span-4 flex items-center justify-center relative '>
                    <img className='object-cover hover:opacity-50  h-full transition-all' alt='' src={PAR_3}></img>  
                </div>
                <div className='row-span-1'><img className='object-cover h-full hover:opacity-50 transition-all' alt='' src={PAR_1}></img></div>
            </div>
            <div className="col-span-4 bg-black text-white grid grid-rows-12 opacity-80">
                <div className=''><img className='object-cover h-full hover:opacity-50 transition-al' alt='' src={BANNER}></img></div>
                <div className=''><img className='object-cover h-full hover:opacity-50 transition-al' alt='' src={PAR_2}></img></div>
            </div>
            <div className="col-span-4 bg-black text-white grid grid-rows-12 opacity-80">
                <div className='row-span-4'><img className='object-cover h-full hover:opacity-50 transition-al' alt='' src={PAR_4}></img></div>
                <div className='row-span-1'><img className='object-cover h-full hover:opacity-50 transition-al' alt='' src={PAR_5}></img></div>
            </div>
        </div>
     );
}

export default Params;