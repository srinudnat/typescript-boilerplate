import React from "react";
interface DropdownProps {
    children: React.ReactNode;
    direction: "up" | "down" | "left" | "right";
    className?: string;
}
declare const Dropdown: {
    ({ children, direction, className, ...restProps }: DropdownProps): React.JSX.Element;
    defaultProps: {
        direction: string;
    };
};
export default Dropdown;
