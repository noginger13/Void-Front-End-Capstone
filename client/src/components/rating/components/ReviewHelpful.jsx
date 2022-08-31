import React, { useState } from 'react';

//Helper Functions
import postFeedback from '../helpers/postFeedback';

export default function ReviewHelpful({ helpfulness, id }) {
  const [helpful, setHelpful] = useState([id, false, '']);

  if (!helpful[1]) {
    return (
      <div className="helpfulness">
        Was this review helpful?{' '}
        <u
          className="submit help"
          onClick={() => {
            postFeedback(id, 'helpful');
            setHelpful(() => {
              return [id, true];
            });
          }}
        >
          Yes
        </u>{' '}
        ({helpfulness}) |{' '}
        <u
          className="submit report"
          onClick={() => {
            setHelpful(() => {
              postFeedback(id, 'report');
              return [id, true];
            });
          }}
        >
          Report
        </u>
      </div>
    );
  } else {
    return (
      <div className="helpfulness">
        Was this review helpful? Thank you for the feedback.
      </div>
    );
  }
}
