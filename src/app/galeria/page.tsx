'use client'
import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/container';
import { galeriaMediaItems } from '@/utils/galeria';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
    id: number;
    title: string;
};

const GaleriaPage: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const { t } = useTranslation();
    const translatedTitles = t.gallery; // vem do JSON en/fr

    // Faz merge dos dados fixos com os títulos traduzidos
    const items = galeriaMediaItems.map((item) => ({
        ...item,
        title: translatedTitles.find((g: Props) => g.id === item.id)?.title || ""
    }));

    const closeModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setSelectedVideo(null);
        setSelectedImage(null);
    };

    return (
        <div>
            {/* HERO */}
            <div className="w-full h-[350px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
                <h1 className="text-4xl font-bold">{t.galleryPage.title}</h1>
                <div className="flex items-center justify-center gap-2">
                    <Link className="hover:underline duration-300" href={"/"}>
                        {t.galleryPage.breadcrumbHome}
                    </Link>
                    <p>-</p>
                    <p>{t.galleryPage.breadcrumbGallery}</p>
                </div>
            </div>

            <Container>
                <div className="w-full py-10">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-full break-inside-avoid overflow-hidden rounded-sm group cursor-pointer"
                                onClick={() => {
                                    if (item.type === 'video' && item.video) {
                                        setSelectedVideo(item.video);
                                    } else if (item.type === 'photo') {
                                        setSelectedImage(item.image);
                                    }
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {item.type === 'video' && (
                                    <div className="absolute top-3 left-3 bg-transparent border-2 border-white p-2 rounded-full">
                                        <Play className="text-white w-5 h-5" />
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3">
                                    <h3 className="text-white text-sm font-semibold">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal Vídeo */}
                    <AnimatePresence>
                        {selectedVideo && (
                            <motion.div
                                key="videoModal"
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeModal}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-black rounded-sm max-w-4xl w-full overflow-hidden relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute border-2 border-white rounded-full w-10 h-10 flex justify-center items-center z-20 top-3 right-3 text-white text-2xl"
                                        onClick={closeModal}
                                    >
                                        ✕
                                    </button>
                                    <video ref={videoRef} src={selectedVideo} controls autoPlay className="w-full h-auto" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Modal Imagem */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                key="imageModal"
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeModal}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-sm max-w-4xl w-full overflow-hidden relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="absolute border-2 border-white rounded-full w-10 h-10 flex justify-center items-center z-20 top-3 right-3 text-white text-2xl"
                                        onClick={closeModal}
                                    >
                                        ✕
                                    </button>
                                    <Image
                                        src={selectedImage}
                                        alt={t.galleryPage.imageAlt}
                                        width={1200}
                                        height={800}
                                        className="w-full h-[80vh] object-contain bg-black/50" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </div>
    );
};

export default GaleriaPage;
