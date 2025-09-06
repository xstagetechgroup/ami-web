import Container from "@/components/shared/container";
import Image from "next/image";
import { Play } from "lucide-react";

export default function AssociactionSection() {
    return (

        <div className="w-full">
            <Container>
                <section className="relative flex flex-col md:flex-row  border-gray-300 items-center md:items-start gap-8 px-0 py-12">
                    {/* Texto */}
                    <div className="flex-1 text-justify">
                        <h2 className="text-primaryColor font-extrabold text-3xl mb-4 uppercase">
                            A Associação
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We believe in produce. Tasty produce. Produce like:
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
                            Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
                            Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli.
                            Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries.
                            Raspberries. Cilantro. Parsley. Dill.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            What are we forgetting?
                            <br />
                            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, "rocket!").
                            Persian cucumbers, in addition to aforementioned “normal” cucumbers.
                            Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
                            pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit.
                            Fruit of the Loom. Fruits of our labor (this website). Sorrel.
                            Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom
                            tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear,
                            we’re vendors of organic produce, but if you asked us to describe what
                            escaroles are...
                        </p>
                    </div>

                    {/* Vídeo */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                            <Image src={'/assets/gallery/9.jpg'} alt='Association Image' width={500} height={1000} className='object-cover object-center w-[500px] h-[400px] rounded-lg mt-4' />
                            {/* Overlay com botão play */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <button className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-primaryColor shadow-lg hover:scale-105 transition animate-zoom-in-out">
                                    <Play size={32} fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>

    );
}
