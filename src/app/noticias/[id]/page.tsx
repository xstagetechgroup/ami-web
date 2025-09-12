import React from "react";
import { newsData } from "@/utils/news";
import Link from "next/link";
import Container from "@/components/shared/container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NoticePageProps {
    params: { id: string };
}

export default function Noticias({ params }: NoticePageProps) {
    const noticeId = parseInt(params.id);
    const news = newsData.find((p) => p.id === noticeId);

    if (!news) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p className="text-gray-600 text-lg">Notícia não encontrada.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Breadcrumb */}
            <div className="w-full bg-gray-100 py-3 px-6 text-sm text-gray-600">
                <Container>
                    <div className="w-full">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>{" "}
                        &gt;{" "}
                        <Link href="/noticias" className="hover:underline">
                            Notícias
                        </Link>{" "}
                        &gt; <span className="font-medium">{news.title}</span>
                    </div>
                </Container>
            </div>

            {/* Conteúdo */}
            <div className="w-full">
                <Container>
                    <div className="w-full py-10">
                        {/* Categoria */}
                        <p className="text-sm uppercase text-primaryColor font-semibold mb-2">
                            {news.category}
                        </p>

                        {/* Título */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {news.title}
                        </h1>

                        {/* Autor e Data */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                            <span>Autor: {news.author}</span>
                            <span>
                                {new Date(news.date).toLocaleDateString("pt-PT", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                        </div>

                        {/* Descrição */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {news.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {news.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm bg-pink-50 text-primaryColor rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Imagem principal */}
                        <div className="w-full mb-8">
                            <Image
                                width={1200}
                                height={1200}
                                src={news.images[0]}
                                alt={news.title}
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Secção extra (simulação de corpo do artigo) */}
                        <div className="prose max-w-none">
                            <h2 className="text-black font-bold text-xl">Visão Geral</h2>
                            <p>
                                {news.description} Além disso, este artigo destaca a importância do
                                setor para o desenvolvimento sustentável e o impacto positivo na
                                comunidade local.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Outras Notícias */}
            <Container>
                <div className=" py-20">
                    <div className="w-full">
                        <h2 className="text-2xl font-bold mb-6">
                            Outras notícias que podem interessar
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {newsData.slice(2).map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden"
                                >
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-full h-52 object-cover object-center"
                                    />
                                    <div className="p-4">
                                        <span className="text-xs text-primaryColor font-semibold">
                                            {item.category}
                                        </span>
                                        <h3 className="text-lg font-bold mt-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                            {item.description}
                                        </p>
                                        <Link
                                            href={`/noticias/${item.id}`}
                                            className="text-primaryColor text-sm font-semibold mt-3 inline-block hover:underline"
                                        >
                                            Ler artigo →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Newsletter */}
            <div className="w-full bg-primaryColor py-10">
                <Container>
                    <div className="w-full">
                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                            <h3 className="text-xl font-bold text-white">
                                Fique por dentro! Inscreva-se na nossa newsletter
                            </h3>
                            <form className="flex w-full md:w-auto gap-2">
                                <Input
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    className="px-5 py-2 rounded-md flex-grow outline-none border border-gray-300 bg-white"
                                />
                                <Button
                                    type="submit"
                                    className="bg-gray-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800"
                                >
                                    Enviar
                                </Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
