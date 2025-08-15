import React, { useCallback, useRef } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface MovieHorizontalListProps {
  movies: Movie[];
  title?: string;
  className?: string;

  onLoadMore?: () => void;
  loadingMore?: boolean;
}

const MovieHorizontalList = ({
  movies,
  title,
  className,
  onLoadMore,
  loadingMore,
}: MovieHorizontalListProps) => {
  // infinite scroll ------
  const canLoadMoreRef = useRef(true);

  const handleEndReached = useCallback(() => {
    if (!canLoadMoreRef.current) return;
    canLoadMoreRef.current = false; // evita spam hasta nuevo momentum
    onLoadMore && onLoadMore();
  }, [onLoadMore]);

  const handleMomentumBegin = useCallback(() => {
    canLoadMoreRef.current = true;
  }, []);

  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        showsHorizontalScrollIndicator={false}
        // infinite scroll ---
        onEndReachedThreshold={0.5}
        onEndReached={handleEndReached}
        onMomentumScrollBegin={handleMomentumBegin}
        ListFooterComponent={
          loadingMore ? <Text className="px-4">Cargando…</Text> : null
        }
        // rendimiento (ajusta según tu diseño):
        initialNumToRender={8}
        windowSize={5}
        maxToRenderPerBatch={8}
      />
    </View>
  );
};

export default MovieHorizontalList;
