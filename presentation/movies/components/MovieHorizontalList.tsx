import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface MovieHorizontalListProps {
  movies: Movie[];
  title?: string;
  className?: string;
}

const MovieHorizontalList = ({
  movies,
  title,
  className,
}: MovieHorizontalListProps) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;
