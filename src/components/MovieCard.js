import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors } from '../shared';

const Container = styled.div`
  cursor: pointer;
  background-image: ${({ src }) =>
    `linear-gradient(180deg, #00000000 0%, #000000 130%), url(${src})`}};
  background-size: cover;
  transition: 0.2s ease-in;
  height: 350px;
  width: 250px;
  padding: 16px;
  border-radius: 6px;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin-bottom: 86px;
  position: relative;

  &:hover {
    transition: 0.2s;
    transform: translateY(-6px);
  }
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.div`
  color: ${colors.white};
  font-size: 12px;
  height: 80px;
  overflow-y: hidden;
  text-overflow: ellipsis;
`;

const MovieCard = ({ data }) => {
  return (
    <Link to={`/movie/${data.id}`} css="text-decoration: none;">
      <Container src={data.posterPath}>
        <Title>{data.title}</Title>
        <Description>{data.overview}</Description>
      </Container>
    </Link>
  );
};

export default MovieCard;
