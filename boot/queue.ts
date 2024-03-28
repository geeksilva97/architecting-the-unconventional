import { QueueService } from "../application/services/queue-service";

export const QUEUE_NAMES = {
  FETCH_SHIPPING_RELEASE: 'FETCH_SHIPPING_RELEASE',
  PROCESS_SHIPPING_RELEASE: 'PROCESS_SHIPPING_RELEASE'
};

export const startQueues = async (queueService: QueueService) => {
  for (const queueName of Object.values(QUEUE_NAMES)) {
    queueService.addQueue(queueName);
  }
};
