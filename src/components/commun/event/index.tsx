import Container from '@/components/shared/container';
import Image from 'next/image';
import React from 'react';

export default function EventSection() {
    return (
        <div className='w-full my-10'>
            <Container>
                <div className='w-full flex justify-center items-center'>
                    <Image
                        src='/assets/events/levanta.png'
                        width={1000}
                        height={1000}
                        alt='Event Image'
                        className='w-full h-full object-cover object-center rounded-lg shadow-md'
                    />
                </div>
            </Container>
        </div>
    )
}
