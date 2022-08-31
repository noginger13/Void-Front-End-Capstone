import { render, fireEvent, screen } from '@testing-library/react';
import SizeSelector from '../productDetail/SizeSelector';
import renderWithProviders from './renderWithProviders';

const sizes = [
  '7',
  '7.5',
  '8',
  '8.5',
  '9',
  '9.5',
  '10',
  '10.5',
  '11',
  '11.5',
  '12'
];
const selectedQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const defaultSize = '';
const onChangeHandler = () => {};

test('should show OUT OF STOCK if no size available', () => {
  renderWithProviders(
    <SizeSelector
      sizes={sizes}
      selectedQuantity={[]}
      defaultSize={defaultSize}
      onChangeHandler={onChangeHandler}
    />
  );

  let options = screen.getByTestId('out-of-stock');
  expect(options.text).toContain('OUT OF STOCK');
});

test('should show all available sizes', () => {
  renderWithProviders(
    <SizeSelector
      sizes={sizes}
      selectedQuantity={selectedQuantity}
      defaultSize={defaultSize}
      onChangeHandler={onChangeHandler}
    />
  );
  let options = screen.getAllByTestId('size-options');
  expect(options).toHaveLength(sizes.length);
  fireEvent.change(screen.getByRole('size-selector'), {
    target: { value: '8.5' }
  });
  options = screen.getAllByTestId('size-options');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[3].selected).toBeTruthy();
});
