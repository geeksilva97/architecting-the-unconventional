import { Order } from '../../domain/order';

// file: services/order-repository.ts
export interface OrderRepository {
  store(order: Order.Type): Promise<void>;
  findById(orderId: string): Promise<Order.Type | null>;
  getNextId(): string;
}
