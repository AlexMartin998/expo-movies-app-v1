export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface CompleteMovie extends Movie {
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
  productionCompanies: string[];
  spokenLanguages: string[];
}
