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
  },
  {
    id: '16',
    customerId: 'cust_16',
    amount: 130.00,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-08-16T11:15:00Z',
    items: [
      {
        id: 'item_16',
        productId: 'prod_16',
        quantity: 3,
        currentPrice: 43.33,
        totalPrice: 130.00
      }
    ]
  },
  {
    id: '17',
    customerId: 'cust_17',
    amount: 220.75,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-08-17T14:00:00Z',
    items: [
      {
        id: 'item_17',
        productId: 'prod_17',
        quantity: 2,
        currentPrice: 110.38,
        totalPrice: 220.75
      }
    ]
  },
  {
    id: '18',
    customerId: 'cust_18',
    amount: 75.00,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-08-18T16:30:00Z',
    items: [
      {
        id: 'item_18',
        productId: 'prod_18',
        quantity: 1,
        currentPrice: 75.00,
        totalPrice: 75.00
      }
    ]
  },
  {
    id: '19',
    customerId: 'cust_19',
    amount: 95.25,
    status: OrderStatus.CANCELED,
    createdAt: '2023-08-19T12:15:00Z',
    items: [
      {
        id: 'item_19',
        productId: 'prod_19',
        quantity: 3,
        currentPrice: 31.75,
        totalPrice: 95.25
      }
    ]
  },
  {
    id: '20',
    customerId: 'cust_20',
    amount: 159.99,
    status: OrderStatus.RETURNED,
    createdAt: '2023-08-20T10:00:00Z',
    items: [
      {
        id: 'item_20',
        productId: 'prod_20',
        quantity: 1,
        currentPrice: 159.99,
        totalPrice: 159.99
      }
    ]
  },
  {
    id: '21',
    customerId: 'cust_21',
    amount: 210.00,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-08-21T15:00:00Z',
    items: [
      {
        id: 'item_21',
        productId: 'prod_21',
        quantity: 2,
        currentPrice: 105.00,
        totalPrice: 210.00
      }
    ]
  },
  {
    id: '22',
    customerId: 'cust_22',
    amount: 53.49,
    status: OrderStatus.PENDING,
    createdAt: '2023-08-22T13:45:00Z',
    items: [
      {
        id: 'item_22',
        productId: 'prod_22',
        quantity: 1,
        currentPrice: 53.49,
        totalPrice: 53.49
      }
    ]
  },
  {
    id: '23',
    customerId: 'cust_23',
    amount: 125.50,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-08-23T16:00:00Z',
    items: [
      {
        id: 'item_23',
        productId: 'prod_23',
        quantity: 2,
        currentPrice: 62.75,
        totalPrice: 125.50
      }
    ]
  },
  {
    id: '24',
    customerId: 'cust_24',
    amount: 40.00,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-08-24T09:30:00Z',
    items: [
      {
        id: 'item_24',
        productId: 'prod_24',
        quantity: 2,
        currentPrice: 20.00,
        totalPrice: 40.00
      }
    ]
  },
  {
    id: '25',
    customerId: 'cust_25',
    amount: 95.99,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-08-25T11:20:00Z',
    items: [
      {
        id: 'item_25',
        productId: 'prod_25',
        quantity: 1,
        currentPrice: 95.99,
        totalPrice: 95.99
      }
    ]
  },
  {
    id: '26',
    customerId: 'cust_26',
    amount: 179.75,
    status: OrderStatus.CANCELED,
    createdAt: '2023-08-26T13:30:00Z',
    items: [
      {
        id: 'item_26',
        productId: 'prod_26',
        quantity: 2,
        currentPrice: 89.87,
        totalPrice: 179.75
      }
    ]
  },
  {
    id: '27',
    customerId: 'cust_27',
    amount: 65.00,
    status: OrderStatus.RETURNED,
    createdAt: '2023-08-27T15:00:00Z',
    items: [
      {
        id: 'item_27',
        productId: 'prod_27',
        quantity: 1,
        currentPrice: 65.00,
        totalPrice: 65.00
      }
    ]
  },
  {
    id: '28',
    customerId: 'cust_28',
    amount: 142.00,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-08-28T12:30:00Z',
    items: [
      {
        id: 'item_28',
        productId: 'prod_28',
        quantity: 4,
        currentPrice: 35.50,
        totalPrice: 142.00
      }
    ]
  },
  {
    id: '29',
    customerId: 'cust_29',
    amount: 88.88,
    status: OrderStatus.PENDING,
    createdAt: '2023-08-29T14:00:00Z',
    items: [
      {
        id: 'item_29',
        productId: 'prod_29',
        quantity: 1,
        currentPrice: 88.88,
        totalPrice: 88.88
      }
    ]
  },
  {
    id: '30',
    customerId: 'cust_30',
    amount: 199.99,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-08-30T16:15:00Z',
    items: [
      {
        id: 'item_30',
        productId: 'prod_30',
        quantity: 1,
        currentPrice: 199.99,
        totalPrice: 199.99
      }
    ]
  },
  {
    id: '31',
    customerId: 'cust_31',
    amount: 57.50,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-08-31T09:30:00Z',
    items: [
      {
        id: 'item_31',
        productId: 'prod_31',
        quantity: 2,
        currentPrice: 28.75,
        totalPrice: 57.50
      }
    ]
  },
  {
    id: '32',
    customerId: 'cust_32',
    amount: 82.00,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-09-01T11:00:00Z',
    items: [
      {
        id: 'item_32',
        productId: 'prod_32',
        quantity: 1,
        currentPrice: 82.00,
        totalPrice: 82.00
      }
    ]
  },
  {
    id: '33',
    customerId: 'cust_33',
    amount: 120.50,
    status: OrderStatus.CANCELED,
    createdAt: '2023-09-02T13:15:00Z',
    items: [
      {
        id: 'item_33',
        productId: 'prod_33',
        quantity: 3,
        currentPrice: 40.17,
        totalPrice: 120.50
      }
    ]
  },
  {
    id: '34',
    customerId: 'cust_34',
    amount: 73.75,
    status: OrderStatus.RETURNED,
    createdAt: '2023-09-03T14:30:00Z',
    items: [
      {
        id: 'item_34',
        productId: 'prod_34',
        quantity: 1,
        currentPrice: 73.75,
        totalPrice: 73.75
      }
    ]
  },
  {
    id: '35',
    customerId: 'cust_35',
    amount: 155.00,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-09-04T10:00:00Z',
    items: [
      {
        id: 'item_35',
        productId: 'prod_35',
        quantity: 5,
        currentPrice: 31.00,
        totalPrice: 155.00
      }
    ]
  },
  {
    id: '36',
    customerId: 'cust_36',
    amount: 95.95,
    status: OrderStatus.PENDING,
    createdAt: '2023-09-05T12:00:00Z',
    items: [
      {
        id: 'item_36',
        productId: 'prod_36',
        quantity: 1,
        currentPrice: 95.95,
        totalPrice: 95.95
      }
    ]
  },
  {
    id: '37',
    customerId: 'cust_37',
    amount: 188.00,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-09-06T14:45:00Z',
    items: [
      {
        id: 'item_37',
        productId: 'prod_37',
        quantity: 2,
        currentPrice: 94.00,
        totalPrice: 188.00
      }
    ]
  },
  {
    id: '38',
    customerId: 'cust_38',
    amount: 29.99,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-09-07T16:30:00Z',
    items: [
      {
        id: 'item_38',
        productId: 'prod_38',
        quantity: 1,
        currentPrice: 29.99,
        totalPrice: 29.99
      }
    ]
  },
  {
    id: '39',
    customerId: 'cust_39',
    amount: 78.50,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-09-08T11:00:00Z',
    items: [
      {
        id: 'item_39',
        productId: 'prod_39',
        quantity: 2,
        currentPrice: 39.25,
        totalPrice: 78.50
      }
    ]
  },
  {
    id: '40',
    customerId: 'cust_40',
    amount: 67.99,
    status: OrderStatus.CANCELED,
    createdAt: '2023-09-09T12:30:00Z',
    items: [
      {
        id: 'item_40',
        productId: 'prod_40',
        quantity: 1,
        currentPrice: 67.99,
        totalPrice: 67.99
      }
    ]
  },
  {
    id: '41',
    customerId: 'cust_41',
    amount: 182.00,
    status: OrderStatus.RETURNED,
    createdAt: '2023-09-10T15:00:00Z',
    items: [
      {
        id: 'item_41',
        productId: 'prod_41',
        quantity: 2,
        currentPrice: 91.00,
        totalPrice: 182.00
      }
    ]
  },
  {
    id: '42',
    customerId: 'cust_42',
    amount: 130.50,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-09-11T13:00:00Z',
    items: [
      {
        id: 'item_42',
        productId: 'prod_42',
        quantity: 2,
        currentPrice: 65.25,
        totalPrice: 130.50
      }
    ]
  },
  {
    id: '43',
    customerId: 'cust_43',
    amount: 91.00,
    status: OrderStatus.PENDING,
    createdAt: '2023-09-12T14:30:00Z',
    items: [
      {
        id: 'item_43',
        productId: 'prod_43',
        quantity: 1,
        currentPrice: 91.00,
        totalPrice: 91.00
      }
    ]
  },
  {
    id: '44',
    customerId: 'cust_44',
    amount: 142.50,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-09-13T16:00:00Z',
    items: [
      {
        id: 'item_44',
        productId: 'prod_44',
        quantity: 3,
        currentPrice: 47.50,
        totalPrice: 142.50
      }
    ]
  },
  {
    id: '45',
    customerId: 'cust_45',
    amount: 55.75,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-09-14T09:30:00Z',
    items: [
      {
        id: 'item_45',
        productId: 'prod_45',
        quantity: 1,
        currentPrice: 55.75,
        totalPrice: 55.75
      }
    ]
  },
  {
    id: '46',
    customerId: 'cust_46',
    amount: 68.99,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-09-15T11:15:00Z',
    items: [
      {
        id: 'item_46',
        productId: 'prod_46',
        quantity: 2,
        currentPrice: 34.50,
        totalPrice: 68.99
      }
    ]
  },
  {
    id: '47',
    customerId: 'cust_47',
    amount: 102.00,
    status: OrderStatus.CANCELED,
    createdAt: '2023-09-16T12:00:00Z',
    items: [
      {
        id: 'item_47',
        productId: 'prod_47',
        quantity: 1,
        currentPrice: 102.00,
        totalPrice: 102.00
      }
    ]
  },
  {
    id: '48',
    customerId: 'cust_48',
    amount: 45.50,
    status: OrderStatus.RETURNED,
    createdAt: '2023-09-17T13:30:00Z',
    items: [
      {
        id: 'item_48',
        productId: 'prod_48',
        quantity: 1,
        currentPrice: 45.50,
        totalPrice: 45.50
      }
    ]
  },
  {
    id: '49',
    customerId: 'cust_49',
    amount: 234.75,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-09-18T14:45:00Z',
    items: [
      {
        id: 'item_49',
        productId: 'prod_49',
        quantity: 3,
        currentPrice: 78.25,
        totalPrice: 234.75
      }
    ]
  },
  {
    id: '50',
    customerId: 'cust_50',
    amount: 88.00,
    status: OrderStatus.PENDING,
    createdAt: '2023-09-19T16:00:00Z',
    items: [
      {
        id: 'item_50',
        productId: 'prod_50',
        quantity: 1,
        currentPrice: 88.00,
        totalPrice: 88.00
      }
    ]
  },
  {
    id: '51',
    customerId: 'cust_51',
    amount: 132.00,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-09-20T10:30:00Z',
    items: [
      {
        id: 'item_51',
        productId: 'prod_51',
        quantity: 2,
        currentPrice: 66.00,
        totalPrice: 132.00
      }
    ]
  },
  {
    id: '52',
    customerId: 'cust_52',
    amount: 40.75,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-09-21T12:00:00Z',
    items: [
      {
        id: 'item_52',
        productId: 'prod_52',
        quantity: 1,
        currentPrice: 40.75,
        totalPrice: 40.75
      }
    ]
  },
  {
    id: '53',
    customerId: 'cust_53',
    amount: 159.99,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-09-22T14:15:00Z',
    items: [
      {
        id: 'item_53',
        productId: 'prod_53',
        quantity: 1,
        currentPrice: 159.99,
        totalPrice: 159.99
      }
    ]
  },
  {
    id: '54',
    customerId: 'cust_54',
    amount: 125.00,
    status: OrderStatus.CANCELED,
    createdAt: '2023-09-23T15:30:00Z',
    items: [
      {
        id: 'item_54',
        productId: 'prod_54',
        quantity: 2,
        currentPrice: 62.50,
        totalPrice: 125.00
      }
    ]
  },
  {
    id: '55',
    customerId: 'cust_55',
    amount: 95.00,
    status: OrderStatus.RETURNED,
    createdAt: '2023-09-24T13:00:00Z',
    items: [
      {
        id: 'item_55',
        productId: 'prod_55',
        quantity: 1,
        currentPrice: 95.00,
        totalPrice: 95.00
      }
    ]
  },
  {
    id: '56',
    customerId: 'cust_56',
    amount: 72.25,
    status: OrderStatus.REFUNDED,
    createdAt: '2023-09-25T10:00:00Z',
    items: [
      {
        id: 'item_56',
        productId: 'prod_56',
        quantity: 2,
        currentPrice: 36.12,
        totalPrice: 72.25
      }
    ]
  },
  {
    id: '57',
    customerId: 'cust_57',
    amount: 147.00,
    status: OrderStatus.PENDING,
    createdAt: '2023-09-26T11:30:00Z',
    items: [
      {
        id: 'item_57',
        productId: 'prod_57',
        quantity: 3,
        currentPrice: 49.00,
        totalPrice: 147.00
      }
    ]
  },
  {
    id: '58',
    customerId: 'cust_58',
    amount: 81.75,
    status: OrderStatus.PROCESSING,
    createdAt: '2023-09-27T13:00:00Z',
    items: [
      {
        id: 'item_58',
        productId: 'prod_58',
        quantity: 2,
        currentPrice: 40.88,
        totalPrice: 81.75
      }
    ]
  },
  {
    id: '59',
    customerId: 'cust_59',
    amount: 29.99,
    status: OrderStatus.SHIPPED,
    createdAt: '2023-09-28T14:00:00Z',
    items: [
      {
        id: 'item_59',
        productId: 'prod_59',
        quantity: 1,
        currentPrice: 29.99,
        totalPrice: 29.99
      }
    ]
  },
  {
    id: '60',
    customerId: 'cust_60',
    amount: 159.00,
    status: OrderStatus.DELIVERED,
    createdAt: '2023-09-29T15:00:00Z',
    items: [
      {
        id: 'item_60',
        productId: 'prod_60',
        quantity: 1,
        currentPrice: 159.00,
        totalPrice: 159.00
      }
    ]
  }
];
