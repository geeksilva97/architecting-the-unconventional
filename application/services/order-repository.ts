import { Order } from '../../domain/order';

export interface OrderRepository {
  store(order: Order.Type): any;
}
