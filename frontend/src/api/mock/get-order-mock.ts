import { http, HttpResponse } from "msw";
import { Order } from "../list-orders";
import { orders as mockOrders } from './data/orders'
import { GetOrderResponse } from "../get-order";

const orders: Order[] = mockOrders;

export const getOrderMock = http.get<never, never, GetOrderResponse>(
  'get-order',
  async ({ request }) => {
    const { searchParams } = new URL(request.url);

    const searchId = searchParams.get('id');

    if (!searchId) {
      throw new Error('Missing order Id');
    }

    const findOrder = orders.find((order) => order.id === searchId);

    if (!findOrder) {
      throw new Error('Cannot find order');
    }

    return HttpResponse.json({
      order: findOrder
    },
      { status: 201 })
  }
)