import { v4 as uuidv4 } from 'uuid';
export class salesOrderItem{
    constructor(orderId, productId, quantity, price) {
        this._orderId = orderId;
        this._itemId = uuidv4();
        this._productId = productId;
        this._quantity = quantity;
        this._price = price;
    }

    get orderId() {
        return this._orderId;
    }

    get productId() {
        return this._productId;
    }

    get quantity() {
        return this._quantity;
    }

    get price() {
        return this._price;
    }

    get itemId() {
        return this._itemId;
    }

    calculateItemPrice = () => this._quantity * this._price;
}