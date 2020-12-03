import './App.css';
import { useFetchMovies } from './hooks';

const App = () => {
  const { data, loading } = useFetchMovies();

  return (
    <div className="App">
      <h1>Top 100 Movies</h1>

      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <ol>
          {data.map(movie => (
            <li key={movie.id}>
              {movie.title}
              <ul>
                <li>Release Date: {movie.releaseDate}</li>
                <li>Description: {movie.overview}</li>
                <li>Average Vote: {movie.voteAverage}</li>
                <li>Total Votes: {movie.voteCount}</li>
              </ul>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default App;
