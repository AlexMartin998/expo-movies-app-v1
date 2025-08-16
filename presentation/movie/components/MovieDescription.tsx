import { Formatter } from '@/config/helpers/formattr';
import React from 'react';
import { Text, View } from 'react-native';

interface MovieDescriptionProps {
  description: string;
  rating: number;
  genres: string[];
  budget: number;
}

const MovieDescription = ({
  description,
  rating,
  genres,
  budget,
}: MovieDescriptionProps) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{rating.toFixed(2)}</Text>
        <Text>- {genres.join(', ')}</Text>
      </View>

      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2">{description}</Text>

      <Text className="font-bold mt-2 text-2xl">
        {Formatter.currency(budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
