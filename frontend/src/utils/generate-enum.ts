import { OrderStatus } from "@/api/list-orders";

export function mapStringsToEnumValues<T>(enumObj: T, values: string[]): (T[keyof T])[] {
  return values.map(value => {
    const key = Object.keys(OrderStatus).find(key => enumObj[key as keyof T] === value);
    return key ? enumObj[key as keyof T] : undefined;
  }).filter((value): value is T[keyof T] => value !== undefined);
}