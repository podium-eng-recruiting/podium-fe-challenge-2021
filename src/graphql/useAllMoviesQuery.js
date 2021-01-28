import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

/**
 * NOTE: Due to limitations with JSON-server,
 * this query does not fully reflect each field and
 * associated type, but will return the full set of data
 * regardless.
 **/
const ALL_MOVIES_QUERY = gql`
  query allMovies {
    allMovies {
      id
      originalLanguage
      originalTitle
      overview
      popularity
      posterPath
      releaseDate
      title
      voteAverage
      voteCount
      budget
      runtime
      genres
      cast
      director
    }
  }
`;

const useAllUnreadCountQuery = () => {
  const { data, loading, error } = useQuery(ALL_MOVIES_QUERY, {
    fetchPolicy: 'cache-and-network'
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
};

export default useAllUnreadCountQuery;
