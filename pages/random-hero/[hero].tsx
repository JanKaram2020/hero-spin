import React from 'react';
import { useRouter } from 'next/router';
import useGetRandomMovie from 'hooks/useGetRandomMovie';
import MovieCard from '../../components/MovieCard';

const HeroPage = () => {
  const { query } = useRouter();
  const { hero } = query;
  const { error, isLoading, randomMovie } = useGetRandomMovie(hero);
  return (
    <MovieCard isLoading={isLoading} error={error} randomMovie={randomMovie} />
  );
};

export default HeroPage;
