import { useState, useMemo } from 'react';
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
  const [selectedFilter, setSelectedFilter] = useState('allTime');
  const { data, loading } = useAllMoviesQuery();

  const today = useMemo(() => new Date(), []);

  if (loading) return <div>Loading movies...</div>;

  const performSort = (a, b) => {
    return sortDirection === 'DESC'
      ? a.voteAverage - b.voteAverage
      : b.voteAverage - a.voteAverage;
  };

  const performAgeFilter = ({ releaseDate }) => {
    if (selectedFilter === 'allTime') return true;

    const date = new Date(releaseDate);
    const diff = today.getFullYear() - date.getFullYear();
    return diff < selectedFilter;
  };

  const renderMovies = () =>
    data
      .filter(performAgeFilter)
      .sort(performSort)
      .map(movie => <MovieCard key={movie.id} data={movie} />);

  const handleSort = direction => {
    setSortDirection(direction);
  };

  const handleFilter = filter => {
    setSelectedFilter(filter);
  };

  return (
    <Container>
      <h1>Top 100 Movies</h1>
      <Filters
        onSort={handleSort}
        sortDirection={sortDirection}
        onFilterSelect={handleFilter}
        selectedFilter={selectedFilter}
      />
      <MoviesContainer>{renderMovies()}</MoviesContainer>
    </Container>
  );
};

export default Home;
