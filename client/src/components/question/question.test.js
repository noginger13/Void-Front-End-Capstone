/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Questions from './Questions';
import store from '../../store';
import "@testing-library/jest-dom/extend-expect";

test('Header renders properly', () => {
  render(
    <Provider store={store}>
      <Questions />
    </Provider>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/Questions & Answers/);
});
