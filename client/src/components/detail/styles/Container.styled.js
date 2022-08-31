import styled from 'styled-components';

export const Container = styled.div`
  width: 1300px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 16px;
`;

export const FlexSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justtify-content: space-between;
`;

export const OverviewContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductDetailContainer = styled.div`
  margin-left: 20px;
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
