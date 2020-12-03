import logo from "./logo.svg";
import "./App.css";
import { useFetchMovies } from "./hooks";

function App() {
  const  {data, loading, error } = useFetchMovies();
	console.log("loading", loading)
	console.log("data", data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
