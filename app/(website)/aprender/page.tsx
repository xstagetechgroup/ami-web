'use client';
import Container from '@/components/shared/container';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  description: string | null;
  videoUrl: string;
  thumbnailUrl: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  color: string | null;
  videos: Video[];
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/)
  return match?.[1] ?? null
}

function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
}

const AprenderPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    fetch('/api/public/videos')
      .then((r) => r.json())
      .then((data) => setCategories(data.categories ?? []))
      .finally(() => setLoading(false));
  }, []);

  const handleToggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  const getEmbedUrl = (video: Video): string | null => {
    const ytId = getYouTubeId(video.videoUrl)
    if (ytId) return `https://www.youtube.com/embed/${ytId}`
    return null
  }

  const getThumbnail = (video: Video): string => {
    if (video.thumbnailUrl) return video.thumbnailUrl
    return getYouTubeThumbnail(video.videoUrl) ?? '/assets/videos/placeholder.jpg'
  }

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

          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-blue-950 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && categories.length === 0 && (
            <p className="text-center text-slate-500 py-20">Nenhum vídeo disponível de momento.</p>
          )}

          {categories.map(cat => {
            const isExpanded = expandedCategory === cat.slug;
            if (expandedCategory && !isExpanded) return null;

            return (
              <div key={cat.id} className="space-y-4">
                {/* Cabeçalho categoria */}
                <div className="flex items-center justify-start gap-1 flex-wrap md:flex-nowrap">
                  <h2 className="text-lg font-bold uppercase">{cat.name} -</h2>
                  <button
                    onClick={() => handleToggleCategory(cat.slug)}
                    className="text-primaryColor hover:underline text-lg font-semibold"
                  >
                    {isExpanded ? 'Voltar' : 'Ver todos'}
                  </button>
                </div>

                {/* Lista de vídeos */}
                {!isExpanded ? (
                  <Swiper
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                      640: { slidesPerView: 2.2 },
                      1024: { slidesPerView: 4.2 }
                    }}
                  >
                    {cat.videos.map(video => (
                      <SwiperSlide key={video.id}>
                        <div
                          className="bg-white m-2 cursor-pointer rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                          onClick={() => setSelectedVideo(video)}
                        >
                          <div className="relative h-40 w-full overflow-hidden">
                            <Image
                              width={500}
                              height={300}
                              src={getThumbnail(video)}
                              alt={video.title}
                              className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="w-10 h-10 text-white drop-shadow-lg bg-black/40 rounded-full p-2" />
                            </div>
                          </div>
                          <div className="p-2 font-medium text-sm">{video.title}</div>
                          {video.description && <div className="p-2 font-normal text-sm text-slate-500">{video.description}</div>}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cat.videos.map(video => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <div className="relative bg-white cursor-pointer rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
                          <Image
                            width={500}
                            height={300}
                            src={getThumbnail(video)}
                            alt={video.title}
                            className="w-full h-full object-cover hover:scale-105 transition duration-300"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-10 h-10 text-white drop-shadow-lg bg-black/40 rounded-full p-2" />
                          </div>
                        </div>
                        <div className="p-2 font-medium text-sm">{video.title}</div>
                        {video.description && <div className="p-2 font-normal text-sm text-slate-500">{video.description}</div>}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Modal */}
          <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
            <DialogTitle></DialogTitle>
            <AnimatePresence>
              {selectedVideo && (
                <DialogContent className="w-full lg:w-[80%] h-auto lg:h-[80%] aspect-video p-0 bg-transparent shadow-none">
                  <motion.div
                    key={selectedVideo.id}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full overflow-hidden rounded-xl shadow-xl"
                  >
                    {getEmbedUrl(selectedVideo) ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={getEmbedUrl(selectedVideo)!}
                        title={selectedVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={selectedVideo.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full bg-black"
                      />
                    )}
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
