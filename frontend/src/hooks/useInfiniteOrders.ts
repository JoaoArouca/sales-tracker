import { listOrders, ListOrdersRequest } from '@/api/list-orders'
import { useInfiniteQuery } from 'react-query'

export const useInfiniteOrders = ({
  pageSize = 5,
  filterByStatus = [],
  filterByProducts = [],
  filterByDate = undefined
 }: ListOrdersRequest) => {
  return useInfiniteQuery(
    'listOrders',
    ({ pageParam = 1 }) => listOrders({
      pageNumber: pageParam,
      pageSize,
      filterByStatus: filterByStatus.length ? [...filterByStatus] : undefined,
      filterByProducts: filterByProducts.length ? [...filterByProducts] : undefined,
      filterByDate: filterByDate,
    }),
    {
      getNextPageParam: (lastPage, allPages) =>  allPages.flatMap(page => page.orders).length < lastPage.totalCount ? allPages.length + 1 : undefined,
    }
  )
}