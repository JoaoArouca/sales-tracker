import { getOrder } from "@/api/get-order";
import { StatusBadge } from "@/components/status-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useQuery } from "react-query";

interface OrderDetailProps {
  id: string;
}

export const OrderDetail = ({ id }: OrderDetailProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [id, 'orderId'],
    queryFn: () => getOrder({ id })
  });


  if (isError) {
    return <span>Failed to load order!</span>
  }

  console.log(data?.order)
  return (
    <div className="space-y-6">
      <Table>
        {
          isLoading && (
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <Skeleton className="bg-gray-300 h-4 w-[148px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Customer</TableCell>
                <TableCell className="text-right flex justify-end">
                  <Skeleton className="bg-gray-300 h-4 w-[148px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Order date
                </TableCell>
                <TableCell className="text-right flex justify-end">
                  <Skeleton className="bg-gray-300 h-4 w-[148px]" />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Amount
                </TableCell>
                <TableCell className="text-right flex justify-end">
                  <Skeleton className="bg-gray-300 h-4 w-[148px]" />
                </TableCell>
              </TableRow>
            </TableBody>
          )
        }
        {
          data?.order && !isLoading && (
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <StatusBadge status={data.order.status} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Customer</TableCell>
                <TableCell className="text-right">
                  {data.order.customerId}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Order date
                </TableCell>
                <TableCell className="text-right">
                  created
                  {` `}
                  {formatDistanceToNow(parseISO(data.order.createdAt), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Amount
                </TableCell>
                <TableCell className="text-right">
                  ${data.order.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          )
        }
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Qt.</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Total price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            isLoading && (
              <TableRow>
                <TableCell>
                  <Skeleton className="bg-gray-300 h-4 w-[60px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="bg-gray-300 h-4 w-[60px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="bg-gray-300 h-4 w-[60px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="bg-gray-300 h-4 w-[60px]" />
                </TableCell>
              </TableRow>
            )
          }
          {
            data?.order && !isLoading && (
              data?.order.items.map((orderItem) => {
                return (
                  <TableRow key={orderItem.id}>
                    <TableCell>{orderItem.productId}</TableCell>
                    <TableCell className="text-right">
                      {orderItem.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {(orderItem.currentPrice).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {(
                        orderItem.totalPrice
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                  </TableRow>
                )
              }
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}