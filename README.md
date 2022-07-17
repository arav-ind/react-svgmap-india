# react-svgmap-india

- This is a JavaScript library which can be used to generate an SVG map of India.
- This includes functionalities of highlighting states onhover and getting the value of clicked state.
- Includes all States and Union Territories of India.

## Installation

Use the package manager for installation.

```bash
npm install react-svgmap-india
```

## Usage

```javascript
import React, { useState } from "react"
import IndiaMap from "react-svgmap-india"

const App = () => {
  const [state, setState] = useState()
  return (
    <>
      <IndiaMap
        selectedState={(stateValue) => setState(stateValue)}
        size={"600px"}
        mapColor={"#007fe0"}
        strokeColor={"#000000"}
        strokeWidth={"1"}
        hoverColor={"#00c2e0"}
      />
    </>
  )
}
```

# Props Available

- **selectedState={(stateValue) => state(stateValue)}** _(**Required** callback function to get selected state value)._
- **size** - set width of the map _(**optional**) (default="500px")_
- **mapColor** - set color of the map _(**optional**) (default="#ffffff")_
- **strokeColor** - set border color of each state _(**optional**) (default="#000000")_
- **strokeWidth** - set border width of each state _(**optional**) (default="0.5")_
- **hoverColor** - set color of state while hovering on it _(**optional**) (default="#303030")_

# Credits

Reference of SVG map taken from [MAPSVG](https://mapsvg.com/maps/india).
