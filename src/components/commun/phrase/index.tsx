import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

// import { Container } from './styles';

export default function PhraseComponent() {
  return(
    <div className='w-full py-5'>
        <Container>
            <div data-aos="zoom-in" className='w-full flex justify-center items-center'>
                <Image
                    src={'/assets/frase-completa.png'}
                    alt='Association Image'
                    width={800}
                    height={800}
                    className='w-[85%] md:w-[60%] object-cover object-center rounded-br-[100px]'
                />
            </div>
        </Container>
    </div>
  )
}
