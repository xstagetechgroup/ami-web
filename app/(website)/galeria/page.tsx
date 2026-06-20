"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/container";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

interface GalleryItem {
  id: string;
  imageUrl: string;
  videoUrl: string | null;
  type: string;
  title_pt: string | null;
  title_en: string | null;
  title_fr: string | null;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/)
  return match?.[1] ?? null
}

const GaleriaPage: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { t, lang } = useTranslation();

  useEffect(() => {
    fetch("/api/public/gallery")
      .then((r) => r.json())
      .then((data) => setItems(data.items ?? []));
  }, []);

  const getTitle = (item: GalleryItem) => {
    if (lang === "en") return item.title_en ?? item.title_pt ?? "";
    if (lang === "fr") return item.title_fr ?? item.title_pt ?? "";
    return item.title_pt ?? "";
  };

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
                  if (item.type === "video" && item.videoUrl) {
                    setSelectedVideo(item.videoUrl);
                  } else {
                    setSelectedImage(item.imageUrl);
                  }
                }}
              >
                <Image
                  src={item.imageUrl}
                  alt={getTitle(item)}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute top-3 left-3 bg-transparent border-2 border-white p-2 rounded-full">
                    <Play className="text-white w-5 h-5" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3">
                  <h3 className="text-white text-sm font-semibold">{getTitle(item)}</h3>
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
                  <button className="absolute border-2 border-white rounded-full w-10 h-10 flex justify-center items-center z-20 top-3 right-3 text-white text-2xl" onClick={closeModal}>✕</button>
                  {getYouTubeId(selectedVideo) ? (
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}?autoplay=1`}
                        title="Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video ref={videoRef} src={selectedVideo} controls autoPlay className="w-full h-[80vh]" />
                  )}
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
                  <button className="absolute border-2 border-white rounded-full w-10 h-10 flex justify-center items-center z-20 top-3 right-3 text-white text-2xl" onClick={closeModal}>✕</button>
                  <Image
                    src={selectedImage}
                    alt={t.galleryPage.imageAlt}
                    width={1200}
                    height={800}
                    className="w-full h-[80vh] object-contain bg-black/50"
                  />
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
