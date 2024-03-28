import IORedis from 'ioredis';

export const makeRedisConnection = () => {
  return new IORedis({
    maxRetriesPerRequest: null
  });
};
