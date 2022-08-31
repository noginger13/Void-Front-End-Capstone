import React, { useState } from 'react';

export default function ReviewBody({ body }) {
  const [clicked, setClicked] = useState(false);
  let isLong = body.length > 250;
  let viewableBody;

  if (isLong && !clicked) {
    let truncated = body.substring(0, 250);
    viewableBody = (
      <p
        onClick={() => {
          setClicked(true);
        }}
      >
        {truncated} <u>Show more...</u>
      </p>
    );
  } else {
    viewableBody = <p>{body.substring(0, 1000)}</p>;
  }

  return viewableBody;
}
