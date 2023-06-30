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

export const StyledContainerFluid = styled.div`
bodybackground:${themeGet("colors.bodybackground")};
min-height: calc(100vh - 223px);
padding-top: 60px;
`;

export const StyledNewsUpdate = styled.div`
padding: 20px 20px 16px;
bodybackground:${themeGet("colors.bodybackground")};
color: #c2c9d6;
${device.xlarge} {
    width: 1280px !important;
    float: inherit;
    margin: 0px auto;
}
h4{
    border-right: 1px solid #4c4c4c;
    color: #c2c9d6;
    font-family:${themeGet("fonts.googleSansBold")} !important;
    font-size: 15px;
    padding-right: 15px;
    width: 150px;
}

`;

export const StyledNewsUpdateContainer = styled.div`
display: flex;
`;

export const StyledBannerContainer = styled.div`
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
padding-top: 10px !important;
gap: 1rem;
padding: 20px 0px;
${device.xlarge} {
    width: 1280px !important;
    float: inherit;
    margin: 0px auto;
}
`;

export const StyledBannerImg = styled.div`
    border-radius: 10px;
    border-radius: 16px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    display: grid;
    grid-column: span 3/span 3;
    position: relative;
    img{
        border-radius: 10px;
    height: 240px;
    object-fit: cover;
    width: 100%;
    }
`;

export const StyledBannerText = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    left: 0;
    padding: 20px 20px 20px 30px;
    position: absolute;
    width: 100%;
    h4 {
        color: ${themeGet("colors.homebannertxtcolor")};
        font-family:${themeGet("fonts.googleSansMedium")};
        font-size: 34px;
        line-height: 35px;
    }
    p {
        color: #cecece;
        font-family:${themeGet("fonts.googleSansRegular")} !important;
        font-size: 16px;
        line-height: 20px;
        margin-top: 18px;
        margin:0px;
    }
`;

export const StyledBannerAdd = styled.div`
    background:url(https://static-web.fra1.cdn.digitaloceanspaces.com/rwitc/social-banner-img.png);
    display: grid;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 8px;
    height: 100%;
    width: 100%;
`;

export const StyledBannerAddTitle = styled.div`
    padding: 15px 11px 12px;
    text-align: center!important;
    h3{
        font-size: 20px;
        line-height: 22px;
        color: ${themeGet("colors.white")};
    }
    h6{
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 5px;
        color: ${themeGet("colors.white")};
    }
`

export const StyledBannerAddSocialIcons = styled.div`
text-align: center!important;

ul {
    list-style: none;
    margin-top: 18px;
    li {
        display: inline-block;
        padding-right: 8px;
    }
}
`;


export const StyledLargeGameContainer = styled.div`
width: 1280px !important;
float: inherit;
margin: 0px auto;

`;

export const StyledLargeGameBlock = styled.div`
${device.xlarge} {
   
}
`;

export const StyledLargeGameList = styled.div`
    position: relative; 
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 1rem;
`;

