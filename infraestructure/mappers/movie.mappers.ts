import { Movie } from '../interfaces/movie.interface';
import { Result } from '../interfaces/moviedb-response';

export class MovieMapper {
  static fromTheMovieDBToMovie(movieDB: Result): Movie {
    return {
      id: movieDB.id,
      title: movieDB.title,
      description: movieDB.overview,
      releaseDate: new Date(movieDB.release_date),
      rating: movieDB.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
    };
  }
}
