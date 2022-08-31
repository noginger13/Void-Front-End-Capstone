import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

//Components
import Reviews from './components/Reviews';
import ReviewHeader from './components/ReviewHeader';
import ReviewFooter from './components/ReviewFooter';
import RatingBreakdown from './components/RatingBreakdown';
import ProductBreakdown from './components/ProductBreakdown';
import ReviewModal from './components/ReviewModal';

//Helpers
import clickTracker from '../detail/clickTracker';

//Styles
import {
  MainContainer,
  BreakdownContainer,
  ReviewContainer,
  StyledFooter
} from './styles/FlexContainers.styled';

export default function Rating() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);
  const { productDetail } = useSelector((state) => state.productDetail);

  const [reviewArray, setReviewArray] = useState([]);
  const [filters, setFilters] = useState([]);
  const [viewable, setViewable] = useState(2);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (filters.length === 0) {
      setReviewArray(productReviews.results);
    } else {
      let tempViewable = [];
      for (let i = 0; i < productReviews.results.length; i++) {
        let review = productReviews.results[i];
        if (filters.indexOf(review.rating) !== -1) {
          tempViewable.push(review);
        }
      }
      setReviewArray(tempViewable);
    }
  }, [filters, viewable, productReviews]);

  let header;
  if (productReviews.results.length > 0) {
    header = <ReviewHeader reviewArray={reviewArray} />;
  }

  return (
    <div id="rating">
      <h3>RATINGS & REVIEWS</h3>
      <MainContainer>
        <BreakdownContainer>
          <RatingBreakdown
            filters={filters}
            setFilters={setFilters}
            clickTracker={clickTracker}
          />
          <ProductBreakdown clickTracker={clickTracker} />
        </BreakdownContainer>
        <ReviewContainer
          onClick={() => {
            console.log('RatingReviews');
            clickTracker('RatingReviews', 'Reviews');
          }}
        >
          {header}
          <Reviews reviewArray={reviewArray} viewable={viewable} />
          <StyledFooter>
            <ReviewFooter
              reviewArray={reviewArray}
              viewable={viewable}
              setViewable={setViewable}
              showForm={showForm}
              setShowForm={setShowForm}
            />
          </StyledFooter>
        </ReviewContainer>
        <ReviewModal
          showForm={showForm}
          setShowForm={setShowForm}
          productName={productDetail.name}
          id={productDetail.id}
          characteristics={productMetaData.characteristics}
          clickTracker={clickTracker}
        />
      </MainContainer>
    </div>
  );
}
