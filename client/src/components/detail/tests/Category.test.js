import { render, waitFor, screen } from '@testing-library/react';
import Category from '../productDetail/Category';
import renderWithProviders from './renderWithProviders';

test('should display category', async () => {
  renderWithProviders(<Category />, {
    preloadedState: {
      productDetail: {
        productDetail: {
          category: 'test'
        }
      }
    }
  });
  const text = await screen.findAllByText('test');
  expect(text).toHaveLength(1);
});
