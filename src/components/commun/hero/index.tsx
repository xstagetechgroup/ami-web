import Image from 'next/image';
import React from 'react';
import { Search } from 'lucide-react';
import Container from '@/components/shared/container';

const HeroSection: React.FC = () => {
    return (
        <div className='w-full relative bg-white flex items-center justify-center h-[950px]'>
            <Image src={'/assets/hero-banner.png'} className='absolute top-0 w-full h-full object-cover object-right z-10' alt='Hero Image' width={1920} height={1080} />
            <div className='w-full h-full bg-gradient-to-l from-gray-900 to-transparent z-20 md:hidden'></div>
            <div className='absolute top-0 w-full h-full z-20 flex items-center justify-center'>
                <Container>
                    <div className='w-full h-full flex flex-col gap-40 items-start justify-start'>
                        <h1 className='text-6xl font-bold text-primaryColor pt-40'>Transformar o <br /> mundo começa <br /> por instruir <br /> mulheres.</h1>
                        <div className='flex flex-col gap-4 w-full max-w-xl'>
                            <span>
                                <p className='font-bold text-base sm:text-lg'>Junte-se a nós e nos ajude a ajudar</p>
                            </span>

                            <div className='w-full flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center justify-between p-5 rounded-xl shadow-lg bg-white'>
                                <span>
                                    <p className='font-medium text-gray-400 text-sm sm:text-base'>O que está na sua lista de tarefas?</p>
                                    <p className='font-bold text-primaryColor text-sm sm:text-base'>Categoria</p>
                                </span>

                                <div className='hidden sm:block h-12 border-l-2 border-gray-200'></div>

                                <span className='flex items-center justify-between gap-6'>
                                    <p className='font-medium text-gray-400 text-sm sm:text-base'>Localização</p>
                                    <Search className='text-primaryColor' />
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HeroSection;