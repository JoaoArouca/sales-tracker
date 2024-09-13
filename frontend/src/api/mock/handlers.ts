import { getOrderMock } from "./get-order-mock";
import { listOrdersMock } from "./list-orders-mock";
import { listProductsMock } from "./list-products-mock";

export const handlers = [
  listOrdersMock,
  listProductsMock,
  getOrderMock
]