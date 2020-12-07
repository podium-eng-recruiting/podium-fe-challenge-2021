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

const ReleaseDate = styled.div`
  display: flex;
  margin-bottom: 16px;

  span {
    font-weight: 600;
  }
`;

const Overview = styled.div`
  font-size: 16px;
  margin-bottom: 56px;
`;

const Ratings = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const RatingGroup = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const RatingLabel = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

const RatingValue = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 8px;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading } = useMovieQuery({ id });

  const date = new Date(data.releaseDate);

  const formattedDate = date
    .toUTCString()
    .split('00:00:00 GMT')
    .join('');

  if (loading) return <div>Loading movie...</div>;

  return (
    <Container>
      <Header>
        <BackButton to="/">Back</BackButton>
        <CardWrapper>
          <Card>
            <ImageWrapper>
              <img alt="poster-img" src={data.posterPath} />
            </ImageWrapper>
            <Details>
              <Title>{data.title}</Title>

              <ReleaseDate>
                <span>Release Date: </span>
                {formattedDate}
              </ReleaseDate>

              <Overview>{data.overview}</Overview>

              <Ratings>
                <RatingGroup>
                  <RatingValue>{data.popularity}</RatingValue>
                  <RatingLabel>Popularity</RatingLabel>
                </RatingGroup>

                <RatingGroup>
                  <RatingValue>{data.voteAverage}</RatingValue>
                  <RatingLabel>Avg. Vote</RatingLabel>
                </RatingGroup>

                <RatingGroup>
                  <RatingValue>{data.voteCount}</RatingValue>
                  <RatingLabel>Total Votes</RatingLabel>
                </RatingGroup>
              </Ratings>
            </Details>
          </Card>
        </CardWrapper>
        <div />
      </Header>
    </Container>
  );
};

export default MovieDetail;
