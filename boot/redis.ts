import IORedis from 'ioredis';

export const makeRedisConnection = async () => {
  const redisConnection = new IORedis({
    maxRetriesPerRequest: null,
    enableReadyCheck: true
  });

  const isReady = await redisConnection.ping() === 'PONG';

  if (!isReady) throw 'Unable not connect to Redis';

  return redisConnection;
};
