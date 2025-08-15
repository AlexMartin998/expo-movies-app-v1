import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlidesShow from '@/presentation/movies/components/MainSlidesShow';
import MovieHorizontalList from '@/presentation/movies/components/MovieHorizontalList';
import { useMovies } from '@/presentation/movies/hooks/useMovies';

const HomeScreen = () => {
  ///* hooks ---------------
  const safeArea = useSafeAreaInsets();

  const {
    nowPlayingQuery,
    popularInfiniteQuery,
    topRatedQuery,
    upcomingQuery,
  } = useMovies();
  const { data: nowPlayingMovies, isLoading, isRefetching } = nowPlayingQuery;

  if (isLoading || isRefetching) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    // safe area manual
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold text-center mb-2 px-4">
          Movies App
        </Text>

        <MainSlidesShow movies={nowPlayingMovies || []} />

        <MovieHorizontalList
          title="Populares"
          // movies={popularQuery.data || []}
          movies={popularInfiniteQuery.data?.pages.flat() || []}
          className="mb-4"
          onLoadMore={popularInfiniteQuery.fetchNextPage}
        />

        <MovieHorizontalList
          title="Mejor Valoradas"
          movies={topRatedQuery.data || []}
          className="mb-4"
        />

        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data || []}
          className="mb-4"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
