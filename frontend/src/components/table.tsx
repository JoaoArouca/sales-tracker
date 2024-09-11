import { TableProps } from '@/types/table-types';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { OrdersTableSkeleton } from '@/pages/orders/orders-table-skeleton';

export function TableComponent<T>({ columns, tableData, isLoadingData }: TableProps<T>) {
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white shadow">
        {getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableHead key={header.id} className='text-gray-700'>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {isLoadingData && !tableData.length && <OrdersTableSkeleton />}

        {tableData.length > 0 && getRowModel().rows.map(row => (
          <TableRow className='hover:bg-gray-100' key={row.id}>
            {row.getVisibleCells().map(cell => {
              const cellValue = flexRender(cell.column.columnDef.cell, cell.getContext());
              return <TableCell key={cell.id}>{cellValue}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
