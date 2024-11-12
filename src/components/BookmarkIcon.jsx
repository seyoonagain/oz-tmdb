import React, { useEffect, useState } from 'react';
import emptyStar from '../assets/empty-star.png';
import filledStar from '../assets/filled-star.png';
import { useAuthContext } from '../contexts/AuthContext';
import {
  addToBookmark,
  isInBookmarks,
  removeFromBookmarks,
} from '../api/SupabaseDB';

const BookmarkIcon = ({
  movie: { movieId: movie_id, poster },
  setErrorMessage,
}) => {
  const { user, user_id } = useAuthContext();
  const [isBookmarked, setIsBookmarked] = useState();
  const [id, setId] = useState();
  const handleBookmark = () => {
    if (!user)
      return setErrorMessage('Please sign in first to add a bookmark.');
    isBookmarked
      ? removeFromBookmarks({ id })
      : addToBookmark({ user_id, movie_id, poster });
    setIsBookmarked(!isBookmarked);
  };
  useEffect(() => {
    isInBookmarks({ user_id, movie_id }).then((res) => {
      setIsBookmarked(res.length === 1);
      res.length === 1 && setId(res[0].id);
    });
  }, []);
  return (
    <button
      onClick={handleBookmark}
      className='absolute top-3 left-3 z-20 bg-zinc-100 border border-zinc-950 size-7 flex justify-center items-center'
    >
      <img src={isBookmarked ? filledStar : emptyStar} className='size-5' />
    </button>
  );
};

export default BookmarkIcon;
