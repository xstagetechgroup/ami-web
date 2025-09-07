import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function EquipeSection() {
    return (
        <section className="bg-white">


            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

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
                    <div className=" flex flex-col justify-center gap-5">
                        {/* Box com título sobreposto */}
                        <h2 className="text-primaryColor font-extrabold text-3xl uppercase">
                            Faça Parte da Equipe
                        </h2>
                        <div className="">
                            <p className="text-gray-700 text-justify">
                                We believe in produce. Tasty produce. Produce like:
                            </p>

                            <p className="text-gray-700 text-justify">
                                Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.</p>

                            {/* Botão */}
                            <Button className='bg-white mt-5 text-primaryColor border-2 capitalize font-bold border-primaryColor px-7 py-2 rounded-sm hover:bg-primaryColor group duration-200'>
                                <Phone className='w-4 h-4 duration-200 group-hover:text-white' />
                                <p className='duration-200 group-hover:text-white'>Fale Connosco</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>

        </section>

    );
}
