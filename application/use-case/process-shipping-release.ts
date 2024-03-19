import { ShippingRelease } from "../domain/shipping-release";
import { QueueService } from "../services/queue-service";

export class ProcessShippingRelease {
  private readonly queueService: QueueService;
  private readonly shippingReleaseService: ShippingReleaseService;

  constructor(
    shippingReleasesService: ShippingReleaseService,
    ordersRepository: OrderRepository,
    queueService: QueueService
  ) {
    this.queueService = queueService;
    this.shippingReleaseService = shippingReleasesService;
  }

  execute(shippingRelease: ShippingRelease.Type) {
    this.queueService.enqueue();
  }
}
