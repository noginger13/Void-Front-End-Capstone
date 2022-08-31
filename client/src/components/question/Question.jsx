import React from 'react';
import Answer from './Answer';
import HelpfulQuestion from './HelpfulQuestion';
import AddAnswerForm from './AddAnswerForm';
import { useState } from 'react';
import { ReviewButton } from '../rating/styles/ReviewButton.styled';
import axios from 'axios';
import clickTracker from '../detail/clickTracker';

export default function Question(props) {
  const [showAnswerForm, setAnswerForm] = useState(false);
  const [howManyAnswers, setHowManyAnswers] = useState(2);
  const [markedHelpful, setHelpfulQuestion] = useState(false);

  async function markHelpfulQuestion() {
    setHelpfulQuestion(true);
    var data = JSON.stringify({
      question_id: Number(props.question.question_id)
    });
    var config = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${Number(
        props.question.question_id
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

  let AnswerList = Object.keys(props.question.answers)
    .slice(0, howManyAnswers)
    .map((objKey) => {
      return (
        <Answer
          key={props.question.answers[objKey].id}
          answer={props.question.answers[objKey]}
        />
      );
    });

  let showLoadAnswers =
    Object.keys(props.question.answers).length > howManyAnswers ? (
      <ReviewButton onClick={() => setHowManyAnswers(howManyAnswers + 2)}>
        Load More Answers
      </ReviewButton>
    ) : (
      <></>
    );

  let answerForm;
  if (showAnswerForm) {
    answerForm = (
      <AddAnswerForm
        product_name={props.product_name}
        question_body={props.question.question_body}
        showAnswerForm={showAnswerForm}
        setAnswerForm={setAnswerForm}
        question_id={props.question.question_id}
      />
    );
  }

  return (
    <div
    onClick={() => {
      clickTracker('Q&A', 'Question Element')
    }}
    style={{ padding: '20px' }}>
      <h4 style={{ display: 'inline' }}>Q: {props.question.question_body} </h4>
      <HelpfulQuestion
        helpfulness={props.question.question_helpfulness}
        setAnswerForm={setAnswerForm}
        showAnswerForm={showAnswerForm}
        markHelpfulQuestion={markHelpfulQuestion}
        markedHelpful={markedHelpful}
      />
      {AnswerList}
      {showLoadAnswers}
      {answerForm}
    </div>
  );
}
