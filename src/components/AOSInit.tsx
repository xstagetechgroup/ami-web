"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação
      once: true,    // anima só uma vez
    });
  }, []);

  return null; // não renderiza nada
}
