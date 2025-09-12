import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';

// import { Container } from './styles';

const ProjectsSection: React.FC = () => {
    return (
        <div className='w-full pb-10' id='projects'>
            <Container>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div data-aos="fade-right" className='flex flex-col justify-center items-center'>
                        <Image src={'/assets/projects.jpg'} alt='Project Image' width={500} height={1000} className='object-cover object-center w-[500px] h-[600px] rounded-lg' />

                    </div>

                    <div data-aos="fade-left" data-aos-delay="300" className='flex flex-col gap-4 justify-start'>
                        <h1 className='text-primaryColor uppercase text-start font-extrabold text-3xl'>O que fazemos</h1>
                        <p>A AMI dedica-se a instruir e capacitar mulheres, unindo formação prática e trabalho emocional profundo.</p>
                        <div className='w-full pt-5 pl-2 flex flex-col gap-2 items-start justify-start text-justify text-gray-800'>
                            <p>- Promovemos resiliência emocional, para transformar dor em força.</p>
                            <p>- Reforçamos valores e cidadania, despertando consciência social.</p>
                            <p>- Atuamos em contextos vulneráveis, oferecendo ferramentas práticas, emocionais e sociais para uma vida com propósito.</p>
                            <p>- Cada ação da AMI é pensada para ser um catalisador de mudança, transformando fragilidade em força e desafios em novas oportunidades.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProjectsSection;