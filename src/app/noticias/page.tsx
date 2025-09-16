"use client";
import React, { useState } from "react";
import Container from "@/components/shared/container";
import Link from "next/link";
import { newsData } from "@/utils/news";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { NewsItem, SiteContent } from "@/types/siteContent";


const Noticias: React.FC = () => {
    const { t, lang } = useTranslation();
    const n = (t as SiteContent).news ?? {};

    // estado
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    const [filteredNews, setFilteredNews] = useState(newsData);
    const [loading, setLoading] = useState(false);

    // traduções por item (se houver)
    const translatedItems: NewsItem[] = Array.isArray(n.items) ? n.items : [];

    // categorias base (em dados originais) — "Todos" fica como chave especial
    const baseCategories = Array.from(new Set(newsData.map((it) => it.category)));
    const categories = ["Todos", ...baseCategories];

    // retorna label traduzida para uma categoria (faz mapping via um item de exemplo)
    const getCategoryLabel = (cat: string) => {
        if (cat === "Todos") return n.all ?? "Todos";
        const sample = newsData.find((it) => it.category === cat);
        if (!sample) return cat;
        const tr = translatedItems.find((it) => it.id === sample.id);
        return tr?.category ?? cat;
    };

    // devolve item mesclado com tradução (se existir)
    const getTranslatedNewsItem = (base: NewsItem) => {
        const tr = translatedItems.find((it) => it.id === base.id);
        return {
            ...base,
            title: tr?.title ?? base.title,
            description: tr?.description ?? base.description,
            category: tr?.category ?? base.category,
            author: tr?.author ?? base.author,
            tags: tr?.tags ?? base.tags,
        };
    };

    const handleCategoryClick = (category: string) => {
        setLoading(true);
        setSelectedCategory(category);

        setTimeout(() => {
            if (category === "Todos") {
                setFilteredNews(newsData);
            } else {
                setFilteredNews(newsData.filter((news) => news.category === category));
            }
            setLoading(false);
        }, 800);
    };

    // locale para datas
    const locale = lang === "pt" ? "pt-PT" : lang === "fr" ? "fr-FR" : "en-US";

    return (
        <div className="w-full">
            {/* HERO */}
            <div className="w-full h-[250px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
                <h1 className="text-4xl font-bold">{n.pageTitle ?? n.breadcrumbNews ?? "NOTÍCIAS"}</h1>
                <div className="flex items-center justify-center gap-2">
                    <Link className="hover:underline duration-300" href={"/"}>
                        {n.breadcrumbHome ?? "HOME"}
                    </Link>
                    <p>-</p>
                    <p>{n.breadcrumbNews ?? "NOTÍCIAS"}</p>
                </div>
            </div>

            <Container>
                <div className="w-full flex flex-wrap md:flex-nowrap gap-5 md:gap-0 justify-between items-start py-10">
                    {/* Categorias */}
                    <div className="w-full md:w-[25%]">
                        <p className="font-semibold text-lg">{n.categoriesTitle ?? "Categorias de Notícias"}</p>
                        <ul className="flex flex-col gap-2 justify-start items-start text-base pt-4">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`p-0 bg-transparent hover:bg-transparent hover:underline duration-300 shadow-none text-black m-0 ${selectedCategory === cat ? "font-semibold text-primaryColor" : ""
                                            }`}
                                    >
                                        {getCategoryLabel(cat)}
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
                                filteredNews.map((newsBase) => {
                                    const news = getTranslatedNewsItem(newsBase);
                                    return (
                                        <div
                                            key={news.id}
                                            className="bg-white rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                                        >
                                            {/* Imagem */}
                                            <div className="h-40 w-full overflow-hidden">
                                                <Image
                                                    src={news.images[0]}
                                                    alt={news.title}
                                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                                    width={500}
                                                    height={300}
                                                />
                                            </div>

                                            {/* Conteúdo */}
                                            <div className="p-4 flex flex-col flex-grow">
                                                {/* Categoria */}
                                                <span className="text-sm font-semibold text-primaryColor">
                                                    {news.category}
                                                </span>

                                                {/* Título */}
                                                <h3 className="text-lg font-bold mt-2 line-clamp-2">{news.title}</h3>

                                                {/* Descrição */}
                                                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{news.description}</p>

                                                {/* Autor e Data */}
                                                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                                                    <span>{news.author}</span>
                                                    <span>
                                                        {new Date(news.date).toLocaleDateString(locale, {
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
                                                        {n.readArticle ?? "Ler artigo →"}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-center col-span-full text-gray-500">{n.noResults ?? "Nenhuma notícia encontrada."}</p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Noticias;
