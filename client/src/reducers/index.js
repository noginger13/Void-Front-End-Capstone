import { combineReducers } from 'redux';
import productDetailReducer from './productDetailReducer';
import productStyleReducer from './productStyleReducer';
import cartReducer from './cartReducer';
import relatedProductsReducer from './relatedProductsReducer';
import productReviewMetaDataReducer from './productReviewMetaDataReducer';
import productQuestionReducer from './productQuestionReducer';
import productReviewsReducer from './productReviewsReducer';
import relatedDetailsReducer from './relatedDetailsReducer';
import relatedStyleReducer from './relatedStyleReducer';
import outfitsReducer from './outfitsReducer';

export default combineReducers({
  cart: cartReducer,
  productDetail: productDetailReducer,
  productStyle: productStyleReducer,
  productMetaData: productReviewMetaDataReducer,
  productQuestion: productQuestionReducer,
  productReviews: productReviewsReducer,
  relatedProducts: relatedProductsReducer,
  relatedDetails: relatedDetailsReducer,
  relatedStyle: relatedStyleReducer,
  outfits: outfitsReducer
});
