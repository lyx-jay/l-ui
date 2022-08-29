import React from 'react';
import './style.css';

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: Function;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, onClick, disabled }: ButtonProps) => {
  const mode = primary ? 'l-button--primary' : 'l-button--secondary';
  const isDisabled:string = disabled ? 'disable' : 'enable';
  size = size || 'medium';
  label = label || 'button';
  const handleClick = () => {
    onClick && onClick();
  }
  return (
    <button
      type="button"
      className={['l-button', `l-button--${size}`, mode, `l-button--${isDisabled}`].join(' ')}
      style={{ backgroundColor: backgroundColor }}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};


