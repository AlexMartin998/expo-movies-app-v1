import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

interface MovieHeaderProps {
  originalTitle: string;
  title: string;
  poster: string;
}

const MovieHeader = ({ poster, originalTitle, title }: MovieHeaderProps) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: screenHeight * 0.4,
          position: 'absolute',
          zIndex: 1,
          width: '100%',
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 45,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>

      <View
        className="shadow-xl shadow-black/20"
        style={{ height: screenHeight * 0.7 }}
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        <Text className="font-normal">{originalTitle}</Text>
        <Text className="font-semibold text-2xl">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
