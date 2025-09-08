// components/Galeria.tsx
"use client";

import Image from "next/image";

const imagesRow1 = [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpg",
    "/assets/gallery/3.jpg",
    "/assets/gallery/4.jpg",
    "/assets/gallery/5.jpg",
    "/assets/gallery/6.jpg",
    "/assets/gallery/7.jpg",
    "/assets/gallery/8.jpg",
    "/assets/gallery/9.jpg",
    "/assets/gallery/10.jpg",
];

const imagesRow2 = [
    "/assets/gallery/11.jpg",
    "/assets/gallery/12.jpg",
    "/assets/gallery/13.jpg",
    "/assets/gallery/14.jpg",
    "/assets/gallery/15.jpg",
    "/assets/gallery/16.jpg",
    "/assets/gallery/17.jpg",
    "/assets/gallery/18.jpg",
    "/assets/gallery/19.jpg",
    "/assets/gallery/20.jpg",
];

export default function GallerySection() {
    return (
        <section className="bg-white py-10 overflow-hidden" id="gallery">
            <div className="w-full flex relative flex-col md:flex-row">
                {/* Barra lateral */}
                <div className="hidden md:flex flex-col items-center justify-center bg-primaryColor text-white px-10 py-10 rounded-r-lg relative">
                    {/* Texto vertical */}
                    <div className="p-5 absolute w-full h-full flex items-center justify-center z-10">
                        <Image
                            src="/assets/logo-horizontal-white-rtl.png"
                            alt="Logo"
                            width={250}
                            height={250}
                            className="w-full h-[200px] object-contain"
                        />
                    </div>

                    {/* Logo círculo */}
                    <div className="absolute bottom-6 w-14 h-14 flex items-center justify-center">
                        <Image
                            src="/assets/favicon.png"
                            alt="Logo"
                            width={56}
                            height={56}
                        />
                    </div>
                </div>

                {/* Conteúdo da galeria */}
                <div className="flex-1 px-4 md:px-10">
                    {/* Título */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 md:mb-10 md:absolute md:top-5 md:left-10">
                        <div className="bg-white md:shadow-md text-primaryColor py-3 md:px-6 font-extrabold text-3xl rounded-lg">
                            GALERIA
                        </div>
                        <p className="text-sm font-medium md:text-lg text-gray-800 max-w-xl">
                            Todos os momentos são importantes para nós, vem fazer parte desta
                            história também.
                        </p>
                    </div>

                    {/* Linha 1 - esquerda para direita */}
                    <div className="overflow-hidden pt-20 md:pt-28">
                        <div className="flex animate-marquee space-x-4 md:space-x-6">
                            {[...imagesRow1, ...imagesRow1].map((src, i) => (
                                <Image
                                    key={i}
                                    src={src}
                                    alt={`galeria-${i}`}
                                    width={250}
                                    height={200}
                                    className="rounded-lg shadow-md object-cover 
                    w-[160px] h-[120px] 
                    sm:w-[200px] sm:h-[150px] 
                    md:w-[250px] md:h-[200px]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Linha 2 - direita para esquerda */}
                    <div className="overflow-hidden mt-6 md:mt-8 pb-6 md:pb-10">
                        <div className="flex animate-marquee-reverse space-x-4 md:space-x-6">
                            {[...imagesRow2, ...imagesRow2].map((src, i) => (
                                <Image
                                    key={i}
                                    src={src}
                                    alt={`galeria-${i}`}
                                    width={250}
                                    height={200}
                                    className="rounded-lg shadow-md object-cover 
                    w-[160px] h-[120px] 
                    sm:w-[200px] sm:h-[150px] 
                    md:w-[250px] md:h-[200px]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
