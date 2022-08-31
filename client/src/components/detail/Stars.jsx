import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';
import {
  SingleStarContainer,
  SingleStarFill,
  SingleStarOutline
} from './styles/Stars.styled';
import star from '../../images/star.png';

export default function Stars({ product_id }) {
  const productMetaData = useSelector((state) => state.productMetaData);
  const [productData, setProductData] = useState({});
  if (product_id !== undefined) {
    useEffect(() => {
      axios
        .get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${product_id}`,
          {
            headers: {
              Authorization: process.env.API_KEY
            }
          }
        )
        .then(({ data }) => setProductData(data))
        .catch((err) => console.log(err));
    }, [product_id]);
    // console.log(productMetaData);
  }
  const { ratings } =
    product_id === undefined ? productMetaData.productMetaData : productData;
  let rates = 0;
  let totalPeople = 0;
  for (let i in ratings) {
    rates += Number(ratings[i]) * Number(i);
    totalPeople += Number(ratings[i]);
  }
  let aveRates = rates / totalPeople;
  let stars = [];
  while (stars.length < 5) {
    if (aveRates > 1) {
      stars.push(1);
    } else if (aveRates > 0) {
      aveRates = aveRates.toFixed(1);
      let empty = Math.abs(0 - aveRates);
      let quart = Math.abs(0.25 - aveRates);
      let half = Math.abs(0.5 - aveRates);
      let three = Math.abs(0.75 - aveRates);
      let full = Math.abs(1 - aveRates);
      let closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case empty:
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          console.log('OOPS');
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    aveRates = aveRates - 1;
  }
  return (
    <div>
      {stars.map((item, index) => {
        return (
          <SingleStarContainer key={index}>
            <SingleStarFill style={{ width: `${item * 18}px` }}>
              <SingleStarOutline src={star} alt="star img" />
            </SingleStarFill>
          </SingleStarContainer>
        );
      })}
    </div>
  );
}
