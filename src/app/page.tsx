import MovieList from '@/components/MovieList';

export default function Home(movieSearch: string) {
  return (
    <div>
      <MovieList 
      movieSearch={movieSearch}
      />
    </div>
  );
}
