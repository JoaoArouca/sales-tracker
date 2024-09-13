import { http, HttpResponse } from 'msw'
import { ListOrdersResponse, Order } from '../list-orders'
import { orders as mockOrders } from './data/orders'
import { compareDesc, isAfter, isSameDay, parseISO } from 'date-fns'

const orders: Order[] = mockOrders

export const listOrdersMock = http.get<never, never, ListOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageNumber = searchParams.get('pageNumber') ? Number(searchParams.get('pageNumber')) : 1
    const pageSize = searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : 10

    const filterByDate = searchParams.get('filterByDate')
    const filterByProducts = searchParams.getAll('filterByProducts[]')
    const filterByStatus = searchParams.getAll('filterByStatus[]')
    
    let filteredOrders = orders

    if (filterByDate) {
      const dateToCompare = parseISO(filterByDate)
      filteredOrders = filteredOrders.filter((order) => 
        isSameDay(parseISO(order.createdAt), dateToCompare) || isAfter(parseISO(order.createdAt), dateToCompare)
      )
    }

    if (filterByProducts.length > 0) {
      filteredOrders = filteredOrders.filter((order) =>
        order.items.some((item) => filterByProducts.includes(item.productId))
      )
    }
    
    if (filterByStatus.length > 0) {
      filteredOrders = filteredOrders.filter((order) => filterByStatus.includes(order.status))
    }

    filteredOrders = filteredOrders.sort((a, b) => 
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    )

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);
    const totalCount = filteredOrders.length

    return HttpResponse.json({
      orders: paginatedOrders,
      currentPage: pageNumber,
      pageSize,
      totalCount
    },
    { status: 200 })
  }
)