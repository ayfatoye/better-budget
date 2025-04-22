import { createClient } from '@supabase/supabase-js';
import fetchRetry from 'fetch-retry';

// const fetchWithRetry = fetchRetry(fetch);
const fetchWithRetry = fetchRetry(fetch, {
    retries: 3, 
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Exponential backoff
    retryOn: [503], // because I ran into this error once when testing the app
  })

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: fetchWithRetry, },
});