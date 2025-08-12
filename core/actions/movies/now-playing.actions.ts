///* tanStack query ---------------

import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infraestructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infraestructure/mappers/movie.mappers';

///* axios ---------------
export const nowPlayingAction = async () => {
  try {
    const { data } =
      await movieApi.get<MovieDBMoviesResponse>('/movie/now_playing');

    const movies = data.results.map(movieDb =>
      MovieMapper.fromTheMovieDBToMovie(movieDb)
    );
    return movies;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};
