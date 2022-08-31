import { render, fireEvent, screen } from '@testing-library/react';
import QtySelector from '../productDetail/QtySelector';
import renderWithProviders from './renderWithProviders';

const selectedQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const selectedSize = '';
const defaultQty = 1;
const onQtyChangeHandler = () => {};

test('should be disabled when size is not selected', async () => {
  renderWithProviders(
    <QtySelector
      selectedQuantity={selectedQuantity}
      selectedSize={selectedSize}
      defaultQty={defaultQty}
      onQtyChangeHandler={onQtyChangeHandler}
    />
  );
  let options = screen.queryAllByTestId('qty-options');
  expect(options).toHaveLength(0);
});

test('should show the qty when size selected', () => {
  renderWithProviders(
    <QtySelector
      selectedQuantity={selectedQuantity}
      selectedSize={'7.5'}
      defaultQty={defaultQty}
      onQtyChangeHandler={onQtyChangeHandler}
    />
  );
  let options = screen.queryAllByTestId('qty-options');
  expect(options).toHaveLength(selectedQuantity.length);
});

test('should able to select qty', () => {
  renderWithProviders(
    <QtySelector
      selectedQuantity={selectedQuantity}
      selectedSize={'7.5'}
      defaultQty={defaultQty}
      onQtyChangeHandler={onQtyChangeHandler}
    />
  );
  fireEvent.change(screen.getByRole('qty-selector'), { target: { value: 5 } });
  let options = screen.queryAllByTestId('qty-options');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[4].selected).toBeTruthy();
});
