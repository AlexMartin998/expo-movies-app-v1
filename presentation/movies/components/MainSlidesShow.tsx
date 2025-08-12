import React, { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface MainSlidesShowProps {
  movies: Movie[];
}

const MainSlidesShow = ({ movies }: MainSlidesShowProps) => {
  const ref = useRef<ICarouselInstance>(null);

  // window dimensions ---
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        mode="parallax"
        data={movies}
        width={200}
        height={350}
        style={{
          width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 59,
        }}
        defaultIndex={1}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
      />
    </View>
  );
};

export default MainSlidesShow;
