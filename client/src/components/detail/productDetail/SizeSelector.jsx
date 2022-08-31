import React, { useState, useEffect } from 'react';
import {
  SelectSize,
  SelectQuantity,
  AddItem,
  FavIcon
} from '../styles/Select.styled';

export default function SizeSelector({
  sizes,
  selectedQuantity,
  defaultSize,
  onChangeHandler
}) {
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  useEffect(() => {
    setSelectedSize(defaultSize);
  }, [defaultSize]);
  const changeSize = (e) => {
    setSelectedSize(e.target.value);
    onChangeHandler(e.target.value);
  };
  return (
    <SelectSize
      name="size"
      onChange={changeSize}
      value={selectedSize}
      disabled={selectedQuantity.length === 0}
      role="size-selector"
    >
      {selectedQuantity.length === 0 ? (
        <option value="" data-testid="out-of-stock">
          OUT OF STOCK
        </option>
      ) : (
        <>
          <option value="">SELECT SIZE</option>
          {sizes.map((size, index) => (
            <option value={size} key={index} data-testid="size-options">
              {size}
            </option>
          ))}
        </>
      )}
    </SelectSize>
  );
}
