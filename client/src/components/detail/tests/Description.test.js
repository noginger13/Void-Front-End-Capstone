import { render, waitFor, screen } from '@testing-library/react';
import Description from '../productDescription/Description';
import renderWithProviders from './renderWithProviders';

const productDetail = {
  id: 37315,
  campus: 'hr-rfe',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description:
    "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-08-13T14:37:33.145Z',
  updated_at: '2021-08-13T14:37:33.145Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber'
    },
    {
      feature: 'Material',
      value: 'FullControlSkin'
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge'
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch'
    }
  ]
};
test('', () => {
  renderWithProviders(<Description />, {
    preloadedState: {
      productDetail: {
        productDetail: productDetail
      }
    }
  });
  const slogan = screen.getByTestId('slogan');
  const description = screen.getByTestId('description');
  const features = screen.getAllByTestId('features');
  expect(slogan.innerHTML).toContain(productDetail.slogan);
  expect(description.innerHTML).toContain(productDetail.description);
  expect(features).toHaveLength(productDetail.features.length);
});
