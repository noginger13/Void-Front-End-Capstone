import { OUTFITS_ADDED, OUTFITS_REMOVED } from './types';
export const addOutfits = (outfit) => {
  const outfits = JSON.parse(localStorage.getItem('outfitsPersist'))
    ? JSON.parse(localStorage.getItem('outfitsPersist'))
    : [];
  var found = outfits.find((item) => item.details.id === outfit.details.id);
  if (!found) {
    outfits.push(outfit);
    localStorage.setItem('outfitsPersist', JSON.stringify(outfits));
  }
  return {
    type: OUTFITS_ADDED,
    payload: outfit
  };
};
export const removeOutfits = (removedOutfit) => {
  var outfits = JSON.parse(localStorage.getItem('outfitsPersist'));
  outfits = outfits.filter(
    (item) => item.details.id !== removedOutfit.details.id
  );
  localStorage.setItem('outfitsPersist', JSON.stringify(outfits));
  return {
    type: OUTFITS_REMOVED,
    payload: removedOutfit
  };
};
