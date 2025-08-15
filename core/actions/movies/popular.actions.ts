import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infraestructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infraestructure/mappers/movie.mappers';

type Options = {
  page?: number;
  limit?: number;
};

export const popularMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options = {}) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>(
      '/movie/popular',
      {
        params: { page, limit },
      }
    );

    const movies = data.results.map(movieDb =>
      MovieMapper.fromTheMovieDBToMovie(movieDb)
    );
    return movies;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};
