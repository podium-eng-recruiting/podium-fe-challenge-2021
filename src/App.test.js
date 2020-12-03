import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the home page with a title', () => {
  render(<App />, { wrapper: MemoryRouter });
  const titleElement = screen.getByText(/Top 100 Movies/i);
  expect(titleElement).toBeInTheDocument();
});
