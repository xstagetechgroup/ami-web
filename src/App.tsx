// src/App.tsx
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./components/shart/Navbar";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 grid md:grid-cols-2 items-center px-8 md:px-16 py-12 relative">
        {/* Texto */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            <span className="text-pink-600">Transformar o</span> <br />
            <span className="text-pink-600">mundo começa</span> <br />
            por instruir{" "}
            <span className="bg-gray-200 px-2 text-pink-600 rounded-md">
              mulheres.
            </span>
          </h1>

          <p className="text-gray-700 font-medium">
            Junte-se a nós e nos ajude a ajudar
          </p>

          {/* Barra de busca */}
          <div className="flex items-center bg-white shadow-lg rounded-full px-4 py-2 w-full max-w-md">
            <input
              type="text"
              placeholder="O que está na sua lista de tarefas?"
              className="flex-1 outline-none text-sm text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="text-pink-600 font-semibold pr-2">
              Categorias
            </span>
            <button className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative flex justify-center mt-10 md:mt-0">
          <div className="absolute -right-10 top-0 bottom-0 w-3/4 bg-pink-600 rounded-l-[4rem] hidden md:block"></div>
          <img
            src="/assets/home-hero.png" // substitua pela imagem que você tem
            alt="Mulher"
            className="relative z-10 max-h-[900px] object-contain"
          />
        </div>
      </main>
    </div>
  );
}
