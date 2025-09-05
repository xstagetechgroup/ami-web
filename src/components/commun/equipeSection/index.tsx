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
                    <div className="md:absolute md:-top-20 md:-left-32 bg-white px-4 md:px-6 pb-6 md:py-3 z-50 rounded-md">
                        <h2 className="text-primaryColor font-extrabold text-lg lg:text-xl uppercase">
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
                        <button className="inline-flex items-center gap-2 mt-5 bg-white primaryColor font-semibold shadow-md rounded-full px-5 py-3 border border-pink-200 hover:bg-pink-50 transition">
                            <Phone className="w-4 h-4" />
                            Fale Connosco
                        </button>
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



function QuoteCard() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative group">
                {/* Glow effect externo */}
                <div className="absolute -inset-4  rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div>

                {/* Imagem de fundo */}
                <div className="relative overflow-hidden rounded-br-[100px]">
                    <Image
                        src={'/assets/rec.png'}
                        alt='Association Image'
                        width={500}
                        height={1000}
                        className='object-cover w-[800px] object-center rounded-br-[100px]'
                    />

                    {/* Overlay gradiente para melhor legibilidade do texto */}
                    <div className="absolute inset-0  rounded-br-[100px]"></div>

                    {/* Múltiplas camadas de brilho e textura */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-br-[100px]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>

                    {/* Padrão sutil de ruído/textura */}
                    <div className={`absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`}></div>

                    {/* Aspas gigantes com efeito glassmorphism */}
                    <div className="absolute -top-4 -left-2 select-none">
                        <div className="text-[12rem] font-serif leading-none text-white/30 drop-shadow-lg">
                            "
                        </div>
                        <div className="absolute inset-0 text-[12rem] font-serif leading-none text-white/10 blur-sm">
                            "
                        </div>
                    </div>

                    {/* Aspas menores no final (fechamento) */}
                    <div className="absolute bottom-20 right-24 rotate-180 select-none">
                        <div className="text-6xl font-serif leading-none text-white/20 drop-shadow-lg">
                            "
                        </div>
                    </div>

                    {/* Conteúdo principal sobreposto */}
                    <div className="absolute inset-0 flex flex-col justify-center p-16">
                        <div className="relative z-10 pl-4">
                            <h1 className="text-white text-5xl md:text-3xl font-black leading-[1.1] mb-12 tracking-tight drop-shadow-2xl">
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300">Transformar</span>
                                {' '}
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-100">o</span>
                                {' '}
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-200">mundo</span>
                                {' '}
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-300">começa</span>
                                <br />
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-400">por</span>
                                {' '}
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-500 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">instruir</span>
                                {' '}
                                <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-600 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">mulheres.</span>
                            </h1>

                            {/* Linha decorativa */}
                            <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full mb-8 ml-auto"></div>

                            {/* Autor */}
                            <div className="text-right">
                                <p className="text-white/95 text-2xl font-light tracking-wide drop-shadow-lg">
                                    <span className="font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">Iracelma</span>
                                    <span className="text-white/80 ml-1">Almeida</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botão de seta com efeito avançado */}
                    <div className="absolute bottom-8 right-8 group/button">
                        <div className="relative">
                            {/* Glow do botão */}
                            <div className="absolute -inset-2 bg-white/30 rounded-full blur-lg group-hover/button:bg-white/50 transition-all duration-300"></div>

                            {/* Botão principal */}
                            <div className="relative bg-white/95 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-2xl cursor-pointer transform group-hover/button:scale-110 group-hover/button:rotate-12 transition-all duration-300 border border-white/20">
                                <svg
                                    className="w-7 h-7 text-fuchsia-500 transform group-hover/button:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>

                            {/* Efeito de ripple */}
                            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover/button:scale-150 group-hover/button:opacity-0 opacity-100 transition-all duration-700"></div>
                        </div>
                    </div>

                    {/* Partículas decorativas */}
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-500"></div>
                </div>
            </div>
        </div>
    )
}
