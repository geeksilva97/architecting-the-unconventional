import { FetchShippingReleases } from "./application/use-case/fetch-shipping-releases";
import { ProcessShippingRelease } from "./application/use-case/process-shipping-release";
import { BullMQQueueService } from "./infrastructure/bullmq-queue-service";
import { InMemoryOrderRepository } from "./infrastructure/inmemory-order-repository";
import { makeRedisConnection } from "./shared/redis";

const redisConnection = makeRedisConnection();
const orderRepository = new InMemoryOrderRepository();

const container = {
  redisConnection,
  queueService: new BullMQQueueService(redisConnection),
  processShippingReleaseUseCase: new ProcessShippingRelease(orderRepository),
  fetchShippingReleasesUseCase: new FetchShippingReleases(orderRepository)
}

type Container = typeof container;

export { container };
export type { Container };
