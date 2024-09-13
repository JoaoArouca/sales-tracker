import { SetURLSearchParams } from "react-router-dom";
import { Controller, useForm } from 'react-hook-form';
import { DatePicker } from "@/components/date-picker";
import { MultiSelect } from "@/components/multi-select";
import { generateSelectOptions } from "@/utils/generate-options";
import { OrderStatus } from "@/api/list-orders";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";


export interface TFilterParams {
  filterByStatus: string[];
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
  const statusOptions = generateSelectOptions(OrderStatus);
  const { handleSubmit, control } = useForm<TFilterParams>({
    defaultValues: {
      filterByDate: filters.filterByDate ?? "",
      filterByStatus: filters.filterByStatus.length > 0 ? filters.filterByStatus : []
    }
  })

  const handlerFilters = (data: TFilterParams) => {
    const statuses = data.filterByStatus;
    const date = data.filterByDate;

    setSearchParams((prev) => {
      if (date) {
        prev.set('filterByDate', date);
      } else {
        prev.delete('filterByDate');
      }

      if (statuses.length > 0) {
        prev.set('status', statuses.join(',') || "");
      } else {
        prev.delete('status');
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
      <Controller
        name="filterByStatus"
        control={control}
        render={({ field }) => (
          <MultiSelect
            options={statusOptions}
            selected={field.value}
            setSelected={field.onChange}
            className="w-auto mt-2"
          />
        )}
      />
      <Button type="submit" variant="default" size="default">
        <Search className="mr-2 h-4 w-4" />
        Apply filters
      </Button>
    </form>
  )
}