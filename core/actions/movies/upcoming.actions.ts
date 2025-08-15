import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infraestructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infraestructure/mappers/movie.mappers';

export const upcomingMoviesAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBMoviesResponse>('/movie/upcoming');

    const movies = data.results.map(movieDb =>
      MovieMapper.fromTheMovieDBToMovie(movieDb)
    );
    return movies;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};
