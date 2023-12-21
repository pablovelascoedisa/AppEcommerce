export interface ArticleRating {
  rate: number;
  count: number;
}

export interface Article {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: ArticleRating;
}

export interface ArticleCardProps {
  articleData: Article;
}
