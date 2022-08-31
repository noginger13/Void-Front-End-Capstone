import React from 'react';
import { useSelector } from 'react-redux';
import {
  DescriptionContainer,
  DescriptionText,
  Features,
  CheckIcon
} from '../styles/Description.styled';

export default function Description() {
  const productDetail = useSelector((state) => state.productDetail);
  const { slogan, description, features } = productDetail.productDetail;
  return (
    <DescriptionContainer>
      <DescriptionText>
        <h2 data-testid="slogan">{slogan}</h2>
        <p data-testid="description">{description}</p>
      </DescriptionText>
      <Features>
        {features.map(
          (feature, index) =>
            feature.value !== null && (
              <p key={index} data-testid="features">
                <CheckIcon className="fa-solid fa-check" />
                {feature.value}
              </p>
            )
        )}
      </Features>
    </DescriptionContainer>
  );
}
