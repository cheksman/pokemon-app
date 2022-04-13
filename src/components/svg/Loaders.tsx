import React from 'react'

interface SvgIconProps {
  width?: number
  height?: number
  strokeWidth?: number
  strokeColor?: string
  fillColor?: string
  rotateCenter?: number
  classes?: string
  cursor?: string
  onClick?: () => void
}

export const SpinnerIcon: React.FC<SvgIconProps> = () => (
    <svg>

    </svg>
)
