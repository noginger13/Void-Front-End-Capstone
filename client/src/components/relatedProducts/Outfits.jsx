import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import OutfitCard from './OutfitCard';
import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';
import { addOutfits, removeOutfits } from '../../actions/addOutfitsAction';
import {
  backClick,
  forwardClick,
  horizontalSlide
} from './Helpers/helperFunctions';
import {
  OutfitCardContainer,
  AddOutfitsStyled,
  CardSliderContainer,
  BackArrow,
  ForwardArrow
} from './styles/Outfits.styled';

export default function Outfits() {
  var slidingCards = '';
  var navigation = '';
  var outfitSliderRef = useRef(null);
  var outfitsBack = useRef(null);
  var outfitsForward = useRef(null);
  const { relatedProducts } = useSelector((state) => state.relatedProducts);
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productDetail);
  const { productStyle } = useSelector((state) => state.productStyle);
  const outfits = useSelector((state) => state.outfits);
  const [outfit, setOutfit] = useState(outfits); //first value is state, second value is function
  const addedOutfit = { style: productStyle, details: productDetail };
  const handleClick = (event) => {
    dispatch(addOutfits(addedOutfit));
  };
  const handleRemoveClick = (outfit) => {
    dispatch(removeOutfits(outfit));
    localStorage.setItem('outfitsPersist', JSON.stringify(outfits));
  };
  var cards = outfits.map((item, index) => {
    return (
      <OutfitCard
        item={item.details}
        outfitStyle={item.style}
        key={index}
        index={index}
        removeOutfit={handleRemoveClick}
      />
    );
  });
  var iconLeft = '';
  var iconRight = '';

  function RelatedSlider() {
    return (
      <CardSliderContainer ref={outfitSliderRef} style={{ width: '75%' }}>
        {cards}
      </CardSliderContainer>
    );
  }
  function Icons() {
    return (
      <div style={{ width: '90%', position: 'absolute' }}>
        <BackArrow
          style={{}}
          onClick={() =>
            backClick(outfitSliderRef, outfitsBack, outfitsForward)
          }
          ref={outfitsBack}
          className="fa-solid fa-circle-chevron-left"
        ></BackArrow>
        <ForwardArrow
          style={{}}
          onClick={() =>
            forwardClick(outfitSliderRef, outfitsBack, outfitsForward)
          }
          ref={outfitsForward}
          className="fa-solid fa-circle-chevron-right"
        ></ForwardArrow>
      </div>
    );
  }
  if (cards.length > 0) {
    var slidingCards = RelatedSlider();
    var navigation = Icons();
    iconLeft = (
      <BackArrow
        style={{left: '0px'}}
        onClick={() => backClick(outfitSliderRef, outfitsBack, outfitsForward)}
        ref={outfitsBack}
        className="fa-solid fa-circle-chevron-left"
      ></BackArrow>
    );
    iconRight = (
      <ForwardArrow
        style={{right: '45px'}}
        onClick={() =>
          forwardClick(outfitSliderRef, outfitsBack, outfitsForward)
        }
        ref={outfitsForward}
        className="fa-solid fa-circle-chevron-right"
      ></ForwardArrow>
    );
  }
  // }

  return (
    <div style={{ positon: 'relative', size:'100%' }}>
      <h3>Your Outfit</h3>
      {/* {navigation} */}
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'columns',
            boxShadow: '3px 1px 10px 0px white inset',
            margin: '25px',
            marginLeft: '20px',
            position: 'relative',
            backgroundColor: '#458161',
            width: '200px',
            height: '350px',
            borderRadius: '10px'
          }}
          >
          <OutfitCardContainer style={{}}>

            <span>Add to Oufit</span>
            <AddOutfitsStyled
              className="fa-solid fa-plus fa-5x"
              onClick={handleClick}
              ></AddOutfitsStyled>
          </OutfitCardContainer>
        </div>
        <div style={{position: 'relative',width: '81%'}}>
              {iconLeft}

            {iconRight}
        <CardSliderContainer ref={outfitSliderRef} style={{ width: '100%', minWidth: '100%', right: '0px' }}>
        {cards}
      </CardSliderContainer>
        </div>
      </div>
    </div>
  );
}
