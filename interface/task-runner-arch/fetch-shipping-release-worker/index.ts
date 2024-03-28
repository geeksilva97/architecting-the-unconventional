import { QueueService } from '../../../application/services/queue-service';
import { Job } from 'bullmq';
import { container } from '../../../container';
import { QUEUE_NAMES } from '../../../boot/queue';

const fetchShippingReleasesWorkerHandler = async (job: Job): Promise<unknown> => {
  // validation and error handling omitted

  await container.fetchShippingReleasesUseCase.execute();

  return 'task finished';
};

export const fetchShippingReleasesWorker = (queueService: QueueService) => {
  queueService.addWorker(QUEUE_NAMES.FETCH_SHIPPING_RELEASE, fetchShippingReleasesWorkerHandler);

  console.log(`fetching shipping release worker started`)
};
