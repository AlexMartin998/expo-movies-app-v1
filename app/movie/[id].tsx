import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import MovieHeader from '@/presentation/movie/components/MovieHeader';
import { useMovie } from '@/presentation/movies/hooks/useMovie';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie({ movieId: +id });

  if (movieQuery.isLoading || movieQuery.isRefetching) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Loading movie...</Text>
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data?.poster || ''}
        originalTitle={movieQuery.data?.originalTitle || ''}
        title={movieQuery.data?.title || ''}
      />
    </ScrollView>
  );
};

export default MovieScreen;
