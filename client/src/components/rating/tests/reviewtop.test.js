import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import ReviewTop from '../components/ReviewTop';

describe('Recommended message conditionally renders', () => {

  test('Renders a date in human-readable format', () => {
    render(<ReviewTop rating={3} id={1} name={'Abbigail.Kub'} date={'2021-02-02T00:00:00.000Z'} />);

    expect(screen.queryByText('000Z')).not.toBeInTheDocument();
  });
});
