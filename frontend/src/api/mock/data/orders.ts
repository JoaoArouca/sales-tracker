import { Order, OrderStatus } from "../../list-orders";

export const mockOrders: Order[] = [
  {
    id: '1',
    customerId: 'cust_1',
    amount: 120.50,
    status: OrderStatus.PENDING,
    createdAt: '2023-08-01T10:15:00Z',
    items: [
      {
        id: 'item_1',
        productId: 'prod_1',
        quantity: 2,
        currentPrice: 60.25,
        totalPrice: 120.50
      }
    ]
  },
  {
    id: '2',
    customerId: 'cust_2',
    amount: 89.99,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-08-02T11:00:00Z',
    items: [
      {
        id: 'item_2',
        productId: 'prod_2',
        quantity: 1,
        currentPrice: 89.99,
        totalPrice: 89.99
      }
    ]
  },
  {
    id: '3',
    customerId: 'cust_3',
    amount: 299.99,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-08-03T14:45:00Z',
    items: [
      {
        id: 'item_3',
        productId: 'prod_3',
        quantity: 1,
        currentPrice: 299.99,
        totalPrice: 299.99
      }
    ]
  },
  {
    id: '4',
    customerId: 'cust_4',
    amount: 45.00,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-08-04T09:30:00Z',
    items: [
      {
        id: 'item_4',
        productId: 'prod_4',
        quantity: 3,
        currentPrice: 15.00,
        totalPrice: 45.00
      }
    ]
  },
  {
    id: '5',
    customerId: 'cust_5',
    amount: 78.75,
    status: OrderStatus.CANCELED,
    createdAt: '2023-08-05T13:20:00Z',
    items: [
      {
        id: 'item_5',
        productId: 'prod_5',
        quantity: 5,
        currentPrice: 15.75,
        totalPrice: 78.75
      }
    ]
  },
  {
    id: '6',
    customerId: 'cust_6',
    amount: 59.99,
    status: OrderStatus.RETURNED,
    createdAt: '2023-08-06T16:10:00Z',
    items: [
      {
        id: 'item_6',
        productId: 'prod_6',
        quantity: 1,
        currentPrice: 59.99,
        totalPrice: 59.99
      }
    ]
  },
  {
    id: '7',
    customerId: 'cust_7',
    amount: 250.00,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-08-07T12:00:00Z',
    items: [
      {
        id: 'item_7',
        productId: 'prod_7',
        quantity: 2,
        currentPrice: 125.00,
        totalPrice: 250.00
      }
    ]
  },
  {
    id: '8',
    customerId: 'cust_8',
    amount: 149.99,
    status: OrderStatus.PENDING,
    createdAt: '2023-08-08T08:50:00Z',
    items: [
      {
        id: 'item_8',
        productId: 'prod_8',
        quantity: 1,
        currentPrice: 149.99,
        totalPrice: 149.99
      }
    ]
  },
  {
    id: '9',
    customerId: 'cust_9',
    amount: 399.99,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-08-09T15:40:00Z',
    items: [
      {
        id: 'item_9',
        productId: 'prod_9',
        quantity: 1,
        currentPrice: 399.99,
        totalPrice: 399.99
      }
    ]
  },
  {
    id: '10',
    customerId: 'cust_10',
    amount: 99.95,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-08-10T10:00:00Z',
    items: [
      {
        id: 'item_10',
        productId: 'prod_10',
        quantity: 2,
        currentPrice: 49.98,
        totalPrice: 99.95
      }
    ]
  },
  {
    id: '11',
    customerId: 'cust_11',
    amount: 19.99,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-08-11T14:00:00Z',
    items: [
      {
        id: 'item_11',
        productId: 'prod_11',
        quantity: 1,
        currentPrice: 19.99,
        totalPrice: 19.99
      }
    ]
  },
  {
    id: '12',
    customerId: 'cust_12',
    amount: 49.99,
    status: OrderStatus.CANCELED,
    createdAt: '2023-08-12T12:45:00Z',
    items: [
      {
        id: 'item_12',
        productId: 'prod_12',
        quantity: 1,
        currentPrice: 49.99,
        totalPrice: 49.99
      }
    ]
  },
  {
    id: '13',
    customerId: 'cust_13',
    amount: 239.50,
    status: OrderStatus.RETURNED,
    createdAt: '2023-08-13T16:30:00Z',
    items: [
      {
        id: 'item_13',
        productId: 'prod_13',
        quantity: 2,
        currentPrice: 119.75,
        totalPrice: 239.50
      }
    ]
  },
  {
    id: '14',
    customerId: 'cust_14',
    amount: 120.00,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-08-14T13:30:00Z',
    items: [
      {
        id: 'item_14',
        productId: 'prod_14',
        quantity: 3,
        currentPrice: 40.00,
        totalPrice: 120.00
      }
    ]
  },
  {
    id: '15',
    customerId: 'cust_15',
    amount: 89.50,
    status: OrderStatus.PENDING,
    createdAt: '2023-08-15T09:00:00Z',
    items: [
      {
        id: 'item_15',
        productId: 'prod_15',
        quantity: 2,
        currentPrice: 44.75,
        totalPrice: 89.50
      }
    ]
  }
];
