import { FetchShippingReleases } from "./application/use-case/fetch-shipping-releases";
import { ProcessShippingRelease } from "./application/use-case/process-shipping-release";
import { BullMQQueueService } from "./infrastructure/bullmq-queue-service";
import { InMemoryOrderRepository } from "./infrastructure/inmemory-order-repository";
import { makeRedisConnection } from "./shared/redis";

const redisConnection = makeRedisConnection();
const orderRepository = new InMemoryOrderRepository();
const queueService =  new BullMQQueueService(redisConnection);

const container = {
  redisConnection,
  queueService,
  processShippingReleaseUseCase: new ProcessShippingRelease(orderRepository),
  fetchShippingReleasesUseCase: new FetchShippingReleases(queueService)
}

type Container = typeof container;

export { container };
export type { Container };
