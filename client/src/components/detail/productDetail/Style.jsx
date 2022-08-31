import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FlexContainer } from '../styles/Container.styled';
import { FlexImageContainer, CircleImage } from '../styles/Image.styled';
import { LineThroughPrice, DiscountPrice } from '../styles/Price.styled';
import Select from './Select';
import './style.css';
import image_not_found from '../../../images/image_not_found.png';
import clickTracker from '../clickTracker';

export default function Style({ changeStyleHandler }) {
  const productStyle = useSelector((state) => state.productStyle);
  const { id } = useParams();
  const { results } = productStyle.productStyle;

  const [selectedStyle, setSelectedStyle] = useState(0);

  const allKeys = Object.keys(results);
  const [style, setStyle] = useState(results[0].name);
  let sizes = [];
  let quantity = [];
  const allStyles = allKeys.map((key) => [
    results[key].style_id,
    results[key].photos[0],
    results[key].name
  ]);
  const skus = results[selectedStyle].skus;
  for (let key in skus) {
    if (skus[key].quantity > 0) {
      sizes.push(skus[key].size);
      quantity.push(skus[key].quantity);
    }
  }
  const onChangeHandler = (index) => {
    clickTracker('ProductOverview', 'Style Selector');
    setSelectedStyle(index);
    changeStyleHandler(results[index].photos);
    setStyle(results[index].name);
    for (let key in results[index].skus) {
      if (results[index].skus[key].quantity > 0) {
        sizes.push(results[index].skus[key].size);
        quantity.push(results[index].skus[key].quantity);
      }
    }
  };

  return (
    <div>
      {results[selectedStyle].sale_price === null ? (
        <p>${Number(results[selectedStyle].original_price)}</p>
      ) : (
        <FlexContainer>
          <LineThroughPrice>
            ${Number(results[selectedStyle].original_price)}
          </LineThroughPrice>
          <DiscountPrice>
            <b>${Number(results[selectedStyle].sale_price)}</b>
          </DiscountPrice>
        </FlexContainer>
      )}
      <p style={{ marginTop: '0px' }}>
        <b>STYLE > {style}</b>
      </p>
      <FlexImageContainer>
        {allStyles.map((style, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`myCheckbox${index}`}
              name="selected"
              checked={selectedStyle === index}
              onChange={() => onChangeHandler(index)}
            />
            <label htmlFor={`myCheckbox${index}`}>
              <CircleImage
                src={style[1].thumbnail_url || image_not_found}
                alt="style img"
                title={style[2]}
              />
            </label>
          </div>
        ))}
      </FlexImageContainer>
      <Select
        sizes={sizes}
        quantity={quantity}
        style={results[selectedStyle]}
      />
    </div>
  );
}
