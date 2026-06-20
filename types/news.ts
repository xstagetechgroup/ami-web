import { ReactNode } from "react";
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