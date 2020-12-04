import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../shared';

const Container = styled.div`
  transition: 0.2s ease-in;
  height: 400px;
  width: 300px;
  border-radius: 6px;
  background: #f4f2f1;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin-bottom: 86px;

  &:hover {
    transition: 0.2s;
    transform: translateY(-6px);
  }
`;

export const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  height: 332px;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border-radius: 6px;
  bottom: 30px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0);
`;

export const DetailsContainer = styled.div`
  padding: 15px 30px;
  padding-top: 0;
`;

export const Dates = styled.div`
  color: ${colors.red};
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Title = styled.div`
  color: ${colors.black};
  margin-top: 5px;
  font-weight: 700;
  font-size: 1.3em;
  line-height: 1.55em;
`;

export const Description = styled.div`
  color: ${colors.black};
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieCard = ({ data }) => {
  return (
    <Container>
      <Image src={data.posterPath} />
      <DetailsContainer>
        <Dates>{data.releaseDate}</Dates>
        <Title>{data.title}</Title>
        {/*
        <Description>{data.overview}</Description>
				*/}
      </DetailsContainer>
    </Container>
  );
};

export default MovieCard;
//<li key={data.id}>
//{data.title}
//<ul>
//<li>Release Date: {data.releaseDate}</li>
//<li>Description: {data.overview}</li>
//<li>Average Vote: {data.voteAverage}</li>
//<li>Total Votes: {data.voteCount}</li>
//</ul>
//</li>
