import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const BreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: center;
  width 25%;
  min-width: 350px;
  padding: 10px;
`;

export const ProductBreakdownContainer = styled.div`
  box: border-box;
  width: 100%;
  min-width: 350px;
  font-size: 1em;
`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-width: 350px;

  .rating {
    font-size: 3.5em;
  }
`;

export const TableContainer = styled.div`
  box: border-box;
  width: 100%;
  min-width: 350px;
  font-size: 1.1em;

  p {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  u:hover {
    cursor: pointer;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  height: 100%;
  min-width: 350px;
  padding: 0 1em 1em;
  max-height: 88vh;

  @media (max-width: 850px) {
    justify-content: space-around;
  }
`;

export const ReviewTileContainer = styled.div`
  display flex;
  flex-direction: column;
  overflow: auto;

  .tile {
    border-bottom: solid;
    border-bottom-width: thin;
    padding-top: 20px;
    margin: 10px;
  }

  .response {
    background-color: #f2f3f4;
  }

  .checked {
    color: #F1DC19;
  }

  .fa-check {
    color: #458161;
  }

  .alignleft {
    float:left;
  }

  .alignright {
    float:right;
  }

  .helpful {
    padding: 20px 0;
  }

  u:hover {
    cursor: pointer;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  height: 50px;
  padding: 10px;

  p {
    font-size: 1.2em;
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  padding: 20px;
`;
