import { supabase } from './SupabaseClient';

export const socialSignIn = async (provider) => {
  return await supabase.auth.signInWithOAuth({
    provider,
    option: {
      redirectTo: 'https://kddzsnnyysbucocosnke.supabase.co/auth/v1/callback',
    },
  });
};
