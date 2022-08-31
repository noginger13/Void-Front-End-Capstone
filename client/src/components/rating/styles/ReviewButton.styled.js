import styled from 'styled-components';

export const ReviewButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 20px;
  width: 20%;
  min-width: 150px;
  margin: 5px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 0.8em;
  text-transform: uppercase;
  background: #458161;
  color: white;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  :hover {
    background: #fff;
    color: #696969;
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }
`;