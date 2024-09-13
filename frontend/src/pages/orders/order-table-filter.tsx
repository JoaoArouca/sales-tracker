import { SetURLSearchParams } from "react-router-dom";
import { Controller, useForm } from 'react-hook-form';
import { DatePicker } from "@/components/date-picker";


export interface TFilterParams {
  filterByStatus: string[];
  filterByProducts: string[];
  filterByDate: string | null;
}

interface OrderTableFiltersProps {
  filters: TFilterParams;
  setSearchParams: SetURLSearchParams;
}

export const OrderTableFilters = ({
  filters,
  setSearchParams
}: OrderTableFiltersProps) => {
  const { handleSubmit, control } = useForm<TFilterParams>({
    defaultValues: {
      filterByDate: filters.filterByDate ?? "",
      filterByProducts: filters.filterByProducts.length > 0 ? filters.filterByProducts : [],
      filterByStatus: filters.filterByStatus.length > 0 ? filters.filterByStatus : []
    }
  })

  const handlerFilters = (data: TFilterParams) => {
    const statuses = data.filterByStatus;
    const products = data.filterByProducts;
    const date = data.filterByDate;

    setSearchParams((prev) => {
      if (date) {
        prev.set('filterByDate', date);
      } else {
        prev.delete('filterByDate');
      }

      if (statuses.length > 0) {
        prev.set('status', statuses.toString());
      } else {
        prev.delete('status');
      }

      if (products.length > 0) {
        prev.set('products', products.toString());
      } else {
        prev.delete('products')
      }

      return prev;
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handlerFilters)}
    >
      <span className="text-sm font-semibold">Filters:</span>

      <Controller
        name="filterByDate"
        control={control}
        render={({ field }) => (
          <DatePicker
            date={field.value ?? undefined}
            handleChange={field.onChange}
          />
        )}
      />
      <button type="submit">Filter</button>
    </form>
  )
}