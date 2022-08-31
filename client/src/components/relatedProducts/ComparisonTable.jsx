import React from 'react';
import ComparisonTableEntry from './ComparisonTableEntry';
import {combineThem} from './Helpers/helperFunctions';

export default function ComparisonTable({
  relatedFeatures,
  relatedName,
  productFeatures,
  productName
}) {
  var combinedFeatures = combineThem(relatedFeatures, productFeatures);
  var comparisons = combinedFeatures.map((item, index) => {
    return <ComparisonTableEntry item={item} key={item.feature + index} />;
  });
  return (
    <>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <th style={{ width: '25%', backgroundColor: '#458161', color: 'white' }}>
              {productName}
            </th>
            <th style={{ width: '50%', backgroundColor: '#458161', color: 'white' }}></th>
            <th style={{ width: '25%', backgroundColor: '#458161', color: 'white' }}>
              {relatedName}
            </th>
          </tr>
          {comparisons}
        </tbody>
      </table>
    </>
  );
}
