import React from 'react';
import styled, {
    space,
    device,
    color as colorStyles,
    typography,
    layout,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    css,
    themeGet,
    tinycolor,
} from "../../shared/styled";

export const StyledCard = styled.div`
    position: relative;
    a{
        align-items: center;
        background: ${themeGet("colors.largegamecardbackground")};
        border: 2px solid ${themeGet("colors.largegamecardborder")};
        border-radius: 10px;
        color: ${themeGet("colors.white")};
        display: flex;
        flex-direction: column;
        height: 308px;
        padding: 22px 20px;
        text-decoration: none;
        transition: all .3s;
        width: 100%;
    }
`;

export const StyledCardImgContainer = styled.div`
    img{
        height: 100%;
        object-fit: contain;
        width: 100%;
    }
`;

export const StyledCardBodyContainer = styled.div`
    padding-left: 0;
    width: 100%;
`;

export const StyledCardBodyTitle = styled.h4`
    color: ${themeGet("colors.eventnumberdefaulttxtcolor")};
    font-family: ${themeGet("fonts.googleSansMedium")} !important;
    font-size: 22px;
    font-weight: inherit;
    margin-top: 15px;
    text-shadow: 0 1px 3px rgb(0 0 0 / 90%);
    white-space: nowrap;
    white-space: break-spaces;
`

export const StyledCardBodyContent = styled.p`
    color: ${themeGet("colors.copyrighttextcolor")};
    font-family: ${themeGet("fonts.googleSansRegular")} !important;
    font-size: 15px;
    line-height: 19px;
    margin-top: 10px;
`

export const StyledCardButtonContainer = styled.span`
    align-items: center;
    background: none;
    border: 1px solid ${themeGet("colors.btnfontcolor")};
    border-radius: 6px;
    color: ${themeGet("colors.btnfontcolor")} !important;
    display: flex;
    font-family:  ${themeGet("fonts.googleSansBold")} !important;
    font-size: 14px;
    gap: 6px;
    height: 34px;
    justify-content: center;
    margin-top: 15px;
    min-width: 98px;
    padding: 6px 10px;
    transition: all .3s;
    width: 111px;
`

