import { Spinner } from "@/components/ui/spinner";
import { useInfiniteOrders } from "@/hooks/useInfiniteOrders"
import { Helmet } from "react-helmet-async";
import { Fragment } from "react/jsx-runtime";
import { OrdersTable } from "./orders-table";

export const Orders = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError
  } = useInfiniteOrders({
    pageNumber: 1,
    pageSize: 15
  });

  if (isError) return <p>Erro ao carregar dados!</p>;

  const orders = data?.pages.flatMap(page => page.orders) || [];

  const hasLoadingState = isLoading;

  return (
    <Fragment>
      <Helmet title="Orders" />
      <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight">
        Orders
        {hasLoadingState && (
          <Spinner />
        )}
      </h1>
      <OrdersTable meta={{ fetchNextPage, hasNextPage, isLoadingOrders: isLoading }} orders={orders} />
    </Fragment>
  )
}