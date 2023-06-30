import styled, { themeGet } from '../../shared/styled';

export const StyledLogo = styled.a`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 50px;
  margin-left: -15px;
  color: ${themeGet('colors.white')};
`;
