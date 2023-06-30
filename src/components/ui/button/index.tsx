import React from 'react';
import { StyledButton } from './style';
// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string; // default, primary, info, success, warning, danger, dark
  size?: string; // sm, md, lg
  disabled?: boolean;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
