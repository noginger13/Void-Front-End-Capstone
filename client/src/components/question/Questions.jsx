import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Question from './Question';
import { useParams } from 'react-router';
import getProductQuestion from '../../actions/productQuestionAction';
import AddQuestionForm from './AddQuestionForm';
import SearchQuestions from './SearchQuestions';
import { QuestionButton } from './styles/QuestionButton';
import clickTracker from '../detail/clickTracker';

export default function Questions() {
  const productDetail = useSelector((state) => state.productDetail);
  const { name } = productDetail.productDetail;
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productQuestions = useSelector((state) => state.productQuestion);
  const [showQuestionForm, setQuestionForm] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [howManyQuestions, setHowManyQuestions] = useState(4);

  useEffect(() => {
    dispatch(getProductQuestion(id));
  }, [id, dispatch]);

  let QuestionsList;
  let showLoadQuestions;
  let questionForm;

  if (showQuestionForm) {
    questionForm = (
      <AddQuestionForm
        product_id={id}
        product_name={name}
        setQuestionForm={setQuestionForm}
        showQuestionForm={showQuestionForm}
        onClick={clickTracker('Q&A', 'ShowQuestionFormButton')}
      />
    );
  }

  if (productQuestions.productQuestions) {
    showLoadQuestions =
      Object.keys(productQuestions.productQuestions.results).length >
      howManyQuestions ? (
        <QuestionButton
          style={{ margin: '10px' }}
          onClick={() => {
            setHowManyQuestions(howManyQuestions + 2);
            clickTracker('Q&A', 'MoreQuestionsButton')
          }}
        >
          See More Questions
        </QuestionButton>
      ) : (
        <></>
      );

    QuestionsList =
      searchValue.length >= 3
        ? productQuestions.productQuestions.results
            .filter((question) =>
              question.question_body
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            )
            .map((question) => {
              return (
                <Question
                  key={question.question_id}
                  product_name={name}
                  question={question}
                />
              );
            })
        : productQuestions.productQuestions.results
            .slice(0, howManyQuestions)
            .map((question) => {
              return (
                <Question
                  key={question.question_id}
                  product_name={name}
                  question={question}
                  productName={name}
                />
              );
            });
  }

  return (
    <>
      <h3>Questions & Answers</h3>
      <SearchQuestions
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div
        style={{
          overflow: 'auto',
          maxHeight: '50vh',
          width: '100%',
          position: 'relative',
          margin: '10px'
        }}
      >
        <div>{QuestionsList}</div>
      </div>
      <div
        id="buttonContainer"
        style={{
          margin: 'auto',
          width: '100%',
          padding: '3%'
        }}
      >
        <QuestionButton onClick={() => setQuestionForm(!showQuestionForm)}>
          Add A Question
        </QuestionButton>
        {showLoadQuestions}
      </div>
      {questionForm}
    </>
  );
}
