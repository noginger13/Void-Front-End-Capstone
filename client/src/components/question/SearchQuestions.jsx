import React from 'react';
import { useState } from 'react';
import {
  QuestionSearchBar,
  QuestionSearchButton
} from './styles/QuestionSearchBar';

export default function SearchQuestions(props) {
  let searchValue = props.searchValue;
  let setSearchValue = props.setSearchValue;

  return (
    <>
      <form
        style={{
          display: 'flex',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderRadius: '5px'
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`Searching for ${searchValue}`);
        }}
      >
        <QuestionSearchBar
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></QuestionSearchBar>
        <QuestionSearchButton>
        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
        </QuestionSearchButton>
      </form>
    </>
  );
}
