import { render, waitFor, screen } from '@testing-library/react';
import GoToReview from '../productDetail/GoToReview';
import renderWithProviders from './renderWithProviders';

test('should not render GoToReview component if total review is 0', () => {
  renderWithProviders(<GoToReview />, {
    preloadedState: {
      productMetaData: {
        productMetaData: {
          ratings: {
            1: '0',
            2: '0',
            3: '0',
            4: '0',
            5: '0'
          }
        }
      }
    }
  });
  const result = screen.queryAllByTestId('link-to-rating');
  expect(result).toHaveLength(0);
});
