import React from "react"
import { drawPath, stateCode, constants } from "./Constants"

const IndiaMap = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  selectedState,
}) => {
  const mapStyle = {
    width: size || constants.WIDTH,
    fill: mapColor || constants.MAPCOLOR,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
  }

  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId)
    path.style.fill = hoverColor || constants.HOVERCOLOR
  }
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId)
    path.style.fill = mapColor || constants.MAPCOLOR
  }

  return (
    <>
      <div className="map" style={mapStyle}>
        <svg
          version="1.1"
          id="svg2"
          x="0px"
          y="0px"
          viewBox="-114 -50.4 611.9 695.7"
        >
          {stateCode?.map((stateCode, index) => (
            <path
              key={index}
              onClick={() => selectedState(stateCode)}
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
