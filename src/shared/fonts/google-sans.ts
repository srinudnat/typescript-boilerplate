import { css } from 'styled-components';
import googleSansBoldWoff from './google-sans/googlesans-bold-webfont.woff';
import googleSansBoldWoff2 from './google-sans/googlesans-bold-webfont.woff2';

import googleMediumWoff from './google-sans/googlesans-medium-webfont.woff';
import googleMediumWoff2 from './google-sans/googlesans-medium-webfont.woff2';

import googleRegularWoff from './google-sans/googlesans-regular-webfont.woff';
import googleRegularWoff2 from './google-sans/googlesans-regular-webfont.woff2';

export const GoogleFontSans = css`
  /* google-sans - regular */
  @font-face {
    font-family: 'google_sansregular';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url(${googleRegularWoff2});
    src: url(${googleRegularWoff2}) format('woff2'),
      url(${googleRegularWoff}) format('woff');
  }

  /* google-sans - medium */
  @font-face {
    font-family: 'google_sansmedium';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url(${googleMediumWoff2});
    src: url(${googleMediumWoff2}) format('woff2'),
      url(${googleMediumWoff}) format('woff');
  }

  /* google-sans - bold */
  @font-face {
    font-family: 'google_sansbold';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url(${googleSansBoldWoff2});
    src: url(${googleSansBoldWoff2}) format('woff2'),
      url(${googleSansBoldWoff}) format('woff');
  }
`;
