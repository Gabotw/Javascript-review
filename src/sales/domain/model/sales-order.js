import { v4 as uuidv4 } from 'uuid';
import { SalesOrderItem } from './sales-order-item';
export class SalesOrder {
  constructor(customerId) {
    this._id = uuidv4();
    this._customerId = customerId;
    this._items = [];
  }

  get customerId() {
    return this._customerId;
  }

  get id() {
    return this._id;
  }
  addItem(product, quantity, unitPrice) {
    this._items.push(new SalesOrderItem(this._id, product, quantity, unitPrice));
  }
  calculateTotalPrice(){
    return this._items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  }
}