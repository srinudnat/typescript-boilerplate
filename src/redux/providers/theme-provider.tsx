import { ThemeProvider, themes } from "../../shared/styled";
import { GlobalStyle } from "../../shared/css";
import { TTheme } from "../../shared/types";
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { toggleTheme } from "../slices/theme";
import React from "react";

const Theme = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.theme);

    const themeHandler = (curTheme: TTheme) => {
    };

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
