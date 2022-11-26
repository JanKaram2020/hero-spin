import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Movie } from 'types';
import getMovie from 'api/getMovie';
import getRandomElement from 'utils/getRandomELement';
import getMovieDetails from 'api/getMovieDetails';

const heroes = [
  'Ant-Man',
  'Aquaman',
  'Asterix',
  'The Atom',
  'The Avengers',
  'Batgirl',
  'Batman',
  'Batwoman',
  'Black Canary',
  'Black Panther',
  'Captain America',
  'Captain Marvel',
  'Catwoman',
  `Conan the Barbarian`,
  'Daredevil',
  'The Defenders',
  'Doc Savage',
  'Doctor Strange',
  'Elektra',
  'Fantastic Four',
  'Ghost Rider',
  'Green Arrow',
  'Green Lantern',
  'Guardians of the Galaxy',
  'Hawkeye',
  'Hellboy',
  'Incredible Hulk',
  'Iron Fist',
  'Iron Man',
  'Marvelman',
  'Robin',
  'The Rocketeer',
  'The Shadow',
  'Spider-Man',
  'Sub-Mariner',
  'Supergirl',
  'Superman',
  'Teenage Mutant Ninja Turtles',
  'Thor',
  'The Wasp',
  'Watchmen',
  'Wolverine',
  'Wonder Woman',
  'X-Men',
  'Zatanna',
  'Zatara',
];

const UseGetRandomMovie = (name?: string | string[] | undefined) => {
  const [movie, setMovie] = useState('');
  const [randomMovie, setRandomMovie] = useState<Movie | undefined>(undefined);

  const { error, isLoading } = useQuery([movie], () => getMovie(movie), {
    refetchOnWindowFocus: false,
    onSuccess: (d) => {
      if (!d) return;
      if (d?.Error === 'Movie not found!' && d?.Response === 'False') {
        return setMovie(getRandomElement(heroes));
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
  const changeMovie = () => setMovie(getRandomElement(heroes));

  useEffect(() => {
    setMovie(name ? String(name) : getRandomElement(heroes));
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
