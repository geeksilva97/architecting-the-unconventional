import { QueueService } from "../application/services/queue-service";
import { BullMQQueueService } from "../infrastructure/bullmq-queue-service";
import { startWorkers } from "../interface/task-runner-arch";
import cron from 'node-cron';

export const QUEUE_NAMES = {
  FETCH_SHIPPING_RELEASE: 'FETCH_SHIPPING_RELEASE',
  PROCESS_SHIPPING_RELEASE: 'PROCESS_SHIPPING_RELEASE'
};

export const startQueues = async (queueService: BullMQQueueService) => {
  const isReady = await queueService.ready();

  if (!isReady) throw 'could not start the queuemanager';

  for (const queueName of Object.values(QUEUE_NAMES)) {
    queueService.addQueue(queueName);

    console.log(`queue ${queueName} started`)
  }

  startWorkers(queueService);

  fetchShippingReleasesCron(queueService);
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
