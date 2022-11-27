export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface MovieDetails {
  Plot: string;
  Genre: string;
  Actors: string;
  Director: string;
  Writer: string;
  Ratings: { Source: string; Value: string }[];
}
interface MovieSuccess {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: undefined;
}
interface MovieFail {
  Response: 'False';
  Error: 'Movie not found!';
}
export type MovieRes = MovieSuccess | MovieFail;
export type MovieDetailsRes = MovieDetails | undefined;
export type RandomMovie = (Movie | undefined) & (MovieDetails | undefined);
