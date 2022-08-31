import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import Outfits from './Outfits';

import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';

import {
  CardSliderContainer,
  BackArrow,
  ForwardArrow
} from './styles/Outfits.styled';
import { backClick, forwardClick } from './Helpers/helperFunctions';

export default function RelatedProducts() {
  function RelatedSlider() {
    return (
      <CardSliderContainer ref={relatedSliderRef} id="relatedSlider">
        {cards}
      </CardSliderContainer>
    );
  }
  const relatedSliderRef = useRef(null);
  const backButton = useRef(null);
  const forwardButton = useRef(null);

  const { relatedProducts } = useSelector((state) => state.relatedProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelatedDetails(relatedProducts));
    dispatch(getRelatedStyle(relatedProducts));
  }, [relatedProducts, dispatch]);
  const { relatedDetails, loading } = useSelector(
    (state) => state.relatedDetails
  );
  var cards = '';
  var slidingCards = '';
  const { relatedStyle, loading: relatedStyleLoading } = useSelector(
    (state) => state.relatedStyle
  );
  if (!loading && relatedDetails) {
    cards = relatedDetails.map((item, index) => (
      <RelatedCard item={item} key={item.id} index={index} />
    ));
    slidingCards = RelatedSlider();
  }

  return (
    <>
      <h3>RELATED PRODUCTS</h3>
      <div
        style={{
          width: '100%',
          position: 'relative',
          margin: '0'
        }}
      >
        <div
          style={
            {
              /* backgroundColor:'#f5f5f5' */
            }
          }
        >
          <BackArrow
            onClick={() => backClick(relatedSliderRef, backButton, forwardButton)}
            ref={backButton}
            className="fa-solid fa-circle-chevron-left fa-36px"
          />
          <ForwardArrow
            onClick={() => forwardClick(relatedSliderRef, backButton, forwardButton)}
            ref={forwardButton}
            className="fa-solid fa-circle-chevron-right fa-36px"
          />
          {slidingCards}
        </div>
      </div>
      <Outfits />
    </>
  );
}
