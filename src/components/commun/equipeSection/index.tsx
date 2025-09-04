import { Phone } from "lucide-react";
import Image from "next/image";

export default function EquipeSection() {
    return (
        <section className="relative px-[-40px] bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Imagem */}
                <div className="relative  overflow-hidden -ml-2">
                    <Image
                        src={'/assets/gallery/14.jpg'}
                        alt='Association Image'
                        width={500}
                        height={1000}
                        className='object-cover w-full h-full object-center rounded-br-[100px]'
                    />


                </div>

                {/* Texto */}
                <div className=" pr-72 relative">
                    {/* Box com título sobreposto */}
                    <div className="absolute -top-20 -left-32 bg-white px-6 py-3 z-50 rounded-md">
                        <h2 className="text-pink-600 font-extrabold text-lg lg:text-xl uppercase">
                            Faça Parte da Equipe
                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        We believe in produce. Tasty produce. Produce like:
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
                        Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
                        Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli.
                        Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries.
                        Raspberries. Cilantro. Parsley. Dill.
                    </p>

                    {/* Botão */}
                    <button className="inline-flex items-center gap-2 bg-white text-pink-600 font-semibold shadow-md rounded-full px-5 py-2 border border-pink-200 hover:bg-pink-50 transition">
                        <Phone className="w-4 h-4" />
                        Fale Connosco
                    </button>
                </div>
            </div>

            {/* Pontinhos decorativos */}
            <div className="absolute top-4 right-10 flex flex-wrap gap-1 w-16">
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="w-1 h-1 rounded-full bg-pink-200" />
                ))}
            </div>
        </section>
    );
}
