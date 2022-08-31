import { OUTFITS_ADDED, OUTFITS_REMOVED } from '../actions/types';

export default function outfitsReducer(state = [], action) {
  switch (action.type) {
    case OUTFITS_ADDED:
      const nextOutfit = action.payload;
      const product = nextOutfit.style.product_id;
      const found = state.find((item) => {
        return item.style.product_id === product;
      });
      if (!found) {
        return [nextOutfit, ...state];
      }
      return state;
    case OUTFITS_REMOVED:
      const id = action.payload.style.product_id;
      const stateCopy = state.slice();
      const index = stateCopy.findIndex((item) => item.style.product_id === id);
      stateCopy.splice(index, 1);
      return stateCopy;
    default:
      return state;
  }
}
