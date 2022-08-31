import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 15px 0;
  gap: 5px;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 30px;
  height: 30px;
`;
