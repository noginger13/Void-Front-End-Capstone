import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import ReviewRec from '../components/ReviewRec';

describe('Recommended message conditionally renders', () => {

  test('Renders a message if passed true', () => {
    render(<ReviewRec rec={true} />);

    expect(screen.queryByText('I recommend this product.')).toBeInTheDocument();
  });

  test('Renders no message if passed false', () => {
    render(<ReviewRec rec={false} />);

    expect(screen.queryByText('I recommend this product.')).not.toBeInTheDocument();
  });
});
