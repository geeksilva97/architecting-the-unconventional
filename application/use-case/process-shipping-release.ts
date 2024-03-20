import { Order } from "../../domain/order";
import { ShippingRelease } from "../../domain/shipping-release";
import { OrderRepository } from "../services/order-repository";
import { QueueService } from "../services/queue-service";
import { ShippingReleaseService } from "../services/shipping-release-service";

type ShippinReleaseDTO = {};

export class ProcessShippingRelease {
  private readonly shippingReleaseService: ShippingReleaseService;
  private readonly orderRepository: OrderRepository;

  constructor(
    shippingReleasesService: ShippingReleaseService,
    orderRepository: OrderRepository,
  ) {
    this.shippingReleaseService = shippingReleasesService;
    this.orderRepository = orderRepository;
  }

  async execute(payload: ShippinReleaseDTO) {
    const shippingRelease = ShippingRelease.create(payload);

    if (!ShippingRelease.isProcessable(shippingRelease)) return 'shipping release is not processable';

    const orderId = 'some-uuid';
    const order = Order.create({
      id: orderId,
      storeId: shippingRelease.storeId,
      shippingReleaseId: shippingRelease.id
    });

    await this.orderRepository.store(order);

    // await this.queueService.enqueue('trigger-shipment', {
    //   name: 'trigger-shipment',
    //   data: {
    //     shippingReleaseId: shippingRelease.id
    //   }
    // });
  }
}
