import { products } from "@/assets/data/products-content";

export const getProductBySlug = async (slug: string) => {
  return products.find((p) => p.slug === slug);
};
