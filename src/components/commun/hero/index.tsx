'use client';
import Image from 'next/image';
import React from 'react';
import Container from '@/components/shared/container';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection: React.FC = () => {

    const { t } = useTranslation();
    const c = t.hero; // atalho

    return (
        <div className='w-full relative bg-white flex items-center justify-center h-[950px]'>
            <Image src={'/assets/hero-banner.png'} className='absolute top-0 w-full h-full object-cover object-right z-10' alt='Hero Image' width={1920} height={1080} />
            <div className='w-full h-full bg-gradient-to-l from-gray-900 to-transparent z-20 md:hidden'></div>
            <div className='absolute top-0 w-full h-full z-20 flex items-center justify-center'>
                <Container>
                    <div data-aos="fade-right" className='w-full h-full flex flex-col gap-40 items-start justify-start'>
                        <h1 className='text-6xl font-bold text-primaryColor pt-40'>{c.title} <br /> {c.title2} <br /> {c.title3}</h1>
                        <div className='flex flex-col gap-4 w-full max-w-xl'>
                            <span>
                                <p className='font-bold text-3xl md:text-3xl text-white md:text-black'>{c.subtitle}</p>
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HeroSection;