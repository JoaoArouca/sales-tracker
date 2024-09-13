import { ISelectOption } from "@/components/multi-select";

export function generateSelectOptions(enumType: any): ISelectOption[] {
  return Object.keys(enumType).map(key => ({
    value: enumType[key as keyof typeof enumType],
    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')
  }));
}
