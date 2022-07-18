import React from 'react';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton
} from 'react-share';
import {
  SocialMediaContainer,
  SocialMediaIcon
} from '../styles/SocialMedia.styled';
import facebookLogo from '../../images/facebookLogo.png';
import twitterLogo from '../../images/twitterLogo.png';
import pinterestLogo from '../../images/pinterestLogo.png';

export default function SocialMedia({ currentImage }) {
  // const url = window.location.href;
  return (
    <SocialMediaContainer>
      <FacebookShareButton url="www.google.com">
        <SocialMediaIcon src={facebookLogo} title="Facebook" />
      </FacebookShareButton>
      <TwitterShareButton url="www.google.com">
        <SocialMediaIcon src={twitterLogo} title="Twitter" />
      </TwitterShareButton>
      <PinterestShareButton url="www.google.com" media={currentImage}>
        <SocialMediaIcon src={pinterestLogo} title="Pinterest" />
      </PinterestShareButton>
    </SocialMediaContainer>
  );
}
