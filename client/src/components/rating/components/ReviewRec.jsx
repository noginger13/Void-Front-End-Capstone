import React from 'react';

export default function ReviewRec({ rec }) {
  let recommended;

  if (rec) {
    recommended = (
      <div>
        <i className="fa-solid fa-check"></i> I recommend this product.
      </div>
    );
  }

  return recommended;
}
