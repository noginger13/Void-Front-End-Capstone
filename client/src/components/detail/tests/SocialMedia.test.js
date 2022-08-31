import { render, waitFor, screen } from '@testing-library/react';
import SocialMedia from '../productDescription/SocialMedia';
import renderWithProviders from './renderWithProviders';

test('', () => {
  renderWithProviders(
    <SocialMedia
      currentImage={
        'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
      }
    />
  );
  const icons = screen.getAllByTestId('icons');
  expect(icons).toHaveLength(3);
});
