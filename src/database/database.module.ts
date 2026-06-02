import { Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { AppConfigService } from 'src/config/app-config.service';
import { SUPABASE_CLIENT } from './supabase.constants';
import { supabaseProvider } from './supabase.provider';
import { SupabaseService } from './supabase.service';
import { CoreConfigModule } from 'src/config/core-config.module';

@Module({
  imports: [CoreConfigModule],
  providers: [
    supabaseProvider,
    SupabaseService,
    {
      provide: SUPABASE_CLIENT,
      useFactory: (config: AppConfigService) => {
        return createClient(config.supabaseUrl, config.supabaseKey);
      },
      inject: [AppConfigService],
    },
  ],
  exports: [supabaseProvider, SupabaseService],
})
export class DatabaseModule {}
