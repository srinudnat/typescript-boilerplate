import React from 'react';
interface Props {
    children: React.ReactNode;
    onClick: () => void;
    variant?: string;
    size?: string;
    disabled?: boolean;
}
declare const Button: React.FC<Props>;
export default Button;
