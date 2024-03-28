import { Order } from "../../domain/order";
import { ShippingRelease } from "../../domain/shipping-release";
import { OrderRepository } from "../services/order-repository";

export class FetchShippingReleases {
  private readonly orderRepository: OrderRepository;

  constructor(
    orderRepository: OrderRepository,
  ) {
    this.orderRepository = orderRepository;
  }

  async execute() {
    console.log('Fetching shipping releases');
  }
}
