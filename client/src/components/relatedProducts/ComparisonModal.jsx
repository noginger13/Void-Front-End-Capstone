import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonTable from './ComparisonTable';
import { ModalContainer, FeaturesContainer } from './styles/Outfits.styled';
import { useSelector } from 'react-redux';

export default function ComparisonModal({
  show,
  onClose,
  relatedComparisonFeatures,
  relatedName
}) {
  const { name, features } = useSelector(
    (state) => state.productDetail.productDetail
  );
  if (features[0].value) {
    var productFeatures = features.map((item, index) => {
      return <p key={item.value + index}>{item.value}</p>;
    });
  }
  var relatedFeatures = relatedComparisonFeatures.map((item, index) => {
    return <p key={item.value + index}>{item.value}</p>;
  });
  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <ModalContainer onClick={onClose}>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'white',
            flexDirection: 'column',
            opacity: '97%',
            width: '40%',
            height: '55%',
            alignItems: 'center',
            border: '5px solid #458161',
            boxShadow: '0px 0px 4px 0px white',
            borderRadius: '1%',
            overflow: 'auto',

          }}
          onClick={(e) => {e.stopPropagation()}}
        >

          <div style={{color: '#458161', position: 'relative', left: '5px'}}>Comparing</div>
          <ComparisonTable
            relatedFeatures={relatedComparisonFeatures}
            relatedName={relatedName}
            productName={name}
            productFeatures={features}
          />

          <button onClick={onClose} style={{display: 'flex', justifyContent: 'center', width: '35%'}}>Close</button>
        </div>
      </ModalContainer>
    </>,
    document.getElementById('root')
  );
}

//get product comparison details can do that from state
//
