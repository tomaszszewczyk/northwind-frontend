export class Order {
  orderID: number;
  customerID: string;
  employeeID: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  orderDetails: OrderDetail[];
}

export class OrderDetail {
  productID: number;
  unitPrice: number;
  quantity: number;
  discount: number;
}
