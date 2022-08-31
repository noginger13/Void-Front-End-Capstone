import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import OutfitCard from './OutfitCard';
import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';
import { addOutfits, removeOutfits } from '../../actions/addOutfitsAction';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import transparentStar from '../../images/transparentstar.png';
import { OutfitCardContainer, AddOutfitsStyled } from './styles/Outfits.styled';

export default function Outfits() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2
  };
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
  function RelatedSlider() {
    return (
      <Slider {...settings} style={{ display: 'flex' }}>
        {cards}
      </Slider>
    );
  }
  var slidingCards = RelatedSlider();
  // }

  return (
    <div style={{ width: '100%', backgroundColor: 'white' }}>
      <h3>Your Outfit</h3>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'columns',
            boxShadow: '3px 1px 10px 0px white inset',
            margin: '25px',
            position: 'relative',
            backgroundColor: '#458161',
            width: '200px',
            height: '350px',
            borderRadius: '10px'
          }}
        >
          <OutfitCardContainer>
            <span>Add to Oufit</span>
            <AddOutfitsStyled
              className="fa-solid fa-plus fa-5x"
              onClick={handleClick}
            ></AddOutfitsStyled>
          </OutfitCardContainer>
        </div>
        <div style={{ minWidth: '600px', maxWidth: '610px' }}>
          {slidingCards}
        </div>
      </div>
    </div>
  );
}
