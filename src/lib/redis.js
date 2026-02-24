import { Redis } from "@upstash/redis";

let redisInstance = null;

export function getRedis() {
  if (!redisInstance) {
    redisInstance = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return redisInstance;
}

export const redis = getRedis();
