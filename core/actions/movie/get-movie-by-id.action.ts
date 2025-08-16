import { movieApi } from '@/core/api/movie-api';
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface';
import { MovieDBMoviewResponse } from '@/infraestructure/interfaces/moviedb-movie-response';
import { MovieMapper } from '@/infraestructure/mappers/movie.mappers';

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviewResponse>(`/movie/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    throw error;
  }
};
