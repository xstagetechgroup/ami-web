import Container from '@/components/shared/container';
import Image from 'next/image';

const BASE = 'https://ami-ml.vercel.app';
const DEFAULT_IMAGE = '/assets/events/levanta.png';

export default async function EventSection() {
    let src = DEFAULT_IMAGE;
    let alt = 'Event Image';

    try {
        const res = await fetch(`${BASE}/api/public/events`, { next: { revalidate: 60 } });
        if (res.ok) {
            const data = await res.json();
            const last = data.events?.[0];
            if (last) {
                const raw = last.imageUrl ?? null;
                src = raw ? (raw.startsWith('/') ? `${BASE}${raw}` : raw) : DEFAULT_IMAGE;
                alt = last.title ?? alt;
            }
        }
    } catch {}

    return (
        <div id='eventos' className='w-full my-10'>
            <Container>
                <div className='w-full flex justify-center items-center'>
                    <Image
                        src={src}
                        width={1000}
                        height={1000}
                        alt={alt}
                        className='w-full h-full object-cover object-center rounded-lg shadow-md'
                    />
                </div>
            </Container>
        </div>
    );
}
