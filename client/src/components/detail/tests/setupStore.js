import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from '../../../reducers/index';

const rootReducer = reducers;

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};
