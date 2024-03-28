import { QueueService } from "../application/services/queue-service";
import { startWorkers } from "../interface/task-runner-arch";

export const QUEUE_NAMES = {
  FETCH_SHIPPING_RELEASE: 'FETCH_SHIPPING_RELEASE',
  PROCESS_SHIPPING_RELEASE: 'PROCESS_SHIPPING_RELEASE'
};

export const startQueues = async (queueService: QueueService) => {
  for (const queueName of Object.values(QUEUE_NAMES)) {
    queueService.addQueue(queueName);
    console.log(`queue ${queueName} started`)
  }

  startWorkers(queueService);
};
