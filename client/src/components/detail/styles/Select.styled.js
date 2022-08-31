import styled from 'styled-components';

export const SelectSize = styled.select`
  height: 60px;
  width: 65%;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  border: grey 1.5px solid;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const SelectQuantity = styled.select`
  height: 60px;
  width: 25%;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  border: grey 1.5px solid;
  margin-top: 15px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const AddItem = styled.div`
  height: 60px;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  border: grey 1.5px solid;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const FavIcon = styled.div`
  height: 60px;
  width: 15%;
  border: grey 1.5px solid;
  margin-top: 15px;
  margin-left: auto;
`;

export const ErrorMsg = styled.p`
  background-color: red;
  color: white;
  text-align: center;
  font-size: 25px;
  width: 80%;
`;

export const SuccessMsg = styled.p`
  background-color: lightgreen;
  color: white;
  text-align: center;
  font-size: 25px;
  width: 80%;
`;
