import React from "react";
interface IProps {
    children: React.ReactNode;
    hideHeader?: boolean;
    hideFooter?: boolean;
    layout?: "app";
}
declare const Layout: {
    ({ children, hideHeader, hideFooter, }: IProps): React.JSX.Element;
    defaultProps: {
        hideHeader: boolean;
        hideFooter: boolean;
    };
};
export default Layout;
