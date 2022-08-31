import styled from 'styled-components';

export const StarContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #e5e7e9;
    cursor: pointer;
  }
`;

export const StarLeft = styled.div`
  float: left;
  width: 15%;
  margin-top: 5px;
  padding-right: 5px;
`;

export const StarMiddle = styled.div`
  float: left;
  width: 75%;
  margin-top: 5px;
`;

export const StarRight = styled.div`
  text-align: right;
  margin-top: 5px;
`;

export const StarBar = styled.div`
  width: 100%;
  background-color: #f2f3f4;
  text-align: center;
`;

export const StarFill = styled.div`
  width: ${({ fill }) => Number(fill)}%;
  height: 20px;
  background-color: #458161;
`;
