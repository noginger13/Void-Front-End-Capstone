import styled from 'styled-components';

export const FlexImageContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 60%;
`;
export const CircleImage = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export const SquareImage = styled.img`
  height: 9%;
  width: 110%;
  max-width: 50px;
  max-height: 50px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const SquareImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin-top: 20px;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SquareImageRow = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
  @media (max-width: 450px) {
    width: 30px;
    height: 30px;
    margin: auto 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SquareImageContainerRow = styled.div`
  margin: 10px auto;
  width: 100%;
  height: 60px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const FillImage = styled.img`
  margin: auto;
  width: 80%;
  height: 100%;
  object-fit: contain;
  &:hover {
    cursor: zoom-in;
  }
  @media (max-width: 768px) {
    &:hover {
      cursor: default;
    }
  }
`;

export const FillImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 60vh;
`;

export const ImageGalleryContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 800px;
  flex-direction: row;
  overflow: hidden;
  background-color: rgb(245, 244, 242);
  transition: all 1s ease;
  @media (max-width: 768px) {
    width: 100%;
    max-height: 50%;
  }
`;

export const FSiconUpDownArrow = styled.i`
  margin: 0 auto;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const FSiconLeftRightArrow = styled.i`
  margin: auto 0;
  font-size: 20px;
  &: hover {
    cursor: pointer;
  }
`;

export const FSiconExpand = styled.i`
  margin-top: 25px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FSRightArrowAndExpandContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`;
