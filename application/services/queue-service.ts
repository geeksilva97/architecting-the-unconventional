export interface QueueService {
  enqueue(queueName: string, jobData: unknown): null;
}
