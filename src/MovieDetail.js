//import { useState, useMemo } from 'react';
import { useMovieQuery } from './graphql';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { media, colors } from './shared';

const Container = styled.div`
  min-height: 100vh;
  padding: 56px;
`;

const Header = styled.section`
  display: flex;
  align-items: flex-start;
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

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.white};
  box-shadow: 0px 14px 17px -13px rgba(0, 0, 0, 0.2);
  padding: 24px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  color: ${colors.black};

  ${media.tablet`
		flex-flow: column;	
		align-items: center;
	`};
`;

const CardWrapper = styled.div`
  width: 60%;
  min-height: 60%;
`;

const ImageWrapper = styled.div`
  margin-right: 56px;

  img {
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  ${media.tablet`
		margin-right: 0;	
		margin-bottom: 24px;
		align-items: center;
	`};
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${colors.black};

  ${media.tablet`
	width: 100%;
	text-align: center;
		font-size: 24px;
		margin-bottom: 24px;
	`};
`;

const Details = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  flex: 2;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading } = useMovieQuery({ id });

  if (loading) return <div>Loading movie...</div>;

  return (
    <Container>
      <Header>
        <BackButton to="/">Back</BackButton>
        <CardWrapper>
          <Card>
            <ImageWrapper>
              <img src={data.posterPath} />
            </ImageWrapper>
            <Details>
              <Title>{data.title}</Title>
              <div>{data.releaseDate}</div>
              <div>{data.overview}</div>
              <div>{data.popularity}</div>
              <div>{data.voteAverage}</div>
              <div>{data.voteCount}</div>
            </Details>
          </Card>
        </CardWrapper>
        <div />
      </Header>
    </Container>
  );
};

export default MovieDetail;
