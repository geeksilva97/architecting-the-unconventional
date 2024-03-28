import {
  Queue, Worker, FlowProducer, JobsOptions
} from 'bullmq';
import IORedis from 'ioredis';
import { QueueService } from '../application/services/queue-service';

export class BullMQQueueService implements QueueService {
  private readonly redisConnection: IORedis;
  private queues: Record<string, Queue> = {};
  private workers: Record<string, Worker> = {};

  constructor(redisConnection: IORedis, prefix?: string) {
    this.redisConnection = redisConnection;
  }

  getQueues<Queue>(): Queue[] {
    return Object.values(this.queues) as Queue[];
  }

  async ready() {
    return await this.redisConnection.ping() === 'PONG';
  }

  async enqueue<T>(queueName: string, jobDefinition: { name: string; data: T; }): Promise<void> {
    const queue = this.queues[queueName];

    await queue.add(jobDefinition.name,
      jobDefinition.data
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
