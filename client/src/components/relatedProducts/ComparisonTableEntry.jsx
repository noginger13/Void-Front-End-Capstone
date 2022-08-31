import React from 'react';
import { CheckStyled, TableRowStyled } from './styles/Outfits.styled';

export default function ComparisonTableEntry({ item }) {
  const { hasRelatedFeature, hasProductFeature, feature } = item;
  var relatedCheck = '';
  var productCheck = '';
  if (hasRelatedFeature) {
    relatedCheck = <CheckStyled className="fa-solid fa-check" />;
  }
  if (hasProductFeature) {
    productCheck = <CheckStyled className="fa-solid fa-check" />;
  }

  return (
    <tr>
      <td style={{padding: "5%"}}>{productCheck}</td>
      <td>
        <TableRowStyled>{feature}</TableRowStyled>
      </td>
      <td>{relatedCheck}</td>
    </tr>
  );
}
