import { Cast } from '@/infraestructure/interfaces/cast.interface';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

interface MovieCastProps {
  cast: Cast[];
}

const MovieCast = ({ cast }: MovieCastProps) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold text-2xl px-5">Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-5 px-5"
        renderItem={({ item }) => (
          <View className="mr-7 items-center">
            <View className="overflow-hidden rounded-full w-20 h-20 mb-2">
              <Image
                source={{ uri: item.avatar }}
                className="w-20 h-20"
                resizeMode="cover"
              />
            </View>
            <Text className="text-center">{item.name}</Text>
            <Text className="text-center text-gray-500">{item.character}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovieCast;
