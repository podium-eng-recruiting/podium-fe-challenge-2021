import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const MOVIE_QUERY = gql`
  query movie($id: ID!) {
    Movie(id: $id) {
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
    }
  }
`;

const useAllUnreadCountQuery = ({ id }) => {
  const { data, loading, error } = useQuery(MOVIE_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
    skip: !id
  });

  const result = data?.Movie ?? {};

  return {
    data: result,
    error,
    loading
  };
};

export default useAllUnreadCountQuery;
