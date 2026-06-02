import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  CORS_ORIGIN: z.string().min(1).optional(),
  SUPABASE_URL: z.url(),
  SUPABASE_KEY: z.string().min(1),
  SUPABASE_ANON_KEY: z.string().min(1).optional(),
  JWT_SECRET: z.string().min(32),
  BREVO_API_KEY: z.string().min(1).optional(),
  BREVO_FROM_NAME: z.string().min(1).optional(),
});

export type EnvConfig = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): EnvConfig {
  const parsed = envSchema.safeParse(config);

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');

    throw new Error(`Invalid environment variables: ${issues}`);
  }

  return parsed.data;
}
