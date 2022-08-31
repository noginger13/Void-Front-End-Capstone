import React from 'react';

//Components
import FilterSelect from '../components/FilterSelect';

//Styles
import { StyledHeader } from '../styles/FlexContainers.styled';

export default function ReviewHeader({ reviewArray }) {
  return (
    <StyledHeader>
      <p>
        {reviewArray.length} reviews, sorted by <FilterSelect />
      </p>
    </StyledHeader>
  );
}
