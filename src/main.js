import {SalesOrder} from "./sales/domain/model/sales-order";

console.log('Hello Vue Developer!');

const salesOrder = new SalesOrder("C001");
console.log(`Sales Order Customer is ${salesOrder.customerId}`);
salesOrder.addItem("P001", 2, 100);
salesOrder.addItem("P002", 3, 200);

console.log(`Sales Order Total Price is ${salesOrder.calculateTotalPrice()}`);