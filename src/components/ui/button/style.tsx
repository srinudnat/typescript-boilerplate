import React from "react";
import styled, {
    space,
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
} from "../../../shared/styled";


export const StyledButton = styled.button`
    border-radius: 6px;
    font-size: 13px;
    height: 34px;
    line-height: 20px;
    min-width: 98px;
    padding: 7px 15px;
    transition: all .3s;
`;