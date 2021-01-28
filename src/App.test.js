import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the home page with a title', () => {
  render(<App />, { wrapper: MemoryRouter });
  const titleElement = screen.getByText(/Popular Movies/i);
  expect(titleElement).toBeInTheDocument();
});
