import { QueueService } from "../../application/services/queue-service";
import { fetchShippingReleasesWorker } from "./fetch-shipping-release-worker";
import { shippingReleaseWorker } from "./shipping-release-worker";

export const startWorkers = (queueService: QueueService) => {
  shippingReleaseWorker(queueService);
  fetchShippingReleasesWorker(queueService);
};

export const startQueues = (queueNames: Record<string, string>, queueService: QueueService) => {
  for (const queueName of Object.values(queueNames)) {
    queueService.addQueue(queueName);

    console.log(`queue ${queueName} started`)
  }
};
