import { QueueService } from '../../../application/services/queue-service';
import { Job } from 'bullmq';
import { container } from '../../../container';

const processShippingReleaseWorkerHandler = async (job: Job): Promise<unknown> => {
  // validation and error handling omitted

  await container.processShippingReleaseUseCase.execute(job.data);

  return 'task finished';
};

export const shippingReleaseWorker = (queueService: QueueService) => {
  queueService.addWorker('PROCESS_SHIPPING_RELEASE', processShippingReleaseWorkerHandler);
};
