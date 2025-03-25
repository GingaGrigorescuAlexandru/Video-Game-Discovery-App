import useData from './useData';
import genreService, { Genre } from '../services/genre-service.ts';

const useGenres = () => useData<Genre>(genreService)

export default useGenres;