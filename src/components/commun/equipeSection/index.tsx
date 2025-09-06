import { Button } from "@/components/ui/button";
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
                <div className="p-3 pr-0 md:pr-72 relative">
                    {/* Box com título sobreposto */}
                    <div className="md:absolute md:-top-20 md:-left-32 bg-white px-4 md:px-6 pb-6 md:py-3 z-10 rounded-md md:shadow-md">
                        <h2 className="text-primaryColor font-extrabold text-3xl uppercase">
                            Faça Parte da Equipe
                        </h2>
                    </div>
                    <div className="px-4">
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
                        <Button className='bg-white mt-5 text-primaryColor border-2 capitalize font-bold border-primaryColor px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                            <Phone className='w-4 h-4 duration-200 group-hover:text-white' />
                            <p className='duration-200 group-hover:text-white'>Fale Connosco</p>
                        </Button>
                    </div>
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
