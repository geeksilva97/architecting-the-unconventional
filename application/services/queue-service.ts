export interface QueueService {
  enqueue<T>(queueName: string, jobDefinition: {
    name: string,
    data: T
  }): Promise<string>;
}
