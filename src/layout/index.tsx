import React from "react";
import Header from "./header";
import Footer from "./footer";

interface IProps {
    children: React.ReactNode;
    hideHeader?: boolean;
    hideFooter?: boolean;
    layout?: "app";
}

const Layout = ({
    children,
    hideHeader,
    hideFooter,
}: IProps) => {
    return (
        <>
            {!hideHeader && (
                <Header  />
            )}
            {children}
            {!hideFooter && <Footer />}
        </>
    );
};

Layout.defaultProps = {
    hideHeader: false,
    hideFooter: false,
};

export default Layout;
