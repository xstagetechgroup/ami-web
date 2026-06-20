"use client";
import React, { useEffect, useState } from "react";
import { newsData } from "@/utils/staticNews";
import Link from "next/link";
import Container from "@/components/shared/container";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { SiteContent } from "@/types/siteContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { OutRosa } from "@/components/commun/OutRosa";

interface PostImage { url: string; order: number }
interface PublicPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  imageUrl: string | null;
  publishedAt: string | null;
  category: { name: string } | null;
  author: { name: string };
  tags: { tag: { name: string } }[];
  images: PostImage[];
}

interface NoticePageProps {
  params: Promise<{ slug: string }>;
}

export default function NoticiaDetalhe({ params }: NoticePageProps) {
  const { t, lang } = useTranslation();
  const n = (t as unknown as SiteContent).news ?? {};

  const { slug } = React.use(params);
  const [post, setPost] = useState<PublicPost | null>(null);
  const [related, setRelated] = useState<PublicPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/api/public/posts/${slug}?lang=${lang}`).then((r) => r.json()),
      fetch(`/api/public/posts?lang=${lang}&limit=6`).then((r) => r.json()),
    ]).then(([postData, listData]) => {
      setPost(postData.post ?? null);
      setRelated(
        (listData.posts ?? []).filter((p: PublicPost) => p.slug !== slug).slice(0, 3)
      );
    }).finally(() => setLoading(false));
  }, [slug, lang]);

  const locale = lang === "pt" ? "pt-PT" : lang === "fr" ? "fr-FR" : "en-US";

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primaryColor" size={40} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">{n.notFound ?? "Notícia não encontrada."}</p>
      </div>
    );
  }

  const images = post.images?.length > 0
    ? post.images.sort((a, b) => a.order - b.order).map((i) => i.url)
    : post.imageUrl ? [post.imageUrl] : [];

  const tags = post.tags?.map((t) => t.tag.name) ?? [];

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-3 px-6 text-sm text-gray-600">
        <Container>
          <div className="w-full">
            <Link href="/" className="hover:underline">{n.breadcrumbHome ?? "Home"}</Link>{" "}
            &gt;{" "}
            <Link href="/noticias" className="hover:underline">{n.breadcrumbNews ?? "Notícias"}</Link>{" "}
            &gt; <span className="font-medium">{post.title}</span>
          </div>
        </Container>
      </div>

      {/* Conteúdo */}
      <div className="w-full">
        <Container>
          <div className="w-full py-10">
            <p className="text-sm uppercase text-primaryColor font-semibold mb-2">
              {post.category?.name}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>{(n.authorLabel ?? "Autor")}: {post.author.name}</span>
              <span>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString(locale, {
                      day: "2-digit", month: "long", year: "numeric",
                    })
                  : ""}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-pink-50 text-primaryColor rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
            )}

            {/* Galeria de imagens */}
            {images.length > 0 && (
              <div className="w-full mb-8 relative">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                  pagination={{ clickable: true, el: ".swiper-pagination" }}
                  loop={images.length > 1}
                  className="w-full rounded-xl shadow-lg"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-96 md:h-[700px]">
                        <Image
                          src={image}
                          alt={`${post.title} - Imagem ${index + 1}`}
                          fill
                          className="object-cover object-center"
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {images.length > 1 && (
                  <>
                    <div className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200">
                      <ArrowLeft className="size-5 text-primaryColor" />
                    </div>
                    <div className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200">
                      <ArrowRight className="size-5 text-primaryColor" />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Conteúdo */}
            <div className="prose max-w-none">
              <h2 className="text-black font-bold text-xl">{n.overview ?? "Visão Geral"}</h2>
              <div
                className="text-gray-700 text-lg leading-loose text-justify whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Outras Notícias */}
      {related.length > 0 && (
        <Container>
          <div className="py-20">
            <h2 className="text-2xl font-bold mb-6">{n.otherNews ?? "Outras notícias que podem interessar"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => {
                const img = item.images?.[0]?.url ?? item.imageUrl ?? "/assets/gallery/1.jpg";
                return (
                  <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden">
                    <Image src={img} alt={item.title} className="w-full h-52 object-cover object-center" width={500} height={300} />
                    <div className="p-4">
                      <span className="text-xs text-primaryColor font-semibold">{item.category?.name}</span>
                      <h3 className="text-lg font-bold mt-2 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt}</p>
                      <Link href={`/noticias/${item.slug}`} className="text-primaryColor text-sm font-semibold mt-3 inline-block hover:underline">
                        {n.readArticle ?? "Ler artigo →"}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      )}

      {/* Newsletter */}
      <div className="w-full bg-primaryColor py-10">
        <Container>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-white">{n.newsletterTitle ?? "Fique por dentro! Inscreva-se na nossa newsletter"}</h3>
            <form className="flex w-full md:w-auto gap-2">
              <Input type="email" placeholder={n.newsletterPlaceholder ?? "Digite seu e-mail"} className="px-5 py-2 rounded-md flex-grow bg-white" />
              <Button type="submit" className="bg-gray-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-gray-800">
                {n.newsletterButton ?? "Enviar"}
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
