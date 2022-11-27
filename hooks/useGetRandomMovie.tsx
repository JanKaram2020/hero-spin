import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Movie } from 'types';
import getMovie from 'api/getMovie';
import getRandomElement from 'utils/getRandomELement';
import getMovieDetails from 'api/getMovieDetails';
import { heroesNames } from 'heroes';

const UseGetRandomMovie = (name?: string | string[] | undefined) => {
  const [movie, setMovie] = useState('');
  const [randomMovie, setRandomMovie] = useState<Movie | undefined>(undefined);

  const { error, isLoading } = useQuery([movie], () => getMovie(movie), {
    refetchOnWindowFocus: false,
    onSuccess: (d) => {
      if (!d) return;
      if (d?.Error === 'Movie not found!' && d?.Response === 'False') {
        return setMovie(getRandomElement(heroesNames));
      }
      if (d?.Search?.length) {
        setRandomMovie(getRandomElement(d.Search));
      }
    },
  });
  const {
    data: details,
    error: detailsError,
    isLoading: detailsLoading,
  } = useQuery(['imdbId', randomMovie?.imdbID], () =>
    getMovieDetails(randomMovie?.imdbID)
  );
  const changeMovie = () => setMovie(getRandomElement(heroesNames));

  useEffect(() => {
    setMovie(name ? String(name) : getRandomElement(heroesNames));
  }, [name]);

  return {
    error: error || detailsError,
    isLoading: isLoading || detailsLoading,
    randomMovie: {
      ...randomMovie,
      ...details,
    },
    changeMovie,
  };
};

export default UseGetRandomMovie;
