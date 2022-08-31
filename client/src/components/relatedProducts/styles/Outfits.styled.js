import styled from 'styled-components';
export const CardSliderContainer = styled.div`
  display:flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar{
    display:none;
  }
`;

export const OutfitCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 350px;
  border-radius: 10px;
  position: relative;
  text-align: left;
  box-shadow: 3px 3px 5px 0px #949391;
`;
export const AddOutfitsStyled = styled.i`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;
export const CardsIconStyled = styled.div`
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: white;
  z-index: 1;
  opacity: 90%;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`;

export const OutfitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 350px;
  border-radius: 10px;
  margin: 25px;
  position: relative;
  text-align: left;
  box-shadow: 3px 3px 5px 0px #949391;
  transition: all .35s ease-in-out;
  &:hover {
    transform scale(1.02);
    box-shadow: 5px 5px 10px 2px rgba(69, 129, 97, 0.9);
  }
`;
export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(69, 129, 97, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckStyled = styled.i`
color: #458161;
display: flex;
justify-content: center;
`;

export const TableRowStyled = styled.div`
color: #458161;
display: flex;
justify-content: center;
`;

export const BackArrow = styled.i`
position: absolute;
left: 0px;
top: 200px;
color: #458161;
z-index:1;
opacity: 0.1;
font-size: 30px;
`
export const ForwardArrow = styled.i`
position: absolute;
right: 30px;
top:200px;
color: #458161;
font-size: 30px;
z-index: 1
`
