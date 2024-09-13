import { api } from "@/lib/axios";
import { Order } from "./list-orders";

export interface GetOrderRequest {
  id: string;
}

export interface GetOrderResponse {
  order: Order;
}

export async function getOrder({
  id
}: GetOrderRequest): Promise<GetOrderResponse> {
  const response = await api.get<GetOrderResponse>('/get-order', {
    params: {
      id
    }
  });

  return response.data;
}