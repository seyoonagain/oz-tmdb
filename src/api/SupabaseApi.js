import { supabase } from './SupabaseClient';

export const signUp = async (userData) => {
  const { email, password, display_name } = userData;
  return await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name } },
  });
  // .then((res) => res.data);
};

export const signIn = async (signInData) => {
  const { email, password } = signInData;
  return await supabase.auth
    .signInWithPassword({
      email,
      password,
    })
    .then((res) => res.data);
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
