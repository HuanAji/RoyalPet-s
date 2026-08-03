export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewsCount: number;
  description: string;
}

export interface ReviewVideo {
  id: string;
  title: string;
  platform: 'TikTok' | 'YouTube';
  thumbnail: string;
  duration: string;
  views: string;
}
