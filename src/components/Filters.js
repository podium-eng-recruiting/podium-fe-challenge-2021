import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../shared';

const Container = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Label = styled.div`
  margin-right: 8px;
`;

const Select = styled.select`
  border: none;
  background: none;
  font-size: 16px;
  color: ${colors.white};
  font-family: inherit;
  cursor: pointer;
  border-bottom: solid 1px ${colors.white};
  outline: none;
`;

const Filters = ({ onSort, sortDirection }) => {
  const handleChange = e => {
    const direction = e.target.value;
    onSort(direction);
  };

  return (
    <Container>
      <Label>Sort by:</Label>
      <Select id="sortBy" value={sortDirection} onChange={handleChange}>
        <option value="ASC">Rating: High to Low</option>
        <option value="DESC">Rating: Low to High</option>
      </Select>
    </Container>
  );
};

export default Filters;
