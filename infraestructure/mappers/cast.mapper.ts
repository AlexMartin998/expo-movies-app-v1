import { Cast } from '../interfaces/cast.interface';
import { CastResponse } from '../interfaces/moviedb-credits-response';

export class CastMapper {
  static fromTheMovieDBToCast(movieDB: CastResponse): Cast {
    return {
      id: movieDB.id,
      name: movieDB.name,
      character: movieDB.character || '',
      avatar: `https://image.tmdb.org/t/p/w500${movieDB.profile_path}`,
    };
  }
}
