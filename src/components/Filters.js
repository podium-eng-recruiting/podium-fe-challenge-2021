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
  font-weight: 600;
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

const FilterWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const Filters = ({ onSort, sortDirection, onFilterSelect, selectedFilter }) => {
  const handleSortChange = e => {
    const direction = e.target.value;
    onSort(direction);
  };

  const handleFilterChange = e => {
    const age = e.target.value;
    onFilterSelect(age);
  };

  return (
    <Container>
      <FilterWrapper>
        <Label>Movie Age:</Label>
        <Select
          id="filters"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value={'allTime'}>All Time</option>
          <option value={1}>1 Year</option>
          <option value={5}>5 years</option>
          <option value={10}>10 years</option>
          <option value={20}>20 years</option>
          <option value={50}>50 years</option>
        </Select>
      </FilterWrapper>

      <FilterWrapper>
        <Label>Sort by:</Label>
        <Select id="sortBy" value={sortDirection} onChange={handleSortChange}>
          <option value="ASC">Rating: High to Low</option>
          <option value="DESC">Rating: Low to High</option>
        </Select>
      </FilterWrapper>
    </Container>
  );
};

export default Filters;
