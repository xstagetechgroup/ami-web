'use client';
import { FC } from "react";
import Container from "@/components/shared/container";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const ComunidadeSection: FC = () => {

    const { t } = useTranslation();
    const c = t.community; // atalho

    return (
        <div
            className="w-full "

        >
            <Container>
                <section className="relative w-full bg-white py-12 flex flex-col md:gap-5 md:flex-row items-start justify-between">


                    {/* Conteúdo lado esquerdo */}
                    <div data-aos="fade-right" className="flex-1 max-w-lg bg-cover bg-center rounded-xl">
                        <div className="bg-white w-full mb-6 inline-block">
                            <h2 className="text-primaryColor font-extrabold text-3xl">{c.title}</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {c.paragraph}
                        </p>
                    </div>

                    {/* Conteúdo lado direito */}
                    <div data-aos="fade-left" data-aos-delay="300" className="flex-1 w-full py-5 md:py-0 relative flex items-center justify-center">
                        {/* Fundo rosa em cruz */}
                        <div className="absolute w-40 h-40 bg-primaryColor rounded-full z-0"></div>

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {/* Card 1 */}
                            <div className="bg-white shadow-md rounded-md p-6 text-center">
                                <div className="w-full flex justify-center items-center">
                                    <Image
                                        src={'/assets/icons/people.png'}
                                        alt='Association Image'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryColor">+200K</h3>
                                <p className="text-gray-600 text-base font-medium">{c.stats.people}</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <div className="w-full flex justify-center items-center">
                                    <Image
                                        src={'/assets/icons/flag.png'}
                                        alt='Association Image'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryColor">01</h3>
                                <p className="text-gray-600 text-base font-medium">{c.stats.country}</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <div className="w-full flex justify-center items-center">
                                    <Image
                                        src={'/assets/icons/time.png'}
                                        alt='Association Image'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryColor">10</h3>
                                <p className="text-gray-600 text-base font-medium">{c.stats.years}</p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <div className="w-full flex justify-center items-center">
                                    <Image
                                        src={'/assets/icons/team.png'}
                                        alt='Association Image'
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-primaryColor">13</h3>
                                <p className="text-gray-600 text-base font-medium">{c.stats.team}</p>
                            </div>
                        </div>
                    </div>
                </section >
            </Container>
        </div>

    );
};

export default ComunidadeSection;
