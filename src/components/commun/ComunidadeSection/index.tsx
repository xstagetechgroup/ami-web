import { FC } from "react";
import { Users, Flag, Clock, User } from "lucide-react";
import Container from "@/components/shared/container";

const ComunidadeSection: FC = () => {
    return (
        <div
            className="w-full h-[120vh] "
            style={{ backgroundImage: "url('/assets/ret.png')", backgroundSize: 'content', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}
        >
            <Container>
                <section className="relative w-full bg-white py-12 px-6 flex flex-col md:flex-row items-center justify-between">


                    {/* Conteúdo lado esquerdo */}
                    <div
                        className="flex-1 max-w-lg p-6 bg-cover bg-center rounded-xl"
                    >
                        <div className="bg-white shadow-md rounded-lg px-6 py-3 w-full mb-6 inline-block">
                            <h2 className="text-primaryColor font-bold text-xl">COMUNIDADE</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We believe in produce. Tasty produce. Produce like:
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
                            Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus.
                            Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli.
                            Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro.
                            Parsley. Dill.
                        </p>
                    </div>

                    {/* Conteúdo lado direito */}
                    <div className="flex-1 max-w-lg relative flex items-center justify-center">
                        {/* Fundo rosa em cruz */}
                        <div className="absolute w-40 h-40 bg-primaryColor rounded-lg z-0"></div>

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {/* Card 1 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <Users className="mx-auto mb-2 text-primaryColor" />
                                <h3 className="text-2xl font-bold text-primaryColor">5200</h3>
                                <p className="text-gray-600 text-sm">Número de pessoas impactadas</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <Flag className="mx-auto mb-2 text-primaryColor" />
                                <h3 className="text-2xl font-bold text-primaryColor">03</h3>
                                <p className="text-gray-600 text-sm">Países impactados</p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <Clock className="mx-auto mb-2 text-primaryColor" />
                                <h3 className="text-2xl font-bold text-primaryColor">06Hrs</h3>
                                <p className="text-gray-600 text-sm">Horas de actividade</p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                                <User className="mx-auto mb-2 text-primaryColor" />
                                <h3 className="text-2xl font-bold text-primaryColor">16</h3>
                                <p className="text-gray-600 text-sm">Tamanho da equipa</p>
                            </div>
                        </div>
                    </div>
                </section >
            </Container>
        </div>

    );
};

export default ComunidadeSection;
