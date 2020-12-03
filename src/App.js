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
            <li>
              {movie.title}
              <ul>
                <li>Release Date: {movie.release_date}</li>
                <li>Description: {movie.overview}</li>
                <li>Average Vote: {movie.vote_average}</li>
                <li>Total Votes: {movie.vote_count}</li>
              </ul>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default App;
