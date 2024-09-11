import { http, HttpResponse } from 'msw'
import { ListOrdersResponse, Order } from '../list-orders'
import { mockOrders } from './data/orders'
import { isAfter, parseISO } from 'date-fns'

const orders: Order[] = mockOrders

export const listOrdersMock = http.get<never, never, ListOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageNumber = searchParams.get('pageNumber') ? Number(searchParams.get('pageNumber')) : 1
    const pageSize = searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : 10
    const totalCount = orders.length

    const filterByDate = searchParams.get('filterByDate')
    const filterByProducts = searchParams.get('filterByProducts')
    const filterByStatus = searchParams.get('filterByStatus')
    
    let filteredOrders = orders

    if (filterByDate) {
      const dateToCompare = parseISO(filterByDate)
      filteredOrders = filteredOrders.filter((order) => 
        isAfter(parseISO(order.createdAt), dateToCompare)
      )
    }

    if (filterByProducts) {
      filteredOrders = filteredOrders.filter((order) =>
        order.items.some((item) => filterByProducts.includes(item.productId))
      )
    }
    
    if (filterByStatus) {
      filteredOrders = filteredOrders.filter((order) => filterByStatus.includes(order.status))
    }

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

    return HttpResponse.json({
      orders: paginatedOrders,
      currentPage: pageNumber,
      pageSize,
      totalCount
    },
    { status: 200 })
  }
)