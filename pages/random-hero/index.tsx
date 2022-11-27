import React from 'react';
import useGetRandomMovie from 'hooks/useGetRandomMovie';
import MovieCard from 'components/MovieCard';

const IndexPage = () => {
  const { error, isLoading, randomMovie, changeMovie } = useGetRandomMovie();
  return (
    <MovieCard
      randomMovie={randomMovie}
      changeMovie={changeMovie}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default IndexPage;
