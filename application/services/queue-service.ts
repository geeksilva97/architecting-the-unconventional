export interface QueueService {
  enqueue<T>(queueName: string, jobDefinition: {
    name: string,
    data: T
  }): Promise<void>;
  addQueue(queueName: string): void;
  addWorker(queueName: string, fn: (job: any) => Promise<any>): void;
}
