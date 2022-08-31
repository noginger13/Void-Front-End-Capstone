import React from 'react';

export default function HelpfulAnswer(props) {
  let reported = props.answerReported ? (
    <u style={{ margin: '5px' }}>Reported</u>
  ) : (
    <u style={{ margin: '5px' }} onClick={() => props.reportAnswer()}>
      Report
    </u>
  );

  let helpful = props.markedHelpful ? (
    <span style={{ margin: '10px' }}>
      Helpful?
      <u style={{ margin: '5px' }}>Yes</u>
      <span>({props.helpfulness + 1})</span>
    </span>
  ) : (
    <span style={{ margin: '10px' }} onClick={() => props.markHelpfulAnswer()}>
      Helpful?
      <u style={{ margin: '5px' }}>Yes</u>
      <span>({props.helpfulness})</span>
    </span>
  );

  return (
    <div style={({ display: 'inline' }, { padding: '10px' })}>
      {helpful}
      <span style={{ margin: '10px' }}>|</span>
      {reported}
    </div>
  );
}
