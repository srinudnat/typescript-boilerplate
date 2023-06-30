/* eslint-disable jsx-a11y/anchor-has-content */
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
import { Link } from "react-router-dom";

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $variant?: "link1" | "link2" | "link3";
}

const anchorStyle = css<IProps>`
    ${({ $variant }) =>
        $variant === "link1" &&
        css`
            color: ${themeGet("colors.text")};
            &:hover,
            &:focus {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant }) =>
        $variant === "link2" &&
        css`
            color: ${themeGet("colors.text2")};
            &:hover,
            &:focus {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $variant }) =>
        $variant === "link3" &&
        css`
            color: ${themeGet("colors.text3")};
            &:hover,
            &:focus {
                color: ${themeGet("colors.text2")};
            }
        `}
    ${(props) =>
        props.theme.name === "dark" &&
        css`
            ${props.$variant === "link1" &&
            css`
                color: ${tinycolor(themeGet("colors.white")(props) as string)
                    .setAlpha(0.85)
                    .toRgbString()};
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
            ${props.$variant === "link2" &&
            css`
                color: ${themeGet("colors.gray300")};
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
            ${props.$variant === "link3" &&
            css`
                &:hover,
                &:focus {
                    color: ${themeGet("colors.white")};
                }
            `}
        `}
    
    ${space};
    ${colorStyles};
    ${typography};
    ${layout};
`;

export const StyledLink = styled(
    ({
        ...rest
    }) => <Link to={""}  {...rest} />
)<IProps>`
    ${anchorStyle};
`;

export const StyledAnchor = styled(
    ({
        ...rest
    }) => <a {...rest} />
)<IProps>`
    ${anchorStyle};
`;
