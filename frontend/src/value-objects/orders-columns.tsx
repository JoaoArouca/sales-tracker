import { Order } from "@/api/list-orders";
import { StatusBadge } from "@/components/status-badge";
import { TColumns } from "@/types/table-types";

export const OrdersColumns: TColumns<Order> = [
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