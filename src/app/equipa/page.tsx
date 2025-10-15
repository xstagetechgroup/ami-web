import Container from '@/components/shared/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function EquipaPage() {
    return (
        <div className='w-full'>
            {/* HERO */}
            <div className="w-full h-[250px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
                <h1 className="text-4xl font-bold">A NOSSA EQUIPA</h1>
                <div className="flex items-center justify-center gap-2">
                    <Link className="hover:underline duration-300" href={"/"}>
                        HOME
                    </Link>
                    <p>-</p>
                    <p>EQUIPA</p>
                </div>
            </div>
            <Container>
                <div className='w-full flex flex-col gap-10 py-10'>
                    <h2 className='italic text-lg md:text-xl text-center'>Estrutura Organizacional</h2>
                    <div className='w-full flex gap-10 items-center justify-center flex-wrap md:flex-nowrap'>
                        <div className='w-[350px] h-[400px] rounded-tl-3xl rounded-br-3xl relative'>
                            <Image
                                className='w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl object-cover object-center shadow-lg'
                                src="/assets/team/president.jpg"
                                alt="Estrutura Organizacional"
                                width={500}
                                height={500}
                            />
                            <div className='absolute z-20 p-2 flex flex-col gap-2 bottom-0 left-0 w-full bg-white/90 rounded-br-3xl shadow-white/50 backdrop-blur-md'>
                                <Link href={"https://www.linkedin.com/in/iracelma-almeida-a7a74816b/"} target="_blank">
                                    <FaLinkedinIn className='text-xl' />
                                </Link>
                                <div>
                                    <p className='text-lg font-medium'>Iracelma Almeida</p>
                                    <p className='italic'>Presidente</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[350px] h-[400px] rounded-tl-3xl rounded-br-3xl relative'>
                            <Image
                                className='w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl object-cover object-center shadow-lg'
                                src="/assets/team/vice-president.jpg"
                                alt="Estrutura Organizacional"
                                width={500}
                                height={500}
                            />
                            <div className='absolute z-20 p-2 flex flex-col gap-2 bottom-0 left-0 w-full bg-white/90 rounded-br-3xl shadow-white/50 backdrop-blur-md'>
                                <Link href={"https://www.linkedin.com/in/octavia-pena/"} target="_blank">
                                    <FaLinkedinIn className='text-xl' />
                                </Link>
                                <div>
                                    <p className='text-lg font-medium'>Octavia Pena</p>
                                    <p className='italic'>Vice-Presidente</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-10 items-center justify-center flex-wrap md:flex-nowrap'>
                        <div className='w-[350px] h-[400px] rounded-tl-3xl rounded-br-3xl relative'>
                            <Image
                                className='w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl object-cover object-center shadow-lg'
                                src="/assets/team/secretary.jpg"
                                alt="Estrutura Organizacional"
                                width={500}
                                height={500}
                            />
                            <div className='absolute z-20 p-2 flex flex-col gap-2 bottom-0 left-0 w-full bg-white/90 rounded-br-3xl shadow-white/50 backdrop-blur-md'>
                                <Link href={"https://www.instagram.com/anethmariamakeup/"} target="_blank">
                                    <FaInstagram className='text-xl' />
                                </Link>
                                <div>
                                    <p className='text-lg font-medium'>Aneth Maria</p>
                                    <p className='italic'>Secretária</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[350px] h-[400px] rounded-tl-3xl rounded-br-3xl relative'>
                            <Image
                                className='w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl object-cover object-center shadow-lg'
                                src="/assets/team/vogal2.jpg"
                                alt="Estrutura Organizacional"
                                width={500}
                                height={500}
                            />
                            <div className='absolute z-20 p-2 flex flex-col gap-2 bottom-0 left-0 w-full bg-white/90 rounded-br-3xl shadow-white/50 backdrop-blur-md'>
                                <Link href={"https://www.instagram.com/_zuleicawilson_/"} target="_blank">
                                    <FaInstagram className='text-xl' />
                                </Link>
                                <div>
                                    <p className='text-lg font-medium'>Zuleica Wilson</p>
                                    <p className='italic'>Vogal</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[350px] h-[400px] rounded-tl-3xl rounded-br-3xl relative'>
                            <Image
                                className='w-full h-full absolute z-10 rounded-tl-3xl rounded-br-3xl object-cover object-center shadow-lg'
                                src="/assets/team/vogal1.jpg"
                                alt="Estrutura Organizacional"
                                width={500}
                                height={500}
                            />
                            <div className='absolute z-20 p-2 flex flex-col gap-2 bottom-0 left-0 w-full bg-white/90 rounded-br-3xl shadow-white/50 backdrop-blur-md'>
                                
                                <div>
                                    <p className='text-lg font-medium'>Lorena Duarte</p>
                                    <p className='italic'>Vogal e Porta-Voz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
