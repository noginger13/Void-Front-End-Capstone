import React from 'react';
import {
  SquareImageContainerRow,
  FSiconLeftRightArrow,
  SquareImageRow
} from '../styles/Image.styled';

export default function SquareThumbnailImage({
  displayList,
  prevDisplayList,
  onClickHandler,
  currentImage,
  nextDisplayList,
  style
}) {
  return (
    <SquareImageContainerRow>
      {displayList.length !== 0 && displayList[0].url !== style[0].url && (
        <FSiconLeftRightArrow
          className="fa-solid fa-angle-left"
          onClick={prevDisplayList}
          style={{
            margin: 'auto 0'
          }}
        />
      )}
      {displayList.map((item, index) => (
        <SquareImageRow
          data-testid="row-thumbnail-image"
          key={index}
          src={item.url}
          alt="img"
          onClick={(e) => onClickHandler(e.target.src)}
          style={{
            border: currentImage === item.url ? '2px red solid' : ''
          }}
        />
      ))}
      {displayList.length !== 0 &&
        displayList[displayList.length - 1].url !==
          style[style.length - 1].url && (
          <FSiconLeftRightArrow
            className="fa-solid fa-angle-right"
            onClick={nextDisplayList}
          />
        )}
    </SquareImageContainerRow>
  );
}
