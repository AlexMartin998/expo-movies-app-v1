import { useQuery } from '@tanstack/react-query';

import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';
import { getMovieCastByIdAction } from '@/core/actions/movie/get-movie-cast-by-id.actions';

interface UseMovie {
  movieId: number | string;
}

export const useMovie = ({ movieId }: UseMovie) => {
  const movieQuery = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieByIdAction(movieId),
  });

  const castQuery = useQuery({
    queryKey: ['movie', movieId, 'cast'],
    queryFn: () => getMovieCastByIdAction(+movieId),
  });

  return { movieQuery, castQuery };
};
