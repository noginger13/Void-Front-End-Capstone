import React from 'react';
import moment from 'moment';

export default function ReviewTop({ rating, id, name, date }) {
  //Build stars
  const starBuilder = (rating, id) => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (i <= rating) {
        stars.push(
          <i key={`star${i}${id}`} className="fa fa-star checked"></i>
        );
      } else {
        stars.push(
          <i key={`star${i}${id}`} className="fa-regular fa-star unchecked"></i>
        );
      }
    }
    return stars;
  };

  return (
    <div>
      <p className="alignleft">{starBuilder(rating, id)}</p>
      <p className="alignright">
        {name}, {moment(`${date}`).format('LL')}{' '}
      </p>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
}
