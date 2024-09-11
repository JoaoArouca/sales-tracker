import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrdersTableSkeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => {
        return (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="bg-gray-300 h-4 w-[172px]" />
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">
              <Skeleton className="bg-gray-300 h-4 w-[172px]" />
            </TableCell>

            <TableCell className="text-muted-foreground">
              <Skeleton className="bg-gray-300 h-4 w-[148px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="bg-gray-300 h-4 w-[110px]" />
            </TableCell>

            <TableCell className="font-medium">
              <Skeleton className="bg-gray-300 h-4 w-[200px]" />
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
