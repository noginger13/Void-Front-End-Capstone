import React, { useState } from 'react';

//Components
import ImageModal from './ImageModal';

//Helper Functions
import isImage from '../helpers/isImage';

//Styles
import { ReviewImages } from '../styles/ReviewTiles.styled';

export default function ReviewGallery({ photos }) {
  const [showImage, setShowImage] = useState(['', false]);

  const galleryBuilder = (photoArray) => {
    let gallery = [];

    for (let photo of photoArray) {
      if (isImage(photo.url)) {
        gallery.push(
          <div key={photo.id}>
            <div>
              <img
                className="thumbnail"
                src={photo.url}
                onClick={() => setShowImage([photo.url, true])}
              ></img>
            </div>
            <ImageModal
              url={photo.url}
              showImage={showImage}
              setShowImage={setShowImage}
            />
          </div>
        );
      }
    }
    return gallery;
  };

  return <ReviewImages>{galleryBuilder(photos)}</ReviewImages>;
}
