import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infraestructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infraestructure/mappers/movie.mappers';

export const popularMoviesAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBMoviesResponse>('/movie/popular');

    const movies = data.results.map(movieDb =>
      MovieMapper.fromTheMovieDBToMovie(movieDb)
    );
    return movies;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};
