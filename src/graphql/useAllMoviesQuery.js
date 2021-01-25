import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
      genres
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
