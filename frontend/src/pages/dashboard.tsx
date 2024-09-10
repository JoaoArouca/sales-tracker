import { Skeleton } from "@/components/ui/skeleton";
import { useInfiniteOrders } from "@/hooks/useInfiniteOrders";
import InfiniteScroll from "react-infinite-scroll-component";

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

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar dados!</p>;

  const orders = data?.pages.flatMap(page => page.orders) || [];

  console.log(data)
  return (
    <div
    id="scrollableDiv"
    className="max-h-[500px] overflow-y-auto">
      <InfiniteScroll
        dataLength={orders.length}
        next={() => fetchNextPage()}
        hasMore={hasNextPage || false}
        loader={
          <div className="flex justify-center items-center p-4">
            <Skeleton className="w-full h-16 bg-gray-300" /> {/* Ajuste a largura e altura conforme necessário */}
          </div>
        }
        scrollableTarget="scrollableDiv"
        scrollThreshold={1}
        >
        {
          orders.map((order, index) => (
            <li className="bg-red-200 h-[60px]" key={index}>{order.id}</li>
          ))
        }
      </InfiniteScroll>
     </div>
  );
};
