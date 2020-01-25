import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("checks if there is a search submit button", () => {
  const { getAllByText } = render(<App />);
  const expected = 1;

  const result = getAllByText(/search pl/i);

  expect(result.length).toBe(expected);
});

test("checks if heading is rendering", () => {
  const { getByTestId } = render (<App />);
  
  getByTestId("heading");
});