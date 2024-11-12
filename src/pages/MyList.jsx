import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { getBookmarks } from '../api/SupabaseDB';
import MovieCard from '../components/MovieCard';

const MyList = () => {
  const { username, user_id } = useAuthContext();
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    getBookmarks(user_id).then(setBookmarks);
  }, []);
  return (
    <div className='px-5 py-5'>
      {username && (
        <h1 className='font-dePixel font-bold text-center mb-5'>
          {username}'s Movie List
        </h1>
      )}
      <section className='max-w-screen-3xl place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {bookmarks &&
          bookmarks.map((movie) => (
            <MovieCard
              poster={movie.poster}
              id={movie.movie_id}
              key={movie.id}
            />
          ))}
      </section>
    </div>
  );
};

export default MyList;
