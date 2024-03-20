import { Order } from "../../domain/order";
import { ShippingRelease } from "../../domain/shipping-release";
import { OrderRepository } from "../services/order-repository";

type ShippingReleaseDTO = {};

export class ProcessShippingRelease {
  private readonly orderRepository: OrderRepository;

  constructor(
    orderRepository: OrderRepository,
  ) {
    this.orderRepository = orderRepository;
  }

  async execute(payload: ShippingReleaseDTO) {
    const shippingRelease = ShippingRelease.create(payload);

    if (!ShippingRelease.isProcessable(shippingRelease)) return 'shipping release is not processable';

    const orderId = this.orderRepository.getNextId();
    const order = Order.create({
      id: orderId,
      storeId: shippingRelease.storeId,
      shippingReleaseId: shippingRelease.id
    });

    await this.orderRepository.store(order);
  }
}
