import { Spinner } from "@/components/ui/spinner";
import { useInfiniteOrders } from "@/hooks/useInfiniteOrders"
import { Helmet } from "react-helmet-async";
import { Fragment } from "react/jsx-runtime";
import { DashboardTable } from "../dashboard-table";

export const Dashboard = () => {
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
      <Helmet title="Dashboard" />
      <DashboardTable meta={{ fetchNextPage, hasNextPage }} orders={orders} />
    </Fragment>
  )
}