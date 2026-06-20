"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/shared/container";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { SiteContent } from "@/types/siteContent";

interface PublicPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  imageUrl: string | null;
  publishedAt: string | null;
  category: { name: string; slug: string } | null;
  author: { name: string };
  images: { url: string; order: number }[];
}

const Noticias: React.FC = () => {
  const { t, lang } = useTranslation();
  const n = (t as unknown as SiteContent).news ?? {};

  const [posts, setPosts] = useState<PublicPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PublicPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    fetch(`/api/public/posts?lang=${lang}`)
      .then((r) => r.json())
      .then((data) => {
        const items: PublicPost[] = data.posts ?? [];
        setPosts(items);
        setFilteredPosts(items);
        const cats = Array.from(
          new Set(items.map((p) => p.category?.name).filter(Boolean) as string[])
        );
        setCategories(cats);
      })
      .finally(() => setLoading(false));
  }, [lang]);

  const handleCategoryClick = (category: string) => {
    setFiltering(true);
    setSelectedCategory(category);
    setTimeout(() => {
      if (category === "Todos") {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(posts.filter((p) => p.category?.name === category));
      }
      setFiltering(false);
    }, 500);
  };

  const locale =
    lang === "pt" ? "pt-PT" : lang === "fr" ? "fr-FR" : "en-US";

  const getImage = (post: PublicPost) => {
    if (post.images?.length > 0)
      return post.images.sort((a, b) => a.order - b.order)[0].url;
    return post.imageUrl ?? "/assets/gallery/1.jpg";
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="w-full h-[250px] bg-blue-950 flex flex-col justify-center items-center text-white gap-2">
        <h1 className="text-4xl font-bold">{n.breadcrumbNews ?? "NOTÍCIAS"}</h1>
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
            <p className="font-semibold text-lg">
              {n.categoriesTitle ?? "Categorias de Notícias"}
            </p>
            <ul className="flex flex-col gap-2 justify-start items-start text-base pt-4">
              {["Todos", ...categories].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className={`p-0 bg-transparent hover:bg-transparent hover:underline duration-300 shadow-none text-black m-0 ${
                      selectedCategory === cat
                        ? "font-semibold text-primaryColor"
                        : ""
                    }`}
                  >
                    {cat === "Todos" ? (n.all ?? "Todos") : cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CARDS */}
          <div className="w-full md:w-[75%] min-h-[300px] relative">
            {(loading || filtering) && (
              <div className="absolute top-0 left-0 w-full flex justify-center items-center py-6">
                <Loader2 className="animate-spin text-primaryColor" size={40} />
              </div>
            )}

            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                loading || filtering ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <Image
                        src={getImage(post)}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-sm font-semibold text-primaryColor">
                        {post.category?.name}
                      </span>
                      <h3 className="text-lg font-bold mt-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                        <span>{post.author.name}</span>
                        <span>
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString(
                                locale,
                                { day: "2-digit", month: "long", year: "numeric" }
                              )
                            : ""}
                        </span>
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/noticias/${post.slug}`}
                          className="text-primaryColor text-sm font-semibold hover:underline"
                        >
                          {n.readArticle ?? "Ler artigo →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                !loading && (
                  <p className="text-center col-span-full text-gray-500">
                    {n.noResults ?? "Nenhuma notícia encontrada."}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Noticias;
