import { ReactNode } from "react";

// Definição do tipo para cada notícia
export interface NewsSingleItem {
  id: number;
  title: string;
  description: ReactNode;
  images: string[];
  date: string; // pode ser refinado para Date se preferir
  category: string;
  author: string;
  tags: string[];
}