import { useQuery } from '@tanstack/react-query';

import { nowPlayingAction } from '@/core/actions/movies/now-playing.actions';
import { popularMoviesAction } from '@/core/actions/movies/popular.actions';
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.actions';
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming.actions';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60, // 1 hour cache time
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60, // 1 hour cache time
  });

  const topRatedQuery = useQuery({
    queryKey: ['movies', 'topRated'],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60, // 1 hour cache time
  });

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60, // 1 hour cache time
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
