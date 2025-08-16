import { useQuery } from '@tanstack/react-query';

import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action';

interface UseMovie {
  movieId: number | string;
}

export const useMovie = ({ movieId }: UseMovie) => {
  const movieQuery = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieByIdAction(movieId),
  });

  return { movieQuery };
};
