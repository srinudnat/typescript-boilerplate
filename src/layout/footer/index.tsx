import React from 'react';
import {
  StyledFooter,
  StyledFooterSupport,
  StyledFooterMain,
  StyledFooterContainer,
  StyledFooterCopyRight,
  StyledFooterMenuListContainer,
  StyledFooterMenuWrapper,
  StyledFooterMenu,
  StyledFooterLogo,
  StyledFooterSocialMedia,
  StyledFooterPartnered,
} from './style';
import {
  TwitterSvg,
  InstagramSvg,
  YoutubeSvg,
  WhatsAppSvg,
  FaceBookSvg,
} from '../../shared/svg';

const Footer = () => {
  return (
    <StyledFooter className='footer'>
      <StyledFooterSupport>
        <p>
          We are always happy for any feedback! The FairPlay team works day and
          night to be there for everyone. Please feel free to drop us a line, we
          promise a quick reply.
        </p>
        <p>
          For any questions or queries email us at{' '}
          <a href='mailto: support@fairplay.com'>support@fairplay.com</a>
        </p>
      </StyledFooterSupport>
      <StyledFooterMain>
        <StyledFooterContainer>
          <StyledFooterLogo>
            <a aria-label='footer_logo' href='/'>
              <img
                src={`${process.env.REACT_APP_CDN_IMAGES_PATH}/logo.svg`}
                alt=''
              />
            </a>
          </StyledFooterLogo>
          <StyledFooterPartnered>
            <ul className='flex social_media'>
              <li>
                <a
                  target='_new'
                  aria-label='twiter_link'
                  href='https://www.pagcor.ph/index.php'
                >
                  <img
                    src={`${process.env.REACT_APP_CDN_IMAGES_PATH}/footer-gaming-logo.svg`}
                    alt=''
                  />
                </a>
              </li>
            </ul>
          </StyledFooterPartnered>
          <StyledFooterSocialMedia>
            <ul className='flex social_media'>
              <li>
                <a aria-label='twiter_link' href='/'>
                  <TwitterSvg />
                </a>
              </li>
              <li>
                <a aria-label='twiter_link' href='/'>
                  <InstagramSvg />
                </a>
              </li>
              <li>
                <a aria-label='twiter_link' href='/'>
                  <YoutubeSvg />
                </a>
              </li>
              <li>
                <a aria-label='twiter_link' href='/'>
                  <WhatsAppSvg />
                </a>
              </li>
              <li>
                <a aria-label='twiter_link' href='/'>
                  <FaceBookSvg />
                </a>
              </li>
            </ul>
          </StyledFooterSocialMedia>
        </StyledFooterContainer>
      </StyledFooterMain>
      <StyledFooterMenu>
        <StyledFooterMenuWrapper>
          <StyledFooterMenuListContainer>
            <ul className='flex footer_menu'>
              <li>
                <a aria-label='' href='/termsandconditions'>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a aria-label='' href='/responsiblegaming'>
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a aria-label='' href='/privacypolicy'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a aria-label='' href='/aboutus'>
                  About Us
                </a>
              </li>
              <li>
                <a aria-label='' href='/contactus'>
                  Contact Us
                </a>
              </li>
            </ul>
          </StyledFooterMenuListContainer>
          <StyledFooterCopyRight>
            <p>
              <span> ©</span> 2023 FairPlay. All Rights Reserved.
            </p>
            <p className='version_text'>V.1.76</p>
          </StyledFooterCopyRight>
        </StyledFooterMenuWrapper>
      </StyledFooterMenu>
    </StyledFooter>
  );
};

export default Footer;
