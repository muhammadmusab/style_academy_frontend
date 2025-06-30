export type ProductType = {
  price: number;
  quantity: number;
  title: string;
  details?: { title: string; value: string }[];
  overview: string;
  tags: string[];
  status?:string;
  category: string;
  available: boolean;
  sku?:string;
  sizes: { label: string; value: string }[];
  colors: { label: string; value: string }[];
  images: {
    url: string;
    cover: boolean;
    width?: number;
    height?: number;
  }[];
}
