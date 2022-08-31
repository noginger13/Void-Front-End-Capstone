import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import ReviewHelpful from '../components/ReviewHelpful';

describe('Recommended message conditionally renders', () => {

  test('Renders report number to document', () => {
    render(<ReviewHelpful helpfulness={3} id={1} />);

    expect(screen.queryByText('Report')).toBeInTheDocument();
  });
});
