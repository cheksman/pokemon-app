import React from "react";

interface SvgIconProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  rotateCenter?: number;
  classes?: string;
  cursor?: string;
  onClick?: () => void;
}

export const SpinnerIcon: React.FC<SvgIconProps> = ({
  width = 20,
  height = 20,
  strokeColor = "text-black",
  strokeWidth = 1.2,
  fillColor = "none",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    strokeWidth={strokeWidth}
    className={`stroke-current ${strokeColor} animate-spin`}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="🔍-System-Icons"
      stroke="none"
      stroke-width={strokeWidth}
      fill={fillColor}
      fill-rule="evenodd"
    >
      <g
        id="ic_fluent_spinner_ios_20_regular"
        fill="#212121"
        fill-rule="nonzero"
      >
        <path
          d="M10,3 C6.13401,3 3,6.13401 3,10 C3,10.2761 2.77614,10.5 2.5,10.5 C2.22386,10.5 2,10.2761 2,10 C2,5.58172 5.58172,2 10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C9.72386,18 9.5,17.7761 9.5,17.5 C9.5,17.2239 9.72386,17 10,17 C13.866,17 17,13.866 17,10 C17,6.13401 13.866,3 10,3 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);

export const RightCaretIcon: React.FC<SvgIconProps> = ({
  width = 20,
  height = 20,
  strokeColor = "text-black",
  strokeWidth = 1.2,
  fillColor = "none",
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={`stroke-current ${strokeColor}`}
  >
    <polygon
      points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LeftCaretIcon: React.FC<SvgIconProps> = ({
  width = 20,
  height = 20,
  strokeColor = "text-black",
  strokeWidth = 1.2,
  fillColor = "none",
}) => (
  <svg
    width={width}
    height={height}
    fill={fillColor}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={`stroke-current ${strokeColor}`}
  >
    <path
      d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
