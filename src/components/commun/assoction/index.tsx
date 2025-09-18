"use client";
import { useState } from "react";
import Container from "@/components/shared/container";
import Image from "next/image";
import { Play } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "@/hooks/useTranslation";

export default function AssociactionSection() {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    // Exemplo: pode ser um link do YouTube ou caminho local
    const youtubeLink = "https://www.youtube.com/embed/t5UhljQoegI";
    /* const localVideo = ""; */ // se você tiver um vídeo local

    const { t } = useTranslation();
    const c = t.association; // atalho

    return (
        <div className="w-full py-20">
            <Container>
                <section className="relative flex flex-col md:flex-row border-gray-300 items-center md:items-start gap-8 px-0 pb-10">
                    {/* Texto */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="300"
                        className="flex-1 text-justify"
                    >
                        <h2 className="text-primaryColor font-extrabold text-3xl mb-4 uppercase">
                            {c.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {c.paragraph1}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {c.paragraph2}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            {c.paragraph3}
                        </p>
                    </div>

                    {/* Vídeo */}
                    <div
                        data-aos="fade-left"
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={"/assets/gallery/9.jpg"}
                                alt="Association Image"
                                width={500}
                                height={1000}
                                className="object-cover object-center w-[500px] h-[400px] rounded-lg mt-4"
                            />

                            {/* Overlay com botão play */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button
                                            onClick={() => setVideoUrl(youtubeLink)} // ou localVideo
                                            className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-primaryColor shadow-lg hover:scale-105 transition animate-zoom-in-out"
                                        >
                                            <Play size={32} fill="currentColor" />
                                        </button>
                                    </DialogTrigger>

                                    <DialogOverlay className="bg-black/70 fixed inset-0" />



                                    <DialogHeader>
                                        <DialogTitle></DialogTitle>
                                        <DialogDescription>
                                            <DialogContent className="w-full flex justify-center items-center p-0 bg-transparent border-0 shadow-none">
                                                {videoUrl?.includes("youtube") ? (
                                                    <iframe
                                                        className="w-[700px] h-[500px] rounded-lg"
                                                        src={videoUrl}
                                                        title="A Associação"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                ) : (
                                                    <video
                                                        src={videoUrl || ""}
                                                        controls
                                                        autoPlay
                                                        className="w-full h-[500px] rounded-lg"
                                                    />
                                                )}
                                            </DialogContent>
                                        </DialogDescription>
                                    </DialogHeader>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}
