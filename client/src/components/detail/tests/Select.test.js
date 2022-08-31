import { render, waitFor, screen } from '@testing-library/react';
import Select from '../productDetail/Select';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from '../../../reducers/cartReducer';
import productDetailReducer from '../../../reducers/productDetailReducer';
import store from '../../../store';

const initialState = {
  productDetail: {
    productDetail: {
      id: 37311,
      name: 'test',
      category: 'test'
    }
  }
};
const testStyle = {
  style_id: 221014,
  name: 'Black',
  original_price: '65.00',
  sale_price: null,
  'default?': true,
  photos: [
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
    }
  ],
  skus: {
    1281104: {
      quantity: 8,
      size: 'XS'
    },
    1281105: {
      quantity: 16,
      size: 'S'
    },
    1281106: {
      quantity: 17,
      size: 'M'
    },
    1281107: {
      quantity: 10,
      size: 'L'
    },
    1281108: {
      quantity: 15,
      size: 'XL'
    },
    1281109: {
      quantity: 6,
      size: 'XXL'
    }
  }
};

function renderWithProviders(
  ui,
  {
    preloadedState = initialState,
    store = configureStore({
      reducer: { cart: cartReducer, productDetail: productDetailReducer },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('should take sizes argument', async () => {
  const sizes = ['S', 'M', 'L', 'XL'];
  const quantity = [5, 4, 1, 3];
  renderWithProviders(
    <Select sizes={sizes} quantity={quantity} style={testStyle} />
  );
  const getSizes = await screen.findAllByTestId('size-options');
  expect(getSizes).toHaveLength(4);
});
