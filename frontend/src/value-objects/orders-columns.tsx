import { Order } from "@/api/list-orders";
import { Modal } from "@/components/modal";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { OrderDetail } from "@/pages/orders/order-detail";
import { TColumns } from "@/types/table-types";
import { Search } from "lucide-react";

export const OrdersColumns: TColumns<Order> = [
  {
    header: ' ',
    meta: {
      className: 'w-[100px]'
    },
    cell: ({ row }) => {
      const orderId = row.original.id;

      return (
        <Modal
          trigger={
            <Button variant="outline" size="default">
              <Search className="h-3 w-3" />
              <span className="sr-only">Details</span>
            </Button>}
          title={`Order: ${orderId}`}
          description={`Details`}
        >
          <OrderDetail id={orderId} />
        </Modal>
      );
    }
  },
  {
    header: 'Order',
    accessorKey: 'id',
  },
  {
    header: 'Customer',
    accessorKey: 'customerId',
  },
  {
    header: 'Amount',
    accessorKey: 'amount',
    cell: (info) => `$${info.getValue().toFixed(2)}`,
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: (info) => <StatusBadge status={info.getValue()} />
  },
  {
    header: 'Created At',
    accessorKey: 'createdAt',
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  },
]