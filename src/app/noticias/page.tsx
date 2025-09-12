"use client";
import Container from "@/components/shared/container";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { newsData } from "@/utils/news";
import { Loader2 } from "lucide-react"; // ícone de loading do lucide

const Noticias: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    const [filteredNews, setFilteredNews] = useState(newsData);
    const [loading, setLoading] = useState(false);

    // Obter categorias únicas do array
    const categories = ["Todos", ...new Set(newsData.map((news) => news.category))];

    const handleCategoryClick = (category: string) => {
        setLoading(true);
        setSelectedCategory(category);

        // Simula carregamento (ex: chamada API)
        setTimeout(() => {
            if (category === "Todos") {
                setFilteredNews(newsData);
            } else {
                setFilteredNews(newsData.filter((news) => news.category === category));
            }
            setLoading(false);
        }, 800);
    };

    return (
        <div className="w-full">
            {/* HERO */}
            <div className="w-full h-[250px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
                <h1 className="text-4xl font-bold">NOTÍCIAS</h1>
                <div className="flex items-center justify-center gap-2">
                    <Link className="hover:underline duration-300" href={"/"}>
                        HOME
                    </Link>
                    <p>-</p>
                    <p>Contactos</p>
                </div>
            </div>

            <Container>
                <div className="w-full flex flex-wrap md:flex-nowrap gap-5 md:gap-0 justify-between items-start py-10">
                    {/* Categorias */}
                    <div className="w-full md:w-[25%]">
                        <p className="font-semibold text-lg">Categorias de Notícias</p>
                        <ul className="flex flex-col gap-2 justify-start items-start text-base pt-4">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`p-0 bg-transparent hover:bg-transparent hover:underline duration-300 shadow-none text-black m-0 ${selectedCategory === cat ? "font-semibold text-primaryColor" : ""
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CARDS DE NOTICIAS */}
                    <div className="w-full md:w-[75%] min-h-[300px] relative">
                        {/* LOADING */}
                        {loading && (
                            <div className="absolute top-0 left-0 w-full flex justify-center items-center py-6">
                                <Loader2 className="animate-spin text-primaryColor" size={40} />
                            </div>
                        )}

                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${loading ? "opacity-50 pointer-events-none" : "opacity-100"
                                }`}
                        >
                            {filteredNews.length > 0 ? (
                                filteredNews.map((news) => (
                                    <div
                                        key={news.id}
                                        className="bg-white rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                                    >
                                        {/* Imagem */}
                                        <div className="h-40 w-full overflow-hidden">
                                            <img
                                                src={news.images[0]}
                                                alt={news.title}
                                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                            />
                                        </div>

                                        {/* Conteúdo */}
                                        <div className="p-4 flex flex-col flex-grow">
                                            {/* Categoria */}
                                            <span className="text-sm font-semibold text-primaryColor">
                                                {news.category}
                                            </span>

                                            {/* Título */}
                                            <h3 className="text-lg font-bold mt-2 line-clamp-2">
                                                {news.title}
                                            </h3>

                                            {/* Descrição */}
                                            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                                                {news.description}
                                            </p>

                                            {/* Autor e Data */}
                                            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                                                <span>{news.author}</span>
                                                <span>
                                                    {new Date(news.date).toLocaleDateString("pt-PT", {
                                                        day: "2-digit",
                                                        month: "long",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                            </div>

                                            {/* Botão */}
                                            <div className="mt-4">
                                                <Link
                                                    href={`/noticias/${news.id}`}
                                                    className="text-primaryColor text-sm font-semibold hover:underline"
                                                >
                                                    Ler artigo →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center col-span-full text-gray-500">
                                    Nenhuma notícia encontrada.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Noticias;
