'use client';
import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import { useTranslation } from '@/hooks/useTranslation';

// import { Container } from './styles';

const ProjectsSection: React.FC = () => {
    
        const { t } = useTranslation();
        const c = t.projects; // atalho

    return (
        <div className='w-full pb-10' id='projects'>
            <Container>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div data-aos="fade-right" className='flex flex-col justify-center items-center'>
                        <Image src={'/assets/projects.jpg'} alt='Project Image' width={500} height={1000} className='object-cover object-center w-[500px] h-[600px] rounded-lg' />

                    </div>

                    <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-4 justify-start'>
                        <h1 className='text-primaryColor uppercase text-start font-extrabold text-3xl'>{c.title}</h1>
                        <p>{c.text}</p>
                        <div className='w-full pt-5 pl-2 flex flex-col gap-2 items-start justify-start text-justify text-gray-800'>
                            <p>- {c.bullet1}</p>
                            <p>- {c.bullet2}</p>
                            <p>- {c.bullet3}</p>
                            <p>- {c.bullet4}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProjectsSection;