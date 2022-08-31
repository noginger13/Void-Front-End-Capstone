import React from 'react';
import HelpfulAnswer from './HelpfulAnswer';
import moment from 'moment';
import axios from 'axios';
import image_not_found from '../../images/image_not_found.png';
import { useState } from 'react';
import isImage from '../rating/helpers/isImage';
import clickTracker from '../detail/clickTracker';

export default function Answer(props) {
  const [answerReported, setAnswerReported] = useState(false);
  const [markedHelpful, setHelpful] = useState(false);

  async function reportAnswer() {
    setAnswerReported(true);
    var data = JSON.stringify({
      answer_id: Number(props.answer.id)
    });

    var config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${Number(
        props.answer.id
      )}/report`,
      headers: {
        Authorization: `${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function markHelpfulAnswer() {
    setHelpful(true);
    var data = JSON.stringify({
      answer_id: Number(props.answer.id)
    });
    var config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${Number(
        props.answer.id
      )}/helpful`,
      headers: {
        Authorization: `${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let answerPhotos =
    props.answer.photos.length > 0 ? (
      props.answer.photos.map((photo) => {
        return (
          <img
            key={String(photo)}
            style={{
              maxHeight: '200px',
              display: 'inline-block',
              margin: '10px'
            }}
            src={isImage(photo) ? photo : image_not_found}
          ></img>
        );
      })
    ) : (
      <></>
    );

  return (
    <div
      onClick={() => clickTracker('Q&A', 'Answer')}
      style={{ marginTop: '10px', padding: '15px' }}
    >
      <div>
        <h4 style={{ display: 'inline' }}>A: </h4>
        <span>{props.answer.body}</span>
      </div>
      <div>{answerPhotos}</div>
      <span style={{ display: 'inline-block', margin: '10px' }}>
        by{' '}
        {props.answer.answerer_name === 'Seller' ? (
          <u style={{ fontWeight: 'bold' }}>Seller</u>
        ) : (
          props.answer.answerer_name
        )}
        ,
        <span style={{ margin: '5px' }}>
          {moment(`${props.answer.date}`).format('LL')}
        </span>
        <HelpfulAnswer
          helpfulness={props.answer.helpfulness}
          reportAnswer={reportAnswer}
          answerReported={answerReported}
          markedHelpful={markedHelpful}
          markHelpfulAnswer={markHelpfulAnswer}
        />
      </span>
    </div>
  );
}
