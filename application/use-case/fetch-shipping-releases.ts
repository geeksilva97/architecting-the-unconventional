import { QUEUE_NAMES } from "../../boot/queue";
import { Order } from "../../domain/order";
import { ShippingRelease } from "../../domain/shipping-release";
import { OrderRepository } from "../services/order-repository";
import { QueueService } from "../services/queue-service";

export class FetchShippingReleases {
  private readonly queueService: QueueService;

  constructor(
    queueService: QueueService,
  ) {
    this.queueService = queueService;
  }

  async execute() {
    console.log('Fetching shipping releases');

    for (let i = 0; i < 3; i++) {
      await this.queueService.enqueue(QUEUE_NAMES.PROCESS_SHIPPING_RELEASE, {
        name: 'process-shipping-release',
        data: {
          id: `shipping-release-${i}`,
          storeId: `store-${i}`,
          status: 'READY',
          items: [
            {sku: 'sku1', qty: 1}
          ]
        }
      })
    }

    console.log('enqueued jobs');
  }
}
