import React, { useState, useEffect } from 'react';
import {
  SideBySideMagnifier,
  GlassMagnifier,
  Magnifier,
  MagnifierContainer,
  PictureInPictureMagnifier,
  MagnifierPreview,
  MagnifierZoom
} from 'react-image-magnifiers';
import {
  FillImage,
  SquareImage,
  SquareImageContainer,
  ImageGalleryContainer,
  FSiconUpDownArrow,
  FSiconLeftRightArrow,
  FillImageContainer,
  FSiconExpand,
  FSRightArrowAndExpandContainer
} from '../styles/Image.styled';
import star from '../../../images/star.png';
import SquareThumbnailImage from './SquareThumbnailImage';
import clickTracker from '../clickTracker';
import image_not_found from '../../../images/image_not_found.png';

export default function ImageGallery({ style, expandViewController }) {
  const [currentImage, setCurrentImage] = useState('');
  const [displayList, setDisplayList] = useState([]);
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandView, setExpandView] = useState(false);
  const [test, setTest] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    });
  };
  useEffect(() => {
    setCurrentImage(style[0].url);
    if (style.length > 7) {
      setDisplayList(style.slice(0, 7));
    } else {
      setDisplayList(style.slice());
    }
    setFirstImageIndex(0);
    setCurrentImageIndex(0);
  }, [style]);

  const onClickHandler = (e, src) => {
    clickTracker('ProductOverview', 'ImageGallery');
    setCurrentImage(src.url);
    let a;
    for (let i = 0; i < style.length; i++) {
      if (src.url === style[i].url) {
        a = i;
      }
    }
    setCurrentImageIndex(a);
  };
  const nextDisplayList = () => {
    clickTracker('ProductOverview', 'Thumbnail image display list');
    if (firstImageIndex + 7 < style.length) {
      setDisplayList(style.slice(firstImageIndex + 1, firstImageIndex + 8));
      setFirstImageIndex(firstImageIndex + 1);
    }
  };
  const prevDisplayList = (reset) => {
    clickTracker('ProductOverview', 'Thumbnail image display list');
    if (reset !== undefined) {
      setDisplayList(style.slice(0, 7));
    }
    setDisplayList(
      style.slice(
        firstImageIndex - 1 >= 0 ? firstImageIndex - 1 : 0,
        firstImageIndex === 0 ? 7 : firstImageIndex + 6
      )
    );
    setFirstImageIndex(firstImageIndex - 1 >= 0 ? firstImageIndex - 1 : 0);
  };
  const nextDisplayImage = () => {
    clickTracker('ProductOverview', 'Main image');
    if (currentImageIndex >= 3) {
      nextDisplayList();
    }
    setCurrentImage(style[currentImageIndex + 1].url);
    setCurrentImageIndex(currentImageIndex + 1);
  };
  const prevDisplayImage = () => {
    clickTracker('ProductOverview', 'Main image');
    if (currentImageIndex > 6) {
      prevDisplayList();
    } else {
      prevDisplayList(1);
    }
    setCurrentImage(style[currentImageIndex - 1].url);
    setCurrentImageIndex(currentImageIndex - 1);
  };
  const expandViewHandler = () => {
    clickTracker('ProductOverview', 'Main image');
    expandViewController(!expandView);
    setExpandView(!expandView);
  };
  return (
    <>
      {displayList.length !== 0 && (
        <SquareThumbnailImage
          displayList={displayList}
          prevDisplayList={prevDisplayList}
          onClickHandler={onClickHandler}
          currentImage={currentImage}
          nextDisplayList={nextDisplayList}
          style={style}
        />
      )}
      <ImageGalleryContainer
        style={{ width: expandView ? '100%' : '', overflow: 'hidden' }}
      >
        {/* <SquareImageContainer style={{ margin: 'auto 0' }}> */}
        <SquareImageContainer>
          {displayList.length !== 0 && displayList[0].url !== style[0].url && (
            <FSiconUpDownArrow
              data-testid="up-arrow"
              className="fa-solid fa-angle-up"
              onClick={prevDisplayList}
              // style={{ marginBottom: '25px' }}
            />
          )}
          {displayList.map((item, index) => (
            <SquareImage
              data-testid="square-image"
              src={
                item.thumbnail_url === null
                  ? image_not_found
                  : item.thumbnail_url[0] !== 'h'
                  ? item.thumbnail_url.slice(1)
                  : item.thumbnail_url
              }
              alt={currentImage}
              key={index}
              onClick={(e) => {
                onClickHandler(e, item);
              }}
              style={{
                border: currentImage === item.url ? '2px red solid' : ''
              }}
            />
          ))}
          {displayList.length !== 0 &&
            displayList[displayList.length - 1].url !==
              style[style.length - 1].url && (
              <FSiconUpDownArrow
                data-testid="down-arrow"
                className="fa-solid fa-angle-down"
                onClick={nextDisplayList}
                // style={{ marginTop: '25px' }}
              />
            )}
        </SquareImageContainer>
        <FillImageContainer>
          {displayList.length !== 0 && currentImageIndex !== 0 && !test && (
            <FSiconLeftRightArrow
              data-testid="left-arrow"
              className="fa-solid fa-angle-left"
              onClick={prevDisplayImage}
              style={{ paddingLeft: '30px' }}
            />
          )}
          {/* {expandView && windowWidth > 768 ? ( */}
          {expandView ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                // overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                data-testid="expand-view-image"
                src={currentImage}
                style={{
                  transform: test ? 'scale(2.5)' : '',
                  transformOrigin: `${coords.x}px ${coords.y}px`,
                  objectFit: 'contain',
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  cursor: test ? 'zoom-out' : 'crosshair'
                }}
                alt="img"
                onClick={() => setTest(!test)}
                onMouseMove={handleMouseMove}
              />
            </div>
          ) : (
            <FillImage
              id="img_id"
              data-testid="default-view-image"
              alt="img"
              src={currentImage || image_not_found}
              onClick={expandViewHandler}
            />
          )}
          {!test && (
            <FSRightArrowAndExpandContainer>
              <FSiconExpand
                data-testid="expand-icon"
                className="fa-solid fa-expand"
                onClick={expandViewHandler}
              />
              {displayList.length !== 0 &&
                currentImageIndex !== style.length - 1 && (
                  <FSiconLeftRightArrow
                    data-testid="right-arrow"
                    className="fa-solid fa-angle-right"
                    onClick={nextDisplayImage}
                    style={{ paddingBottom: '25px' }}
                  />
                )}
            </FSRightArrowAndExpandContainer>
          )}
        </FillImageContainer>
      </ImageGalleryContainer>
    </>
  );
}
