import { Spinner } from "@/components/ui/spinner";
import { useInfiniteOrders } from "@/hooks/useInfiniteOrders"
import { Helmet } from "react-helmet-async";
import { Fragment } from "react/jsx-runtime";
import { OrdersTable } from "./orders-table";
import { useSearchParams } from "react-router-dom";
import { OrderTableFilters } from "./order-table-filter";
import { OrderStatus } from "@/api/list-orders";
import { mapStringsToEnumValues } from "@/utils/generate-enum";

export const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterByStatus = searchParams.get('status')?.split(',') || [];
  const filterByProducts = searchParams.getAll('products');
  const filterByDate = searchParams.get('filterByDate');

  console.log(filterByStatus)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading: hasLoadingState,
    isError
  } = useInfiniteOrders({
    pageNumber: 1,
    pageSize: 15,
    filterByStatus:  mapStringsToEnumValues(OrderStatus, filterByStatus),
    // filterByProducts: ['prod_1', 'prod_8'],
    filterByDate: filterByDate ? filterByDate : undefined
  });

  if (isError) return <p>Erro ao carregar dados!</p>;

  const orders = data?.pages.flatMap(page => page.orders) || [];
  return (
    <Fragment>
      <Helmet title="Orders" />
      <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">
        Orders
        {hasLoadingState && (
          <Spinner />
        )}
      </h1>
      <OrderTableFilters filters={{ filterByDate, filterByProducts, filterByStatus }} setSearchParams={setSearchParams} />
      <OrdersTable meta={{ fetchNextPage, hasNextPage, isLoadingOrders: hasLoadingState }} orders={orders} />
    </Fragment>
  )
}