import { supabase } from './SupabaseClient';

export const getBookmarks = async (user_id) => {
  return await supabase
    .from('bookmarks')
    .select()
    .eq('user_id', user_id)
    .then((res) => res.data);
};

export const addToBookmark = async ({ user_id, movie_id, poster }) => {
  return await supabase.from('bookmarks').insert({ user_id, movie_id, poster });
};

export const removeFromBookmarks = async ({ id }) => {
  return await supabase.from('bookmarks').delete().eq('id', id);
};

export const isInBookmarks = async ({ user_id, movie_id }) => {
  const { data } = await supabase
    .from('bookmarks')
    .select()
    .eq('user_id', user_id)
    .eq('movie_id', movie_id);
  return data;
};
