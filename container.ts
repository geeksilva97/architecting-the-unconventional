import { BullMQQueueService } from "./infrastructure/bullmq-queue-service";
import { makeRedisConnection } from "./shared/redis";

const redisConnection = makeRedisConnection();

const container = {
  redisConnection,
  queueService: new BullMQQueueService(redisConnection)
}

type Container = typeof container;

export { container };
export type { Container };
