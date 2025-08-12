import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import MainSlidesShow from '@/presentation/movies/components/MainSlidesShow';
import MovieHorizontalList from '@/presentation/movies/components/MovieHorizontalList';
import { useMovies } from '@/presentation/movies/hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  ///* hooks ---------------
  const safeArea = useSafeAreaInsets();

  const { nowPlayingQuery, popularQuery } = useMovies();
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
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold text-center mb-2 px-4">
        Movies App
      </Text>

      <MainSlidesShow movies={nowPlayingMovies || []} />

      <MovieHorizontalList title="Populares" movies={popularQuery.data || []} />
    </View>
  );
};

export default HomeScreen;
