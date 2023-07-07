import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('user can add items to the cart', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter><App /></MemoryRouter>);
  await user.click(screen.getByRole('link', { name: 'Shopping' }));
  await user.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
  expect(screen.getByRole('link', { name: 'Cart(1)' })).toBeInTheDocument();
});

test('user can remove items from the cart', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter><App /></MemoryRouter>);
  await user.click(screen.getByRole('link', { name: 'Shopping' }));
  await user.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
  await user.click(screen.getByRole('link', { name: 'Cart(1)' }));
  await user.click(screen.getByRole('button', { name: 'Remove' }));
  expect(screen.getByRole('link', { name: 'Cart(0)' })).toBeInTheDocument();
});