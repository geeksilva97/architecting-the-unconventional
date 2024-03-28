import { QueueService } from "../../application/services/queue-service";
import { shippingReleaseWorker } from "./shipping-release-worker";

export const startWorkers = (queueService: QueueService) => {
  shippingReleaseWorker(queueService);
};
