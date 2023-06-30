import { SpaceProps, ColorProps, TypographyProps, LayoutProps } from "../../../shared/styled";
interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    $variant?: "link1" | "link2" | "link3";
}
export declare const StyledLink: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<{
    [x: string]: any;
}, "ref"> & {
    ref?: unknown;
}, IProps>>;
export declare const StyledAnchor: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<Omit<{
    [x: string]: any;
}, "ref"> & {
    ref?: unknown;
}, IProps>>;
export {};
