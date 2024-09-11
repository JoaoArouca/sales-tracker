import { Order } from "@/api/list-orders";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { TableComponent } from "@/components/table";
import { Spinner } from "@/components/ui/spinner";
import { useCustomScrollBar } from "@/hooks/useCustomScrollBar";
import { OrdersColumns } from "@/value-objects/orders-columns";
import InfiniteScroll from "react-infinite-scroll-component";

interface DashboardTableProps {
  orders: Order[];
  meta: {
    fetchNextPage: () => void;
    hasNextPage?: boolean
  }
}

export const DashboardTable = ({ orders, meta }: DashboardTableProps) => {
  const { fetchNextPage, hasNextPage } = meta;
  const { handleScroll, scrollProgress } = useCustomScrollBar();

  return (
    <div>
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
          <TableComponent<Order> columns={OrdersColumns} tableData={orders} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
