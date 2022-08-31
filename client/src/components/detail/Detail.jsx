import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Stars from './Stars';
import GoToReview from './productDetail/GoToReview';
import ImageGallery from './imageGallery/ImageGallery';
import Category from './productDetail/Category';
import Title from './productDetail/Title';
import Style from './productDetail/Style';
import SocialMedia from './productDescription/SocialMedia';
import Description from './productDescription/Description';
import {
  OverviewContainer,
  ProductDetailContainer
} from './styles/Container.styled';

export default function Detail() {
  const productStyle = useSelector((state) => state.productStyle);
  const { results } = productStyle.productStyle;
  const [style, setStyle] = useState(results[0].photos);
  const [expandView, setExpandView] = useState(false);
  const currentImage = style[0].url;
  // eslint-disable-next-line object-curly-newline
  const changeStyleHandler = (selectedStyle) => {
    setStyle(selectedStyle);
  };
  const expandViewController = (view) => {
    setExpandView(view);
  };
  return (
    <>
      {/* <Header /> */}
      <OverviewContainer style={{ backgroundColor: 'white', color: 'black' }}>
        <ImageGallery
          style={style}
          expandViewController={expandViewController}
        />
        <ProductDetailContainer
          style={{
            display: expandView && window.innerWidth > 768 ? 'none' : ''
          }}
        >
          <div className="test" style={{ display: 'flex' }}>
            <Stars />
            <GoToReview />
          </div>
          <Category />
          <Title />
          <Style changeStyleHandler={changeStyleHandler} />
        </ProductDetailContainer>
      </OverviewContainer>
      <SocialMedia currentImage={currentImage} />
      <Description />
    </>
  );
}
