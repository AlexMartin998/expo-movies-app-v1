import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

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
      <Text>MovieScreen {id}</Text>
      <Text>{movieQuery.data?.title}</Text>
    </ScrollView>
  );
};

export default MovieScreen;
