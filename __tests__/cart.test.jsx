import React from 'react';
import { render, screen } from '@testing-library/react';
import CartPage from '../pages/cart';
import { AvoContext } from '../src/context/AvoContext';

describe('CartPage - Checkout button', () => {
  it('should be disabled when cart has no items', () => {
    render(
      <AvoContext.Provider
        value={{
          cart: {},
          setCart: jest.fn(),
          calculateCountItems: () => 0,
        }}
      >
        <CartPage />
      </AvoContext.Provider>
    );

    const checkoutButton = screen.getByRole('button', { name: /checkout/i });
    expect(checkoutButton).toBeDisabled();
  });

  it('should be enabled when cart has items', () => {
    const mockCart = {
      '1': [{ id: '1', price: 1.5, name: 'Avocado', image: '/images/avo.jpg' }],
    };

    render(
      <AvoContext.Provider
        value={{
          cart: mockCart,
          setCart: jest.fn(),
          calculateCountItems: () => 1,
        }}
      >
        <CartPage />
      </AvoContext.Provider>
    );

    const checkoutButton = screen.getByRole('button', { name: /checkout/i });
    expect(checkoutButton).toBeEnabled();
  });
});
