import { Queue } from "bullmq";
import { QueueService } from "../application/services/queue-service";
import { BullMQQueueService } from "../infrastructure/bullmq-queue-service";
import { startQueues, startWorkers } from "../interface/task-runner-arch";
import cron from 'node-cron';

export const QUEUE_NAMES: Record<string, string> = {
  FETCH_SHIPPING_RELEASE: 'FETCH_SHIPPING_RELEASE',
  PROCESS_SHIPPING_RELEASE: 'PROCESS_SHIPPING_RELEASE'
};

export const initializeTaskRunnerInterface = async (queueService: BullMQQueueService) => {
  const isReady = await queueService.ready();

  if (!isReady) throw 'could not start the queuemanager';

  startQueues(QUEUE_NAMES, queueService);

  startWorkers(queueService);

  fetchShippingReleasesCron(queueService);

  return queueService.getQueues<Queue>();
};

const fetchShippingReleasesCron = (queueService: QueueService) => {
  cron.schedule('*/1 * * * *', async () => {
    await queueService.enqueue(QUEUE_NAMES.FETCH_SHIPPING_RELEASE, {
      name: 'fetch-shipping-release',
      data: null
    })
  }, {
    runOnInit: true
  });
};
