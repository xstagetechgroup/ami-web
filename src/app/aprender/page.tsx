'use client';
import Container from '@/components/shared/container';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"; // shadcn modal
import { videosByCategory } from '@/utils/videos';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';

const AprenderPage: React.FC = () => {

    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const categories = [
        { key: 'empreendedorismo', label: 'Empreendedorismo' },
        { key: 'motivacao', label: 'Motivação' },
        /* { key: 'oportunidades', label: 'Oportunidades de emprego' }, */
    ] as const;

    const handleToggleCategory = (key: string) => {
        if (expandedCategory === key) {
            setExpandedCategory(null); // voltar ao normal
        } else {
            setExpandedCategory(key); // mostrar apenas essa categoria
        }
    };

    return (
        <div className='w-full'>

            {/* HERO */}
            <div className="w-full h-[350px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
                <h1 className="text-4xl font-bold">Área de Aprendizado</h1>
                <div className="flex items-center justify-center gap-2">
                    <Link className="hover:underline duration-300" href={"/"}>
                        Home
                    </Link>
                    <p>-</p>
                    <p>Aprendizado</p>
                </div>
            </div>

            <Container>
                <section className="w-full py-10 space-y-12">
                    {/* Loop de categorias */}
                    {categories.map(cat => {
                        const videos = videosByCategory[cat.key];
                        const isExpanded = expandedCategory === cat.key;

                        // se uma categoria está expandida, as outras somem
                        if (expandedCategory && !isExpanded) return null;

                        return (
                            <div key={cat.key} className="space-y-4">
                                {/* Cabeçalho categoria */}
                                <div className="flex items-center justify-start gap-1 flex-wrap md:flex-nowrap">
                                    <h2 className="text-lg font-bold uppercase">{cat.label} -</h2>
                                    <button
                                        onClick={() => handleToggleCategory(cat.key)}
                                        className="text-primaryColor hover:underline text-lg font-semibold "
                                    >
                                        {isExpanded ? 'Voltar' : 'Ver todos'}
                                    </button>
                                </div>

                                {/* Lista de vídeos */}
                                {!isExpanded ? (
                                    // Slide horizontal
                                    <Swiper
                                        spaceBetween={16}
                                        slidesPerView={1.2}
                                        breakpoints={{
                                            640: { slidesPerView: 2.2 },
                                            1024: { slidesPerView: 4.2 }
                                        }}
                                    >
                                        {videos.map(video => (
                                            <SwiperSlide key={video.id}>
                                                <div
                                                    className="bg-white m-2 cursor-pointer rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                                                    onClick={() => setSelectedVideo(video.id)}
                                                >
                                                    <div className="relative h-40 w-full overflow-hidden">
                                                        <Image
                                                            width={500}
                                                            height={300}
                                                            src={video.thumbnail}
                                                            alt={video.title}
                                                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                                        />
                                                        {/* Ícone Play */}
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <Play className="w-10 h-10 text-white drop-shadow-lg bg-black/40 rounded-full p-2" />
                                                        </div>
                                                    </div>
                                                    <div className="p-2 font-medium text-sm">{video.title}</div>
                                                    <div className="p-2 font-normal text-sm">{video.description}</div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {videos.map(video => (
                                            <motion.div
                                                key={video.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                                                onClick={() => setSelectedVideo(video.id)}
                                            >
                                                <div className="relative bg-white cursor-pointer rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
                                                    <Image
                                                        width={500}
                                                        height={300}
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                                    />
                                                    {/* Ícone Play */}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Play className="w-10 h-10 text-white drop-shadow-lg bg-black/40 rounded-full p-2" />
                                                    </div>
                                                </div>
                                                <div className="p-2 font-medium text-sm">{video.title}</div>
                                                <div className="p-2 font-normal text-sm">{video.description}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Modal com animação */}
                    <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
                        <DialogTitle></DialogTitle>
                        <AnimatePresence>
                            {selectedVideo && (
                                <DialogContent className="w-full lg:w-[80%] h-auto lg:h-[80%] aspect-video p-0 bg-transparent shadow-none">
                                    <motion.div
                                        key={selectedVideo}
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full overflow-hidden rounded-xl shadow-xl"
                                    >
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${selectedVideo}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </motion.div>
                                </DialogContent>
                            )}
                        </AnimatePresence>
                    </Dialog>
                </section>
            </Container>
        </div>
    );
}

export default AprenderPage;