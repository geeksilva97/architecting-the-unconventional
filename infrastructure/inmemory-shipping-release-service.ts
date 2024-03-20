import { OrderRepository } from "../application/services/order-repository";
import uuid from 'uuid';
import { Order } from "../domain/order";

class InMemoryOrderRepository implements OrderRepository {
  private orders: Record<string, Order.Type> = {};

  getNextId(): string {
    return uuid.v4();
  }

  async findById(orderId: string) {
    return this.orders[orderId];
  }

  async store(orderEntity: Order.Type) {
    this.orders[orderEntity.id] = orderEntity;
  }
}

const makeInMemoryOrderRepository = () => new InMemoryOrderRepository();

export {
  makeInMemoryOrderRepository
};
