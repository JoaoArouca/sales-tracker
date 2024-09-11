import { Order } from "@/api/list-orders";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { TableComponent } from "@/components/table";
import { Spinner } from "@/components/ui/spinner";
import { useCustomScrollBar } from "@/hooks/useCustomScrollBar";
import { OrdersColumns } from "@/value-objects/orders-columns";
import InfiniteScroll from "react-infinite-scroll-component";

interface OrdersdTableProps {
  orders: Order[];
  meta: {
    fetchNextPage: () => void;
    hasNextPage?: boolean;
    isLoadingOrders: boolean;
  }
}

export const OrdersTable = ({ orders, meta }: OrdersdTableProps) => {
  const { fetchNextPage, hasNextPage, isLoadingOrders } = meta;
  const { handleScroll, scrollProgress } = useCustomScrollBar();

  return (
    <div className="p-2 rounded-sm border shadow">
      <ScrollProgressBar scrollProgress={scrollProgress} />
      <div
        id="scrollableDiv"
        className="max-h-[500px] overflow-y-auto scroll-smooth"
        >
        <InfiniteScroll
          dataLength={orders.length}
          next={() => fetchNextPage()}
          hasMore={hasNextPage || false}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
          scrollThreshold={1}
          onScroll={handleScroll}
          height={500}
        >
          <TableComponent<Order> isLoadingData={isLoadingOrders} columns={OrdersColumns} tableData={orders} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
