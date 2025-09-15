// Definição do tipo para cada notícia
export interface NewsSingleItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  date: string; // pode ser refinado para Date se preferir
  category: string;
  author: string;
  tags: string[];
}