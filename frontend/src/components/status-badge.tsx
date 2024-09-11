import { OrderStatus } from "@/api/list-orders";

interface StatusBadgeProps {
  status: OrderStatus;
}

const statusStyles = new Map<OrderStatus, { bgColor: string; textColor: string; dotColor: string }>([
  [OrderStatus.PENDING, { bgColor: 'bg-yellow-100', textColor: 'text-yellow-800', dotColor: 'bg-yellow-600' }], 
  [OrderStatus.SHIPPED, { bgColor: 'bg-blue-100', textColor: 'text-blue-800', dotColor: 'bg-blue-600' }],       
  [OrderStatus.CANCELED, { bgColor: 'bg-gray-100', textColor: 'text-gray-800', dotColor: 'bg-gray-600' }],     
  [OrderStatus.RETURNED, { bgColor: 'bg-red-100', textColor: 'text-red-800', dotColor: 'bg-red-600' }],        
  [OrderStatus.REFUNDED, { bgColor: 'bg-green-100', textColor: 'text-green-800', dotColor: 'bg-green-600' }],
  [OrderStatus.DELIVERED, { bgColor: 'bg-purple-100', textColor: 'text-purple-800', dotColor: 'bg-purple-600' }],
  [OrderStatus.PROCESSING, { bgColor: 'bg-orange-100', textColor: 'text-orange-800', dotColor: 'bg-orange-600' }],
]);

const capitalizeFirstLetter = (status: string) => status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const defaultStyles = { bgColor: 'bg-gray-100', textColor: 'text-gray-800', dotColor: 'bg-gray-600' };
  const { bgColor, textColor, dotColor } = statusStyles.get(status) || defaultStyles;

  return (
    <div className={`flex justify-center items-center w-1/4 gap-2 px-2 py-1 rounded-md ${bgColor} ${textColor}`}>
      <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
      <span className="text-sm font-medium">{capitalizeFirstLetter(status)}</span>
    </div>
  );
};
