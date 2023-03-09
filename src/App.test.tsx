import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SearchComponent', () => {
  render(<App />);
  const placeholderText = screen.getByPlaceholderText(/Search/i);
  expect(placeholderText).toBeInTheDocument();
});
