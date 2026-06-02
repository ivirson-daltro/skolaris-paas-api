import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env.validation';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService<EnvConfig, true>) {}

  get nodeEnv(): EnvConfig['NODE_ENV'] {
    return this.configService.get('NODE_ENV', { infer: true });
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get port(): number {
    return this.configService.get('PORT', { infer: true });
  }

  get supabaseUrl(): string {
    return this.configService.get('SUPABASE_URL', { infer: true });
  }

  get supabaseKey(): string {
    return this.configService.get('SUPABASE_KEY', {
      infer: true,
    });
  }

  get jwtSecret(): string {
    return this.configService.get('JWT_SECRET', { infer: true });
  }

  get brevoFromName(): string | undefined {
    return this.configService.get('BREVO_FROM_NAME', { infer: true });
  }

  get brevoApiKey(): string | undefined {
    return this.configService.get('BREVO_API_KEY', { infer: true });
  }
}
