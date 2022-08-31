import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import ReviewGallery from '../components/ReviewGallery';
import store from '../../../store';
import '@testing-library/jest-dom/extend-expect';

test('Header renders properly', () => {
  render(
    <Provider store={store}>
      <ReviewGallery
        photos={[
          {
            id: 1121412,
            url: 'https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          }
        ]}
      />
    </Provider>
  );

  screen.queryByText('ReviewImages');
});
