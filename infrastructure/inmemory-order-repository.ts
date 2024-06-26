import { OrderRepository } from "../application/services/order-repository";
import { v4 } from 'uuid';
import { Order } from "../domain/order";

// file: infrastructure/inmemory-order-repository.ts
export class InMemoryOrderRepository implements OrderRepository {
  private orders: Record<string, Order.Type> = {};

  getNextId(): string {
    return v4();
  }

  findById(orderId: string) {
    return Promise.resolve(this.orders[orderId]);
  }

  store(orderEntity: Order.Type) {
    this.orders[orderEntity.id] = orderEntity;

    return Promise.resolve();
  }
}
