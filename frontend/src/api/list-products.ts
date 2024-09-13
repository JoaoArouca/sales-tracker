import { api } from "@/lib/axios";

export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  HOME_KITCHEN = 'Home & Kitchen',
  FASHION = 'Fashion',
  BEAUTY = 'Beauty',
  BOOKS = 'Books',
  GROCERY = 'Grocery',
  TOYS = 'Toys',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  stock: number;
  created_at: string;
}

export interface ListProductsRequest {
  filterById: string;
  filterByCategory: ProductCategory;
}

export interface ListProductsResponse {
  products: Product[];
}

export async function listProducts({
  filterByCategory,
  filterById
}: ListProductsRequest): Promise<ListProductsResponse> {
  const response = await api.get<ListProductsResponse>('/list-products', {
    params: {
      filterById,
      filterByCategory
    }
  });

  return response.data;
}