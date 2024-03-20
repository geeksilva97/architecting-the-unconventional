import { QueueService } from '../../../application/services/queue-service';
import { Job } from 'bullmq';

export const shippingReleaseWorker = (queueService: QueueService) => {
  queueService.addWorker('PROCESS_SHIPPING_RELEASE', async (job: Job) => {});
};
