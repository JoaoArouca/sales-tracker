import { http, HttpResponse } from "msw";
import { ListProductsResponse, Product } from "../list-products";
import { productsMock } from "./data/products";

const products: Product[] = productsMock;

export const listProductsMock = http.get<never, never, ListProductsResponse>(
  '/list-products',
  async ({ request }) => {
    const { searchParams } = new URL(request.url);

    const filterById = searchParams.get('filterById');
    const filterByCategory = searchParams.get('filterByCategory');

    let filteredProducts = products;

    if (filterById) {
      filteredProducts = filteredProducts.filter((product) => product.id === filterById);
    }

    if (filterByCategory) {
      filteredProducts = filteredProducts.filter((product) => filterByCategory.includes(product.category))
    }

    return HttpResponse.json({
      products: filteredProducts
    },
      { status: 200 })
  }
)