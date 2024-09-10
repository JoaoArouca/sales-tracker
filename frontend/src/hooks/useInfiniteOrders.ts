import { listOrders, ListOrdersRequest } from '@/api/list-orders'
import { useInfiniteQuery } from 'react-query'

export const useInfiniteOrders = ({
  pageSize = 5
 }: ListOrdersRequest) => {
  return useInfiniteQuery(
    'listOrders',
    ({ pageParam = 1 }) => listOrders({
      pageNumber: pageParam,
      pageSize
    }),
    {
      getNextPageParam: (lastPage, allPages) => lastPage.orders.length > 0 ? allPages.length + 1 : undefined
    }
  )
}