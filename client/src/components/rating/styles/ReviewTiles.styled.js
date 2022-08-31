import styled from 'styled-components';

export const ReviewImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  padding: 10px 0;

  .thumbnail {
    max-height: 150px;
    max-width: 150px;
    padding: 10px;
  }

  img:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const ReviewCheck = styled.div`
  padding: 5px 0;

  i {
    padding: 10px;
  }
`;
