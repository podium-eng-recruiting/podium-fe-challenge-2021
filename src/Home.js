import { useState } from 'react';
import { useAllMoviesQuery } from './graphql';
import MovieCard from './components/MovieCard';
import Filters from './components/Filters';
import styled from 'styled-components/macro';
import { media } from './shared';

const Container = styled.div`
  min-height: 100vh;
  padding: 56px;

  h1 {
    text-align: center;
    font-weight: 800;
    margin-bottom: 80px;
  }
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${media.phone`
		flex-flow: column;
		flex-wrap: wrap;
		width: 90%;
		margin: 84px auto;
	`};
`;
/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 **/
const Home = () => {
  const [sortDirection, setSortDirection] = useState('ASC');
  const { data, loading } = useAllMoviesQuery();

  if (loading) return <div>Loading movies...</div>;

  const performSort = (a, b) => {
    return sortDirection === 'DESC'
      ? a.voteAverage - b.voteAverage
      : b.voteAverage - a.voteAverage;
  };

  const renderMovies = () =>
    data
      .sort(performSort)
      .map(movie => <MovieCard key={movie.id} data={movie} />);

  const handleSort = direction => {
    setSortDirection(direction);
  };

  return (
    <Container>
      <h1>Top 100 Movies</h1>
      <Filters onSort={handleSort} sortDirection={sortDirection} />
      <MoviesContainer>{renderMovies()}</MoviesContainer>
    </Container>
  );
};

export default Home;
