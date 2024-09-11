import { Order } from "@/api/list-orders";
import { TableComponent } from "@/components/table";
import { Spinner } from "@/components/ui/spinner";
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

  return (
    <div
      id="scrollableDiv"
      className="max-h-[500px] overflow-y-auto scroll-smooth">
        <InfiniteScroll
          dataLength={orders.length}
          next={() => fetchNextPage()}
          hasMore={hasNextPage || false}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
          scrollThreshold={1}
          height={500}
          >
            <TableComponent<Order> columns={OrdersColumns} tableData={orders} />
        </InfiniteScroll>
     </div>
  );
};
