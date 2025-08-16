import { CompleteMovie, Movie } from '../interfaces/movie.interface';
import { MovieDBMoviewResponse } from '../interfaces/moviedb-movie-response';
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

  static fromTheMovieDBToCompleteMovie(
    movieDB: MovieDBMoviewResponse
  ): CompleteMovie {
    return {
      id: movieDB.id,
      title: movieDB.title,
      description: movieDB.overview,
      releaseDate: new Date(movieDB.release_date),
      rating: movieDB.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,

      budget: movieDB.budget,
      revenue: movieDB.revenue,
      runtime: movieDB.runtime,
      genres: movieDB.genres.map(genre => genre.name),
      productionCompanies: movieDB.production_companies.map(
        company => company.name
      ),
      spokenLanguages: movieDB.spoken_languages.map(language => language.name),
    };
  }
}
