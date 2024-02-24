import React from 'react'
import { drawPath, constants, stateCodes } from '../constants/Constants'
import { MapPropType } from '../types/Types'

const IndiaMap = ({
  className = 'svgmap',
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onClick,
}: MapPropType
) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  }

  const handleMouseEnter = (hoverStateId: string) => {
    const path: HTMLElement | null = document.getElementById(hoverStateId)
    if (path) {
      path.style.fill = hoverColor || constants.HOVERCOLOR
    }
  }

  const handleMouseLeave = (hoverStateId: string) => {
    const path: HTMLElement | null = document.getElementById(hoverStateId)
    if (path) {
      path.style.fill = mapColor || constants.MAPCOLOR
    }
  }

  return (
    <>
      <div className={className} style={mapStyle}>
        <svg
          version='1.1'
          id='svg2'
          x='0px'
          y='0px'
          viewBox='-114 -50.4 611.9 695.7'
        >
          {stateCodes.map((stateCode) => (
            <path
              key={stateCode}
              onClick={() => onClick(stateCode)}
              onMouseEnter={() => handleMouseEnter(stateCode)}
              onMouseLeave={() => handleMouseLeave(stateCode)}
              id={stateCode}
              d={drawPath[stateCode]}
            />
          ))}
        </svg>
      </div>
    </>
  )
}
export default IndiaMap
