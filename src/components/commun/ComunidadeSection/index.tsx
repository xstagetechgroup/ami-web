import { FC } from "react";
import { Users, Flag, Clock, User } from "lucide-react";
import Container from "@/components/shared/container";
import Image from "next/image";

const ComunidadeSection: FC = () => {
    return (
        <div
            className="w-full "

        >
            <Container>
                <section className="relative w-full bg-white py-12 flex flex-col md:gap-5 md:flex-row items-start justify-between">


                    {/* Conteúdo lado esquerdo */}
                    <div className="flex-1 max-w-lg bg-cover bg-center rounded-xl">
                        <div className="bg-white md:shadow-md rounded-lg md:px-6 py-3 w-full mb-6 inline-block">
                            <h2 className="text-primaryColor font-extrabold text-3xl">COMUNIDADE</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We believe in produce. Tasty produce. Produce like:
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
                            Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus.
                            Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli.
                            Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro.
                            Parsley. Dill.
                        </p>
                    </div>

                    {/* Conteúdo lado direito */}
                    <div className="flex-1 w-full py-5 md:py-0 relative flex items-center justify-center">
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
                                <p className="text-gray-600 text-base font-medium">Número de pessoas impactadas</p>
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
                                <h3 className="text-3xl font-bold text-primaryColor">03</h3>
                                <p className="text-gray-600 text-base font-medium">Países impactados</p>
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
                                <h3 className="text-3xl font-bold text-primaryColor">06Hrs</h3>
                                <p className="text-gray-600 text-base font-medium">Horas de actividade</p>
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
                                <h3 className="text-3xl font-bold text-primaryColor">16</h3>
                                <p className="text-gray-600 text-base font-medium">Tamanho da equipa</p>
                            </div>
                        </div>
                    </div>
                </section >
            </Container>
        </div>

    );
};

export default ComunidadeSection;
