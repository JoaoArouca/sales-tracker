import { ColumnDef } from "@tanstack/react-table"

export type TColumns<T> = ColumnDef<T, any>[]


export type TableProps<T> = {
  columns: TColumns<T>
  tableData: T[]
}