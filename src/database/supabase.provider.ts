import { Provider } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { SUPABASE_CLIENT } from './supabase.constants';
import { AppConfigService } from 'src/config/app-config.service';

export const supabaseProvider: Provider<SupabaseClient> = {
  provide: SUPABASE_CLIENT,
  inject: [AppConfigService],
  useFactory: (config: AppConfigService) =>
    createClient(config.supabaseUrl, config.supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }),
};
