import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import {
  CharBar,
  CharFill,
  CharLabelLeft,
  CharLabelRight,
  CharLabelTop
} from '../styles/ProductBreakdown.styled';
import { ProductBreakdownContainer } from '../styles/FlexContainers.styled';

export default function ProductBreakdown({ clickTracker }) {
  const { productMetaData } = useSelector((state) => state.productMetaData);

  const characteristics = productMetaData.characteristics;
  let charartisticList = Object.keys(characteristics);

  const labels = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Premium'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs loose']
  };

  return (
    <ProductBreakdownContainer
      onClick={() => {
        clickTracker('RatingReviews', 'ProductBreakdown');
        console.log('RatingReviews', 'ProductBreakdown');
      }}
    >
      {charartisticList.map((char) => {
        let percentFill = (Number(characteristics[char].value) / 5) * 100;
        if (characteristics[char].value) {
          return (
            <div key={characteristics[char].id}>
              <CharLabelTop>
                <b>{char}</b>
              </CharLabelTop>
              <br></br>
              <CharBar>
                <CharFill fill={percentFill}></CharFill>
              </CharBar>
              <CharLabelLeft>{labels[char][0]}</CharLabelLeft>
              <CharLabelRight>{labels[char][1]}</CharLabelRight>
              <br></br>
            </div>
          );
        }
      })}
    </ProductBreakdownContainer>
  );
}
