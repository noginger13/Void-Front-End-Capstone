import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import { Modal, ModalImageStyle } from '../styles/Modals.styled';

export default function ImageModal({ showImage, setShowImage, url }) {
  if (!showImage[1] || url !== showImage[0]) {
    return;
  }

  return ReactDOM.createPortal(
    <Modal
      onClick={() => {
        setShowImage([url, false]);
      }}
    >
      <ModalImageStyle>
        <img src={url}></img>
      </ModalImageStyle>
    </Modal>,
    document.getElementById('root')
  );
}
