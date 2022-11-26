import type { MovieDetailsRes } from 'types';
import config from './config';

const getMovieDetails = async (id = '') =>
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=${config.apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((r: MovieDetailsRes) => r);

export default getMovieDetails;
