import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addOutfits, removeOutfits } from '../../actions/addOutfitsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';
import Stars from '../detail/Stars.jsx';
import transparentStar from '../../images/transparentstar.png';
import star from '../../images/star.png';
import { CardsIconStyled, OutfitContainer } from './styles/Outfits.styled';

export default function OutfitCard({ item, index, outfitStyle, removeOutfit }) {
  const { id, name, category, default_price } = item;
  const { results } = outfitStyle;
  console.log(outfitStyle)
  const dispatch = useDispatch();
  const outfitToRemove = { style: outfitStyle, details: item };
  const productDetail = useSelector((state) => state.productDetail);
  const { relatedStyle, loading } = useSelector((state) => state.relatedStyle);
  var photo = '';
  var price = <div>${default_price}</div>;
  var priceStyle = { margin: '0 0 0px 10px' };
  const handleClick = (event) => {
    dispatch(removeOutfits(outfitToRemove));
  };
  // if (!loading && relatedStyle) {
      photo = results[0].photos[0].url;
      if (results[0].sale_price) {
        price = (
          <>
            <div style={{ color: 'red' }}>
              ${results[0].sale_price}
            </div>
            <div style={{ textDecoration: 'line-through' }}>${default_price}</div>
          </>
        );
      }

  // }
  return (
    <>
      <OutfitContainer>
        <div onClick={handleClick}>
          <CardsIconStyled>
            <i
              className="fa-solid fa-x"
              style={{ opacity: '80%', fontSize: '15px', color: '#458161' }}
            />
          </CardsIconStyled>
        </div>
        <div>
          <Link
            to={`/${id}`}
            style={{ textDecoration: 'none', color: '#458161' }}
          >
            <div
              style={{
                position: 'absolute',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                width: '112px',
                bottom: '5px'
              }}
            >
              <Stars product_id={id} />
            </div>
            <div
              style={{
                boxShadow: '3px 1px 10px 0px white inset',
                width: '200px',
                height: '350px',
                position: 'absolute',
                borderRadius: '10px',
                opacity: '95%'
                // zIndex: '9px',
              }}
            ></div>
            <img
              src={photo}
              style={{
                width: '200px',
                height: '225px',
                objectFit: 'cover',
                borderRadius: '10px 10px 0 0',
                boxShadow: '0 0 8px 8px white inset'
              }}
              alt={name}
            />
            <div style={{ margin: '0 0 10px 10px' }}>{category}</div>

            <div
              className="placeholder"
              style={{ fontWeight: 'bold', margin: '0 0 0 10px' }}
            >
              {name}
            </div>

            <div style={priceStyle}>{price}</div>
          </Link>
        </div>
      </OutfitContainer>
    </>
  );
}
