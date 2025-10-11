import Image from "next/image";

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react";

export function OutRosa() {
    return (
        <div>
            <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-2">
                    Este momento foi de profundo aprendizado, inspiração e compromisso.
                    Ouvimos histórias reais que refletem a força e a fé das mulheres angolanas entre elas, o testemunho comovente de uma mulher diagnosticada há doze anos com cancro e que hoje, com brilho nos olhos...
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {["Inclusão", "Observação", "Visita"].map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm bg-pink-50 text-primaryColor rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Carrossel de Imagens Principal com Swiper */}
                <div className="w-full mb-8 relative">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        loop={true}
                        className="w-full rounded-xl shadow-lg"
                    >
                        {[
                            "/assets/news/out-rosa/2.jpg",
                            "/assets/news/out-rosa/3.jpg",
                            "/assets/news/out-rosa/4.jpg",
                            "/assets/news/out-rosa/5.jpg",
                            "/assets/news/out-rosa/6.jpg",
                            "/assets/news/out-rosa/7.jpg",
                            "/assets/news/out-rosa/8.jpg",
                        ].map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-96 md:h-[700px]">
                                    <Image
                                        src={image}
                                        alt={`Outubro Rosa`}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === 0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Botões de navegação customizados */}
                    <div className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200">
                        <ArrowLeft className="size-5 text-primaryColor" />
                    </div>
                    <div className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200">
                        <ArrowRight className="size-5 text-primaryColor" />
                    </div>

                </div>

            </div>

            {/* Corpo extra */}
            <div className="prose max-w-none">
                <h2 className="text-black font-bold text-xl">
                    <p>Visão Geral</p>
                </h2>
                <p className="text-gray-700 text-lg leading-loose text-justify">
                    ASSOCIAÇÃO MULHERES INSTRUÍDAS APOIA A 8.ª CAMPANHA OUTUBRO ROSA
                    <br />
                    Unidas pela Consciência, Pela Vida e Pela Esperança
                    <br />
                    A Associação Mulheres Instruídas teve a honra de estar presente na abertura da 8.ª Campanha Outubro Rosa, integrada na Semana Rosa Angola, liderada pela sua presidente, que há oito anos realiza um trabalho notável em parceria com o Instituto Angolano de Controlo do Câncer.
                    <br />
                    Este momento foi de profundo aprendizado, inspiração e compromisso.
                    Ouvimos histórias reais que refletem a força e a fé das mulheres angolanas entre elas, o testemunho comovente de uma mulher diagnosticada há doze anos com cancro e que hoje, com brilho nos olhos, partilhou:
                    <br />
                    “Estou curada.”
                    <br />
                    Um testemunho que ecoa como símbolo de esperança, ciência e amor à vida.
                    É a prova de que em Angola é possível vencer o cancro, graças à dedicação de profissionais extraordinários que, com ciência e compaixão, salvam vidas todos os dias.
                    <br />
                    O Compromisso da Associação Mulheres Instruídas
                    <br />
                    A Associação Mulheres Instruídas reafirma o seu compromisso em promover a consciencialização, o diagnóstico precoce e o apoio emocional a todas as mulheres.
                    Acreditamos que cuidar da saúde da mulher é cuidar da própria nação, porque cada mulher instruída deve também ser uma mulher consciente do seu corpo, do seu valor e da importância do autocuidado.
                    <br />
                    Com esta participação, reforçamos o nosso apoio a todas as iniciativas e organizações que lutam por um mesmo propósito salvar vidas e restaurar a esperança.
                    <br />
                    🌸 Associação Mulheres Instruídas
                    <br />
                    Mulheres que se instruem para transformar o mundo.
                </p>

                <div className="flex gap-5 flex-wrap flex-col md:flex-row md:flex-nowrap mt-10 mb-5">
                    <div className="w-full">
                        <Image
                            src={"/assets/news/out-rosa/1.jpg"}
                            alt={``}
                            width={1000}
                            height={1000}
                            className="object-cover object-center w-full h-96 md:h-[550px] rounded-lg shadow-md"
                        />
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-primaryColor w-full text-start">Médicas Que Salvam Vidas, Mulheres Que Precisam de Nós</p>
                        <p className="text-base text-justify">
                            A Associação Mulheres Instruídas presta uma homenagem sentida às médicas e profissionais de saúde oncológica que, com dedicação, ciência e compaixão, têm transformado a dor em esperança e o diagnóstico em vitória.
                            O seu trabalho é uma prova de que em Angola é possível curar com excelência, compromisso e amor humano.
                            <br />
                            <br />
                            Após o ato oficial da 8.ª Campanha Outubro Rosa, a nossa presidente, Iracelma Almeida, juntou-se às médicas do Instituto Angolano de Controlo do Cancro para conhecer de perto as realidades e desafios enfrentados pelas mulheres em tratamento oncológico.
                            Foi um momento de escuta e consciência, onde ficou claro que muitas mulheres não interrompem o tratamento por falta de fé, mas por falta de alimento e apoio emocional.
                            <br />
                            <br />
                            Os ciclos de tratamento geralmente de 21 em 21 dias são exigentes e fragilizam o corpo e o espírito.
                            Há mulheres que chegam debilitadas, sem energia e, muitas vezes, sem o que comer. Outras abandonam o tratamento por falta de meios, transporte ou pelo simples facto de se sentirem sozinhas.
                            <br />
                            <br />
                            Por isso, a Associação Mulheres Instruídas quer abrir uma linha de cadastramento para apoiar estas mulheres, garantindo alimentação e acompanhamento psicológico durante o processo de tratamento.
                            Mas para que esta missão se concretize, precisamos de ajuda de pessoas, empresas e instituições dispostas a partilhar um gesto de amor e solidariedade.
                            <br />
                            <br />
                            💗 Se desejar contribuir com alimentos, recursos financeiros, transporte ou apoio emocional, entre em contacto connosco.
                            A sua ajuda pode manter uma mulher em tratamento, salvar uma vida e renovar uma esperança.
                        </p>
                    </div>
                </div>


                <div className="flex gap-5 flex-wrap flex-col md:flex-row md:flex-nowrap mt-10 mb-5">
                    <div className="w-full">
                        <Image
                            src={"/assets/news/out-rosa/9.jpg"}
                            alt={``}
                            width={1000}
                            height={1000}
                            className="object-cover object-top w-full h-96 md:h-[400px] rounded-lg shadow-md"
                        />
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-primaryColor w-full text-start">Outubro Rosa: um Chamado à Consciência e ao Amor Próprio</p>
                        <p className="text-base text-justify mt-2">
                            O Outubro Rosa é mais do que uma cor é uma causa que simboliza força, solidariedade e vitória.
                            É o lembrete de que o diagnóstico precoce pode salvar vidas, e que a prevenção é o maior ato de amor que uma mulher pode ter consigo mesma.
                            <br />
                            <br />
                            “Cuidar da saúde da mulher é cuidar do futuro de Angola.”
                            <br />
                            <br />
                            A Associação Mulheres Instruídas orgulha-se de fazer parte desta corrente de luz, coragem e transformação.
                            Juntas, continuaremos a levantar outras mulheres pela vida, pela consciência e pelo amor.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
}