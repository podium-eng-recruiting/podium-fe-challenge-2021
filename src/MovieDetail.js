//import { useState, useMemo } from 'react';
import { useMovieQuery } from './graphql';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { media, colors } from './shared';

const Container = styled.div`
  min-height: 100vh;
  padding: 56px;

  h1 {
    text-align: center;
    font-weight: 800;
  }
`;

const Header = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const BackButton = styled(Link)`
  padding: 8px 16px;
  background-color: ${colors.white};
  border-radius: 4px;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading } = useMovieQuery({ id });

  console.log('data', data);
  if (loading) return <div>Loading movie...</div>;

  return (
    <Container>
      <Header>
        <BackButton to="/">Back</BackButton>
        <h1>{data.title}</h1>
        <div />
      </Header>
    </Container>
  );
};

export default MovieDetail;
