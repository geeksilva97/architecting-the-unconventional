import {
  Queue, Worker, FlowProducer, JobsOptions
} from 'bullmq';
import IORedis from 'ioredis';

export class BullMQQueueService {
  private readonly redisConnection: IORedis;
  private queues: Record<string, Queue> = {};
  private workers: Record<string, Worker> = {};

  constructor(redisConnection: IORedis, prefix?: string) {
    this.redisConnection = redisConnection;
  }

  async enqueue(queueName: string, jobData: { name: string, data: unknown }) {
    const queue = this.queues[queueName];

    await queue.add(jobData.name,
      jobData.data
    );
  }

  addQueue(queueName: string) {
    const queue = new Queue(queueName,
      {
        connection: this.redisConnection,
      });

    this.queues[queueName] = queue;
  }

  addWorker(queueName: string, fn: (job: any) => Promise<any>): void {
    if (!this.queues[queueName]) {
      throw Error(`Queue ${queueName} does not exist.`);
    }

    const worker = new Worker(queueName,
      fn,
      {
        connection: this.redisConnection
      });

    this.workers[queueName] = worker;
  }
}
