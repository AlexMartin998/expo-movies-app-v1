import { movieApi } from '@/core/api/movie-api';
import { MovieDBCreditsResponse } from '@/infraestructure/interfaces/moviedb-credits-response';
import { CastMapper } from '@/infraestructure/mappers/cast.mapper';

export const getMovieCastByIdAction = async (movieId: number) => {
  try {
    const { data } = await movieApi<MovieDBCreditsResponse>(
      `/movie/${movieId}/credits`
    );
    return data?.cast?.map(CastMapper.fromTheMovieDBToCast);
  } catch (error) {
    throw error;
  }
};
