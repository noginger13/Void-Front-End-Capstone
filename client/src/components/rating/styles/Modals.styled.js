import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImageStyle = styled.div`
  max-width: 80vh;
  max-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2%;

  img {
    max-height: 70vh;
    width: 70vh;
  }
`;

export const ModalReviewStyle = styled.div`
  max-width: auto;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  box-sizing: border-box;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 2%;

  .submissionGallery {
    dislplay: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: fit-content;
  }

  .submissionInputs {
    dislplay: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  img {
    max-width: 100px;
    max-height: 100px;
    padding: 5px;
  }

  .checked {
    color: #f1dc19;
  }

  fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .labels {
    display: flex;
    justify-content: space-between;
    min-width: 100%;
  }

  .left {
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;
  }

  .charButtons {
    display: flex;
    min-width: 100%;
    justify-content: space-between;
  }

  .right {
    padding: 5px;
    text-align: right;
  }

  .label {
    padding: 5px;
  }

  [type=radio] {
    position: relative;
    width: 15px;
    height: 15px;
    opacity: 100;
  }
`;
