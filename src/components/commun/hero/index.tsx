'use client'
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
/* export default function HeroSection() {

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
                            <p className='font-bold text-3xl md:text-3xl text-white md:text-black'>{c.subtitle}</p>
                            <p className='text-xl md:text-xl text-white md:text-black'>É uma empreendedora e deseja aprender sobre empreededorismo, motivação e liderança.</p>
                            <div className='w-full flex justify-start'>
                                <Link href={'/aprender'}>
                                    <span className='flex gap-2 items-center border capitalize bg-white text-black font-bold border-primaryColor px-4 py-1 rounded-sm hover:bg-primaryColor group duration-200'>
                                        <p className='duration-200 group-hover:text-white'>Aprender</p>
                                        <ArrowRight className='text-black size-5' />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
} */

export default function HeroSection() {

    const { t } = useTranslation();
    const c = t.hero; // atalho

    return (
        <section className="relative h-[950px] w-full overflow-hidden">
            {/* Vídeo de fundo */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source
                        src="/assets/videos/hero.mp4" // Altere para o caminho do seu vídeo
                        type="video/mp4"
                    />
                    Seu navegador não suporta o elemento de vídeo.
                </video>

                {/* Overlay com gradient para melhor legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Conteúdo de texto */}
            <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        {/* Título */}
                        <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                            {c.title} <br /> {c.title2} <br /> {c.title3}
                        </h1>

                        {/* Subtítulo */}
                        <p className="mb-8 text-xl text-gray-200 sm:text-xl leading-relaxed">
                            {c.learn}
                        </p>

                        {/* Botão CTA */}
                        <div className='w-full flex justify-start'>
                            <Link href={'/aprender'}>
                                <span className='flex gap-2 items-center border capitalize bg-transparent text-white font-bold border-white px-5 py-3 rounded-sm hover:bg-primaryColor group duration-200'>
                                    <p className='duration-200 group-hover:text-white'>{c.learnBtn}</p>
                                    <ArrowRight className='text-white size-5' />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}