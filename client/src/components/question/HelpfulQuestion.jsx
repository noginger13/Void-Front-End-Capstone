import React from 'react';

export default function HelpfulQuestion(props) {
  let helpfulQuestion = props.markedHelpful ? (
    <>
      <u
        style={{ margin: '5px' }}
      >
        Yes
      </u>
      <span>({props.helpfulness + 1})</span>
    </>
  ) : (
    <>
      <u
        style={{ margin: '5px' }}
        onClick={(e) => props.markHelpfulQuestion()}
      >
        Yes
      </u>
      <span>({props.helpfulness})</span>
    </>
  );
  return (
    <div style={{ display: 'inline', position: 'relative', float: 'right' }}>
      <span style={{ margin: '10px' }}>
        Helpful?
        {helpfulQuestion}
      </span>
      <span style={{ margin: '10px' }}>|</span>
      <u
        onClick={() => props.setAnswerForm(!props.showAnswerForm)}
        style={{ margin: '10px' }}
      >
        Add Answer
      </u>
    </div>
  );
}
