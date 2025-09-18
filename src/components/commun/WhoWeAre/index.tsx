'use client';
import Container from '@/components/shared/container';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WhoWeAre() {

    const { t } = useTranslation();
    const c = t.whoWeAre; // atalho


    return (
        <div className="w-full flex flex-col items-center justify-center" id='team'>

            <div className="relative w-full flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/assets/who-we-are.jpg')" }}>

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 w-full h-full top-0 right-0 left-0  py-14">
                    <Container>
                        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
                            <div className=' flex justify-center items-center'>
                                <Image
                                    src="/assets/logo.png"
                                    alt="Quem Somos"
                                    className=" object-cover rounded-lg"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className='col-span-2 px-5 md:border-l h-full flex flex-col gap-5 justify-center items-start'>
                                <h2 className="text-3xl font-bold text-white mb-4">{c.title}</h2>
                                <p className='text-lg font-semibold text-justify text-white'>{c.text}</p>
                                <Link href="/recrutamento" className='bg-transparent text-white border capitalize font-bold border-white px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                                    <p className='duration-200 group-hover:text-white'>{c.button}</p>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

        </div>
    );
};
