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

export const StyledHeaderWrapper = styled.div`
    z-index: 20;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    position: fixed;
    height: 60px;
    background-color:#121212;
    border-bottom: 1px solid #FFFFFF35;
    padding-left: 16px;
`;

export const StyledHeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding: 10px 16px 10px 16px;
    position: relative;
    ${device.xlarge} {
        width: 1280px !important;
        float: inherit;
        margin: 0px auto;
    }
`;

export const StyledFlexContainer = styled.div`
    display: flex!important;
    
`;

export const StyledFlexContainer1 = styled.div`
        border-right: 1px solid #4c4c4c;
        display: flex;
        flex-direction: column;
        padding-right: 16px;
        text-align: right;

`

export const StyledWelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
   
`;

export const StyledMarqueeContainer = styled.div`
    margin: 0 5px;
    width: 209px;
    display: flex;
    color:${themeGet("colors.white")};
    .marquee-container{
        width: 185px;
        display: flex;
    }
`;

export const StyledParagraph = styled.p`
    color: #b5b5b5;
    font-size: 13px;
    line-height: 18px;
    width: 209px;
`;



export const StyledLogoContainer = styled.div`
    display: flex;
    align-self: stretch;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1 1 auto;
    min-width: 50px;
    margin-left: -15px;
    img{
        height: 36px;
        float: left;
        margin-right: 7px;
        margin-top: 1px;
    }
    .mobile_logo{
        display: none;
    }
`;

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {

}

export const StyledHeaderButtonGroup = styled.div<IProps>`
    display: flex!important;
    gap: 0.6rem;
    align-items: center;
    margin-left: 16px;
    svg path{
        stroke:${themeGet("colors.headerbtnbg")};
    };
    .loginbtn {
        background:${themeGet("colors.mainborder")};
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family:${themeGet("fonts.googleSansBold")} !important;
        font-size:13px;
        color:${themeGet("colors.pagefontcolor")} !important;
        svg path{
            stroke:${themeGet("colors.pagefontcolor")} !important;
        }
    }
    .signupbtn {
        background:none;
        border: 1px solid ${themeGet("colors.mainborder")};
        color:${themeGet("colors.btnfontcolor")};
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg path{
            stroke:${themeGet("colors.btnfontcolor")} !important;
        }
    }
`;
