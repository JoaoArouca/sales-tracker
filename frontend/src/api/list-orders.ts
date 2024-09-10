import { api } from "../lib/axios"

export enum OrderStatus {
  PENDING = 'pending',  
  PROCESSING = 'processing',         
  SHIPPED = 'shipped',               
  DELIVERED = 'delivered',          
  CANCELED = 'canceled',             
  RETURNED = 'returned',                
  REFUNDED = 'refunded',    
}

export interface OrdemItem {
  id: string
  productId: string
  quantity: number
  currentPrice: number
  totalPrice: number
}

export interface Order {
  id: string
  customerId: string
  amount: number
  status: OrderStatus
  createdAt: string
  items: OrdemItem[]
}

export interface ListOrdersRequest {
  pageNumber: number
  pageSize: number
  filterByStatus?: OrderStatus[]
  filterByDate?: string
  filterByProducts?: string[]
}

export interface ListOrdersResponse {
  orders: Order[]
  totalCount: number
  currentPage: number
  pageSize: number
}

export async function listOrders({
  pageNumber,
  pageSize,
  filterByDate,
  filterByProducts,
  filterByStatus
}: ListOrdersRequest): Promise<ListOrdersResponse> {
  const response = await api.get<ListOrdersResponse>('/orders', {
    params: {
      pageNumber,
      pageSize,
      filterByDate,
      filterByProducts,
      filterByStatus
    }
  })

  return response.data;
}