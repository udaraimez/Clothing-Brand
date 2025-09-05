
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  category: string;
  gender: 'Men' | 'Women' | 'Unisex';
  isNewDrop?: boolean;
  story?: string;
}