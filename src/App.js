import Home from './Home';
import MovieDetail from './MovieDetail';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" exact component={MovieDetail} />
    </Switch>
  );
};

export default App;
