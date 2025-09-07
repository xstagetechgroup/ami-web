import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

export default function WhoWeAre() {
    return (
        <div className="w-full flex flex-col items-center justify-center">

            <div className="relative w-full h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/assets/who-we-are.jpg')" }}>

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 w-full h-full top-0 right-0 left-0">
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
                            <div className='col-span-2 px-5 border-l h-full flex flex-col gap-5 justify-center items-start'>
                                <h2 className="text-3xl font-bold text-white mb-4">Faça parte da equipe</h2>
                                <p className='text-lg font-semibold text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, saepe harum. Odio aspernatur omnis veritatis numquam suscipit ea quae totam, aliquid fuga? Est veritatis id nobis voluptates. Debitis, recusandae magni.</p>
                                <Button className='bg-transparent text-white border-2 capitalize font-bold border-white px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                                    <p className='duration-200 group-hover:text-white'>Ver Mais</p>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

        </div>
    );
};

WhoWeAre;
