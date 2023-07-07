import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders an empty cart message', () => {
  render(<Cart items={[]} />);
  const emptyCartMessage = screen.queryByText(/Cart is empty/i);
  expect(emptyCartMessage).toBeInTheDocument();
});

test('renders cart items', () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10, quantity: 2, image: 'item1.jpg' },
    { id: 2, name: 'Item 2', price: 20, quantity: 1, image: 'item2.jpg' },
  ];
  render(<Cart items={items} />);
  const item1Name = screen.queryByText(/Item 1/i);
  const item2Name = screen.queryByText(/Item 2/i);
  expect(item1Name).toBeInTheDocument();
  expect(item2Name).toBeInTheDocument();
});