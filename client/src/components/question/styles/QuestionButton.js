import styled from 'styled-components';

export const QuestionButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 20px;

  min-width: 200px;
  margin: 5px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  background: #fff;
  color: #696969;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  :hover {
    background: #27AE60;
    color: white;
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }
`;