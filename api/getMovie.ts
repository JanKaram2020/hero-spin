import type { MovieRes } from 'types';
import config from './config';

const getMovie = async (hero: string) =>
  fetch(`https://www.omdbapi.com/?s=${hero}&apikey=${config.apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((r: MovieRes) => r);

export default getMovie;
