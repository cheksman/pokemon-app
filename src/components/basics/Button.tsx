import React from "react";

export enum types {
  button = "button",
  submit = "submit",
  reset = "reset",
}

type Props = {
  label: string;
  fullwidth?: boolean;
  width?: string;
  color?: string;
  type?: types;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  label,
  fullwidth = true,
  width,
  color,
  type,
  onClick,
  isLoading,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`mx-auto bg-${
        !!color ? color : disabled ? "gray-200" : "pink-600"
      } py-2 px-4 rounded mb-4 ${fullwidth ? "min-w-full" : ""} ${
        !!width ? "w-" + width : ""
      } text-white hover:bg-${
        !!color ? color : disabled ? "gray-200" : "pink-700"
      } focus:outline-none focus:ring-2 focus:ring-${
        !!color ? color : disabled ? "gray-200" : "pink-700"
      } focus:ring-opacity-50`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;