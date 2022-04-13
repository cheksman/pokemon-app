import React from "react";

export enum types {
  button = "button",
  submit = "submit",
  reset = "reset",
}

type Props = {
  label: string;
  type?: types;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  label,
  type,
  onClick,
  className,
  isLoading,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;