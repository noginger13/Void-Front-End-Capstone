import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Stars from '../detail/Stars';
import transparentStar from '../../images/transparentstar.png';
import { CardsIconStyled, OutfitContainer } from './styles/Outfits.styled';
import ComparisonModal from './ComparisonModal';

export default function RelatedCard({ item, index }) {
  const { id, name, category, default_price, features } = item;
  const { relatedStyle, loading, ModalContainer } = useSelector(
    (state) => state.relatedStyle
  );
  const [show, setShow] = useState(false);
  var photo = '';
  var price = <div>${default_price}</div>;
  var priceStyle = { margin: '0 0 0px 10px' };

  if (!loading && relatedStyle) {
    photo = relatedStyle[index].results[0].photos[0].url;
    var { results } = relatedStyle;
    if (relatedStyle[index].results[0].sale_price) {
      price = (
        <>
          <div style={{ color: 'red' }}>
            ${relatedStyle[index].results[0].sale_price}
          </div>
          <div style={{ textDecoration: 'line-through' }}>${default_price}</div>
        </>
      );
    }
  }

  var handleClick = () => {
    setShow(true);
  };
  var handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <ComparisonModal
        relatedComparisonFeatures={features}
        relatedName={name}
        show={show}
        onClose={handleClose}
      />

      <OutfitContainer>
        <CardsIconStyled>
          <img
            src={transparentStar}
            style={{
              width: '18px',
              position: 'absolute'
              // top: '15px',
              // right: '20px',
              // borderRadius: '25%'
            }}
            onClick={handleClick}
          />
        </CardsIconStyled>
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
              display: 'flex',
              justifyContent: 'center',
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
          <div style={{ margin: '0px 0 10px 10px' }}>{category}</div>

          <div
            className="placeholder"
            style={{ fontWeight: 'bold', margin: '0 0 0 10px' }}
          >
            {name}
          </div>
          <div style={priceStyle}>{price}</div>
        </Link>
      </OutfitContainer>
    </>
  );
}
