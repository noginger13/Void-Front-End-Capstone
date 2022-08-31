import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 70%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const HeadContainer = styled.div`
  display: flex;
  @media (max-width: 550px) {
    display: none;
  }
`;
export const ProductName = styled.p`
  width: 20%;
  text-align: center;
  @media (max-width: 550px) {
    width: 30%;
    margin: 5px auto;
  }
`;
export const ProductInfo = styled.p`
  width: 10%;
  text-align: center;
  @media (max-width: 550px) {
    width: 50vw;
  }
`;

export const ProductStyle = styled.p`
  width: 15%;
  text-align: center;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  border-top: 1px lightgrey solid;
  margin: 5px 0;
  min-width: 400px;
`;

export const FSiconCheck = styled.i`
  font-size: 20px;
  color: green;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const FSiconX = styled.i`
  font-size: 20px;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;

export const FSiconEdit = styled.i`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

// summary
export const SummaryContainer = styled.div`
  margin-left: 20px;
  width: 25%;
  border: 1px lightgrey solid;
  display: flex;
  flex-direction: column;
  height: 50vh;
  @media (max-width: 550px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    min-width: 400px;
  }
`;

export const SummaryHeader = styled.h1`
  text-align: center;
  width: 100%;
  border-bottom: 1px black dotted;
  padding-bottom: 10px;
`;

export const SummaryDetailContainer = styled.div`
  height: 70%;
`;

export const SummaryDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
`;

export const TotalContainer = styled.div`
  border-top: 1px black solid;
  width: 100%;
`;

export const Total = styled.p`
  float: right;
  font-size: 25px;
  margin-right: 25px;
`;
