import { supabase } from './SupabaseClient';

export const signUp = async (userData) => {
  const { email, password, display_name } = userData;
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name } },
  });
  if (error) throw new Error(error);
};

export const signIn = async (signInData) => {
  const { email, password } = signInData;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error);
  if (data) return data;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

export const getUser = async () => await supabase.auth.getUser();

export const onUserStateChange = async (callback) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    const updatedUser = session ? session.user : null;
    callback(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  });
};
