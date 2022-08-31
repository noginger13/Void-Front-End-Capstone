import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupStore } from './setupStore';
import { render } from '@testing-library/react';

export default function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
