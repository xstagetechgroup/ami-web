import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';

const WhoWeAre: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-10'>
            <div className='w-full h-[500px] bg-gray-200 flex items-center justify-center relative'>
                <Image src={'/assets/who-we-are.jpg'} alt='Quem Somos' width={1000} height={1000} className='absolute z-10 top-0 object-cover w-full h-full object-top' />
                <div className='absolute z-20 w-full h-full top-0'></div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 text-center px-5'>
                <Button className='bg-white text-primaryColor border-2 capitalize font-bold border-primaryColor px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                    <p className='duration-200 group-hover:text-white'>Ver Mais</p>
                </Button>
            </div>
        </div>
    );
}

export default WhoWeAre;