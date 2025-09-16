// use client porque usamos hook que lê localStorage / estado
"use client";

import React from "react";
import { newsData } from "@/utils/news";
import Link from "next/link";
import Container from "@/components/shared/container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { NewsItem, SiteContent } from "@/types/siteContent";

interface NoticePageProps {
  params: Promise<{ id: string }>;
}

export default function Noticias({ params }: NoticePageProps) {
  const { t, lang } = useTranslation();
  const n = (t as SiteContent).news ?? {}; // atalho para strings de notícia

  const { id } = React.use(params);
  const noticeId = parseInt(id);

  //const noticeId = parseInt(params.id, 10);
  const baseNews = newsData.find((p) => p.id === noticeId);

  if (!baseNews) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">
          {n.notFound ?? "Notícia não encontrada."}
        </p>
      </div>
    );
  }

  // procura tradução específica do item (em locales/*.json -> news.items[])
  const translatedItem = Array.isArray(n.items)
    ? (n.items as NewsItem[]).find((it) => it.id === noticeId)
    : undefined;

  // merge: valores traduzidos (se houver) substituem baseNews
  const news = {
    ...baseNews,
    title: translatedItem?.title ?? baseNews.title,
    description: translatedItem?.description ?? baseNews.description,
    category: translatedItem?.category ?? baseNews.category,
    author: translatedItem?.author ?? baseNews.author,
    tags: translatedItem?.tags ?? baseNews.tags,
  };

  // locale para formatação de data
  const locale =
    lang === "pt" ? "pt-PT" : lang === "fr" ? "fr-FR" : "en-US";

  // outras notícias (merge com possíveis traduções)
  const otherNews = newsData
    .filter((i) => i.id !== noticeId)
    .slice(0, 6)
    .map((item) => {
      const tr = Array.isArray(n.items)
        ? (n.items as NewsItem[]).find((it) => it.id === item.id)
        : undefined;
      return {
        ...item,
        title: tr?.title ?? item.title,
        description: tr?.description ?? item.description,
        category: tr?.category ?? item.category,
      };
    });

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-3 px-6 text-sm text-gray-600">
        <Container>
          <div className="w-full">
            <Link href="/" className="hover:underline">
              {n.breadcrumbHome ?? "Home"}
            </Link>{" "}
            &gt;{" "}
            <Link href="/noticias" className="hover:underline">
              {n.breadcrumbNews ?? "Notícias"}
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
              <span>
                {(n.authorLabel ?? n.author ?? "Autor")}: {news.author}
              </span>
              <span>
                {new Date(news.date).toLocaleDateString(locale, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Descrição */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-2">
              {news.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {news.tags.map((tag: string, i: number) => (
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

            {/* Corpo extra */}
            <div className="prose max-w-none">
              <h2 className="text-black font-bold text-xl">
                {n.overview ?? "Visão Geral"}
              </h2>
              <p className="text-gray-700 text-lg leading-loose text-justify">
                {news.description}
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
              {n.otherNews ?? "Outras notícias que podem interessar"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden"
                >
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-52 object-cover object-center"
                    width={500}
                    height={300}
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
                      {n.readArticle ?? "Ler artigo →"}
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
                {n.newsletterTitle ?? "Fique por dentro! Inscreva-se na nossa newsletter"}
              </h3>
              <form className="flex w-full md:w-auto gap-2">
                <Input
                  type="email"
                  placeholder={n.newsletterPlaceholder ?? "Digite seu e-mail"}
                  className="px-5 py-2 rounded-md flex-grow outline-none border border-gray-300 bg-white"
                />
                <Button
                  type="submit"
                  className="bg-gray-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800"
                >
                  {n.newsletterButton ?? "Enviar"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
