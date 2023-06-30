import React from "react";
import styled, { device, themeGet, css } from "../../shared/styled";
import { Anchor } from "../ui";

export const StyledLogo = styled(({ ...rest }) => <Anchor  path={""} children={""} {...rest} />)`
    display: flex;
    align-self: stretch;
    flex-direction: column;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 auto;
    min-width: 50px;
    margin-left: -15px;
    ${device.small} {
        font-size: 22px;
    }
    ${device.large} {
        font-size: 24px;
    }
    ${({ theme }) =>
        theme.name === "dark" &&
        css`
            color: ${themeGet("colors.white")};
        `}
`;
