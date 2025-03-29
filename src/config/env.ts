import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string(),
  DATABASE_URL: z.string(),
  REDIS_URL: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  RABBITMQ_URL: z.string(),
  THIS_API_URL: z.string(),
});

const Env = envSchema.parse(process.env);

export { Env };
