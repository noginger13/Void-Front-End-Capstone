import React from 'react';
import {
  SummaryContainer,
  SummaryHeader,
  SummaryDetailContainer,
  SummaryDetail,
  TotalContainer,
  Total
} from '../styles/Cart.styled';

export default function Summary({ totalPrice, tax }) {
  const deliveryCharge = Number((totalPrice * 0.02).toFixed(2));
  const total = Number((totalPrice + tax + deliveryCharge).toFixed(2));
  return (
    <SummaryContainer>
      <SummaryHeader>Summary</SummaryHeader>
      <SummaryDetailContainer>
        <SummaryDetail>
          <p>Items Price:</p>
          <p>${totalPrice}</p>
        </SummaryDetail>
        <SummaryDetail>
          <p>Tax:</p>
          <p>${tax}</p>
        </SummaryDetail>
        <SummaryDetail>
          <p>Delivery Charge:</p>
          <p>${deliveryCharge}</p>
        </SummaryDetail>
        <SummaryDetail>
          <p>Discount: </p>
          <p>$0</p>
        </SummaryDetail>
      </SummaryDetailContainer>
      <TotalContainer>
        <Total>Total: ${total}</Total>
      </TotalContainer>
    </SummaryContainer>
  );
}
