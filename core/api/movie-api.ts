import axios from 'axios';

export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
  params: {
    // language: 'en-US',
    language: 'es-MX',
    api_key: process.env.EXPO_PUBLIC_TMDB_KEY,
  },
});
