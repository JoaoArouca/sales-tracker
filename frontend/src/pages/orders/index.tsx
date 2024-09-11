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
    isError,
  } = useInfiniteOrders({
    pageNumber: 1,
    pageSize: 15
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p>Erro ao carregar dados!</p>;

  const orders = data?.pages.flatMap(page => page.orders) || [];

  return (
    <Fragment>
      <Helmet title="Orders" />
      <OrdersTable meta={{ fetchNextPage, hasNextPage }} orders={orders} />
    </Fragment>
  )
}