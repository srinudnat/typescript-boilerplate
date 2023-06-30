import styled, { device, themeGet } from '../../shared/styled';

export const StyledFooter = styled.footer`
  p {
    color: #000;
  }
`;

export const StyledFooterSupport = styled.div`
  align-items: center;
  background: #1c1c1c;
  flex-direction: column;
  display: flex !important;
  justify-content: center;
  padding: 22px 0 16px;
  position: relative;
  p {
    color: #b5b5b5;
    font-family: ${themeGet('fonts.googleSansRegular')} !important;
    font-size: 14px;
    line-height: 25px;
    margin: 0px;
  }
  a {
    color: #b5b5b5 !important;
    font-size: 13px;
    text-decoration: underline;
    transition: color 0.3s;
  }
`;

export const StyledFooterMain = styled.div`
  border-bottom: 1px dotted ${themeGet('colors.btnfontcolor')};
  border-top: 4px solid ${themeGet('colors.btnfontcolor')};
  padding: 12px 16px;
`;

export const StyledFooterContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex !important;
  ${device.xlarge} {
    width: 1280px !important;
    float: inherit;
    margin: 0px auto;
    padding: 0 12px;
  }
`;

export const StyledFooterLogo = styled.div``;

export const StyledFooterPartnered = styled.div`
  ul {
    display: flex !important;
    align-items: center;
    gap: 10px;
    list-style: none;
  }
  img {
    transition: opacity 0.3s;
  }
`;

export const StyledFooterSocialMedia = styled.div`
  ul {
    display: flex !important;
    align-items: center;
    gap: 10px;
    list-style: none;
  }
  svg {
    overflow: hidden;
  }
  img,
  svg {
    vertical-align: middle;
  }
`;

export const StyledFooterMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  display: flex !important;
`;

export const StyledFooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${device.xlarge} {
    float: inherit;
    margin: 0 auto;
    padding: 0 12px;
    width: 1280px !important;
  }
`;

export const StyledFooterMenuListContainer = styled.div`
  ul {
    display: flex !important;
    list-style: none;
  }
  li a {
    border-right: 1px solid #595959;
    color: #b5b5b5;
    font-family: ${themeGet('fonts.googleSansRegular')} !important;
    font-size: 14px;
    margin-right: 12px;
    padding-right: 12px;
    text-decoration: none;
    transition: color 0.3s;
  }
`;

export const StyledFooterCopyRight = styled.div`
  p {
    font-size: 14px;
    color: ${themeGet('colors.copyrighttextcolor')};
  }
  span {
    font-size: 13px;
  }
  p.version_text {
    font-family: ${themeGet('fonts.googleSansBold')} !important;
    font-size: 10px !important;
    text-align: right;
  }
`;
