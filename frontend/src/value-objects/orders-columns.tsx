import { Order } from "@/api/list-orders";
import { TColumns } from "@/types/table-types";

export const OrdersColumns: TColumns<Order> = [
  {
    header: 'Order ID',
    accessorKey: 'id',
  },
  {
    header: 'Customer ID',
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
  },
  {
    header: 'Created At',
    accessorKey: 'createdAt',
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  },
]