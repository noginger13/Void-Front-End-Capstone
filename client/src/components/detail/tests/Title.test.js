import { render, waitFor, screen } from '@testing-library/react';
import Title from '../productDetail/Title';
import renderWithProviders from './renderWithProviders';

test('should display Title', async () => {
  renderWithProviders(<Title />, {
    preloadedState: {
      productDetail: {
        productDetail: {
          name: 'test'
        }
      }
    }
  });
  const text = await screen.findAllByText('test');
  expect(text).toHaveLength(1);
});
