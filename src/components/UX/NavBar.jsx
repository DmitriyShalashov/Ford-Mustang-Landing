import React from 'react';

function NavBar() {
    return ( 
        <div className='w-full h-[70px] bg-black mt-[370px] flex justify-center'>
            <div className='container mx-auto text-white font-medium flex w-[600px] justify-between items-center text-[18px]' id='home'>
                <a href='#photo'><p className='cursor-pointer'>Ford Dark Horse</p></a>
                <a href='#params'><p className='cursor-pointer'>Галерея</p></a>
                <a href='#features'><p className='cursor-pointer'>Характеристики</p></a>
                <a href='#help'><p className='cursor-pointer'>Полезное</p></a>
            </div>
        </div>
     );
}

export default NavBar;