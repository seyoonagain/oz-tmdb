import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_API_SUPABASE_URL;
const supabaseAPIKey = import.meta.env.VITE_API_SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAPIKey);
