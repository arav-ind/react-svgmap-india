import React from "react"
import * as STATE from "./DrawPath"

const IndiaMap = ({
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  selectedState,
}) => {
  const mapStyle = {
    width: size || "500px",
    fill: mapColor || "#ffffff",
    stroke: strokeColor || "#000000",
    strokeWidth: strokeWidth || "0.5",
  }

  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(hoverStateId)
    path.style.fill = hoverColor || "#303030"
  }
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(hoverStateId)
    path.style.fill = mapColor || "#ffffff"
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
          <path
            onClick={() => selectedState("AN")}
            onMouseEnter={() => handleMouseEnter("AN")}
            onMouseLeave={() => handleMouseLeave("AN")}
            id="AN"
            d={STATE.AN}
          />
          <path
            onClick={() => selectedState("AP")}
            onMouseEnter={() => handleMouseEnter("AP")}
            onMouseLeave={() => handleMouseLeave("AP")}
            id="AP"
            d={STATE.AP}
          />
          <path
            onClick={() => selectedState("AR")}
            onMouseEnter={() => handleMouseEnter("AR")}
            onMouseLeave={() => handleMouseLeave("AR")}
            id="AR"
            d={STATE.AR}
          />
          <path
            onClick={() => selectedState("AS")}
            onMouseEnter={() => handleMouseEnter("AS")}
            onMouseLeave={() => handleMouseLeave("AS")}
            id="AS"
            d={STATE.AS}
          />
          <path
            onClick={() => selectedState("BR")}
            onMouseEnter={() => handleMouseEnter("BR")}
            onMouseLeave={() => handleMouseLeave("BR")}
            id="BR"
            d={STATE.BR}
          />
          <path
            onClick={() => selectedState("CH")}
            onMouseEnter={() => handleMouseEnter("CH")}
            onMouseLeave={() => handleMouseLeave("CH")}
            id="CH"
            d={STATE.CH}
          />
          <path
            onClick={() => selectedState("CT")}
            onMouseEnter={() => handleMouseEnter("CT")}
            onMouseLeave={() => handleMouseLeave("CT")}
            id="CT"
            d={STATE.CT}
          />
          <path
            onClick={() => selectedState("DD")}
            onMouseEnter={() => handleMouseEnter("DD")}
            onMouseLeave={() => handleMouseLeave("DD")}
            id="DD"
            d={STATE.DD}
          />
          <path
            onClick={() => selectedState("DL")}
            onMouseEnter={() => handleMouseEnter("DL")}
            onMouseLeave={() => handleMouseLeave("DL")}
            id="DL"
            d={STATE.DL}
          />
          <path
            onClick={() => selectedState("DN")}
            onMouseEnter={() => handleMouseEnter("DN")}
            onMouseLeave={() => handleMouseLeave("DN")}
            id="DN"
            d={STATE.DN}
          />
          <path
            onClick={() => selectedState("GA")}
            onMouseEnter={() => handleMouseEnter("GA")}
            onMouseLeave={() => handleMouseLeave("GA")}
            id="GA"
            d={STATE.GA}
          />
          <path
            onClick={() => selectedState("GJ")}
            onMouseEnter={() => handleMouseEnter("GJ")}
            onMouseLeave={() => handleMouseLeave("GJ")}
            id="GJ"
            d={STATE.GJ}
          />
          <path
            onClick={() => selectedState("HP")}
            onMouseEnter={() => handleMouseEnter("HP")}
            onMouseLeave={() => handleMouseLeave("HP")}
            id="HP"
            d={STATE.HP}
          />
          <path
            onClick={() => selectedState("HR")}
            onMouseEnter={() => handleMouseEnter("HR")}
            onMouseLeave={() => handleMouseLeave("HR")}
            id="HR"
            d={STATE.HR}
          />
          <path
            onClick={() => selectedState("JH")}
            onMouseEnter={() => handleMouseEnter("JH")}
            onMouseLeave={() => handleMouseLeave("JH")}
            id="JH"
            d={STATE.JH}
          />
          <path
            onClick={() => selectedState("JK")}
            onMouseEnter={() => handleMouseEnter("JK")}
            onMouseLeave={() => handleMouseLeave("JK")}
            id="JK"
            d={STATE.JK}
          />
          <path
            onClick={() => selectedState("KA")}
            onMouseEnter={() => handleMouseEnter("KA")}
            onMouseLeave={() => handleMouseLeave("KA")}
            id="KA"
            d={STATE.KA}
          />
          <path
            onClick={() => selectedState("KL")}
            onMouseEnter={() => handleMouseEnter("KL")}
            onMouseLeave={() => handleMouseLeave("KL")}
            id="KL"
            d={STATE.KL}
          />
          <path
            onClick={() => selectedState("LA")}
            onMouseEnter={() => handleMouseEnter("LA")}
            onMouseLeave={() => handleMouseLeave("LA")}
            id="LA"
            d={STATE.LA}
          />
          <path
            onClick={() => selectedState("LD")}
            onMouseEnter={() => handleMouseEnter("LD")}
            onMouseLeave={() => handleMouseLeave("LD")}
            id="LD"
            d={STATE.LD}
          />
          <path
            onClick={() => selectedState("MH")}
            onMouseEnter={() => handleMouseEnter("MH")}
            onMouseLeave={() => handleMouseLeave("MH")}
            id="MH"
            d={STATE.MH}
          />
          <path
            onClick={() => selectedState("ML")}
            onMouseEnter={() => handleMouseEnter("ML")}
            onMouseLeave={() => handleMouseLeave("ML")}
            id="ML"
            d={STATE.ML}
          />
          <path
            onClick={() => selectedState("MN")}
            onMouseEnter={() => handleMouseEnter("MN")}
            onMouseLeave={() => handleMouseLeave("MN")}
            id="MN"
            d={STATE.MN}
          />
          <path
            onClick={() => selectedState("MP")}
            onMouseEnter={() => handleMouseEnter("MP")}
            onMouseLeave={() => handleMouseLeave("MP")}
            id="MP"
            d={STATE.MP}
          />
          <path
            onClick={() => selectedState("MZ")}
            onMouseEnter={() => handleMouseEnter("MZ")}
            onMouseLeave={() => handleMouseLeave("MZ")}
            id="MZ"
            d={STATE.MZ}
          />
          <path
            onClick={() => selectedState("NL")}
            onMouseEnter={() => handleMouseEnter("NL")}
            onMouseLeave={() => handleMouseLeave("NL")}
            id="NL"
            d={STATE.NL}
          />
          <path
            onClick={() => selectedState("OR")}
            onMouseEnter={() => handleMouseEnter("OR")}
            onMouseLeave={() => handleMouseLeave("OR")}
            id="OR"
            d={STATE.OR}
          />
          <path
            onClick={() => selectedState("PB")}
            onMouseEnter={() => handleMouseEnter("PB")}
            onMouseLeave={() => handleMouseLeave("PB")}
            id="PB"
            d={STATE.PB}
          />
          <path
            onClick={() => selectedState("PY")}
            onMouseEnter={() => handleMouseEnter("PY")}
            onMouseLeave={() => handleMouseLeave("PY")}
            id="PY"
            d={STATE.PY}
          />
          <path
            onClick={() => selectedState("RJ")}
            onMouseEnter={() => handleMouseEnter("RJ")}
            onMouseLeave={() => handleMouseLeave("RJ")}
            id="RJ"
            d={STATE.RJ}
          />
          <path
            onClick={() => selectedState("SK")}
            onMouseEnter={() => handleMouseEnter("SK")}
            onMouseLeave={() => handleMouseLeave("SK")}
            id="SK"
            d={STATE.SK}
          />
          <path
            onClick={() => selectedState("TG")}
            onMouseEnter={() => handleMouseEnter("TG")}
            onMouseLeave={() => handleMouseLeave("TG")}
            id="TG"
            d={STATE.TG}
          />
          <path
            onClick={() => selectedState("TN")}
            onMouseEnter={() => handleMouseEnter("TN")}
            onMouseLeave={() => handleMouseLeave("TN")}
            id="TN"
            d={STATE.TN}
          />
          <path
            onClick={() => selectedState("TR")}
            onMouseEnter={() => handleMouseEnter("TR")}
            onMouseLeave={() => handleMouseLeave("TR")}
            id="TR"
            d={STATE.TR}
          />
          <path
            onClick={() => selectedState("UP")}
            onMouseEnter={() => handleMouseEnter("UP")}
            onMouseLeave={() => handleMouseLeave("UP")}
            id="UP"
            d={STATE.UP}
          />
          <path
            onClick={() => selectedState("UT")}
            onMouseLeave={() => handleMouseLeave("UT")}
            onMouseEnter={() => handleMouseEnter("UT")}
            id="UT"
            d={STATE.UT}
          />
          <path
            onClick={() => selectedState("WB")}
            onMouseLeave={() => handleMouseLeave("WB")}
            onMouseEnter={() => handleMouseEnter("WB")}
            id="WB"
            d={STATE.WB}
          />
        </svg>
      </div>
    </>
  )
}
export default IndiaMap
