import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from '../pages/product/[id]';
import { AvoContext } from '../src/context/AvoContext';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '2zd33b8c' },
    pathname: '/product/[id]',
  }),
}));

const mockProduct = {
  id: '2zd33b8c',
  name: 'Maluma Avocado',
  sku: 'NUR7ZBFK',
  price: 1.15,
  image: '/images/maluma.jpg',
  attributes: {
    description: 'A rich tasting avocado.',
    shape: 'Oval',
    hardiness: '-1 °C',
    taste: 'Rich',
  },
};

describe('ProductItem - Add to cart button', () => {
  it('should be disabled when quantity is not positive and enabled when positive', () => {
    render(
      <AvoContext.Provider value={{ cart: {}, setCart: jest.fn() }}>
        <ProductItem productData={mockProduct} />
      </AvoContext.Provider>
    );

    const button = screen.getByRole('button', { name: /add to cart/i });
    const input = screen.getByRole('spinbutton');

    // Initially with 0 items, button must be disabled
    expect(button).toBeDisabled();

    // With negative quantity, button must be disabled
    fireEvent.change(input, { target: { value: '-2' } });
    expect(button).toBeDisabled();

    // With positive quantity, button must be enabled
    fireEvent.change(input, { target: { value: '3' } });
    expect(button).toBeEnabled();

    // Back to 0, button must be disabled
    fireEvent.change(input, { target: { value: '0' } });
    expect(button).toBeDisabled();
  });
});
