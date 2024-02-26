# React SVG Map India

This package generates an interactive SVG map of India. It allows users to highlight states on hover and retrieve the value of the selected state. The map includes all states and union territories of India.

![India Map](./svgmap.gif)

## Installation

Install the package via npm:

```bash
npm install react-svgmap-india
```

## State List

The following are the states and UTs mapped with its ID.

```js
const states = {
  'AN': 'Andaman and Nicobar Islands',
  'AP': 'Andhra Pradesh',
  'AR': 'Arunachal Pradesh',
  'AS': 'Assam',
  'BR': 'Bihar',
  'CH': 'Chandigarh',
  'CT': 'Chhattisgarh',
  'DD': 'Dadra and Nagar Haveli',
  'DL': 'Delhi',
  'DN': 'Daman and Diu',
  'GA': 'Goa',
  'GJ': 'Gujarat',
  'HP': 'Himachal Pradesh',
  'HR': 'Haryana',
  'JH': 'Jharkhand',
  'JK': 'Jammu and Kashmir',
  'KA': 'Karnataka',
  'KL': 'Kerala',
  'LA': 'Ladakh',
  'LD': 'Lakshadweep',
  'MH': 'Maharashtra',
  'ML': 'Meghalaya',
  'MN': 'Manipur',
  'MP': 'Madhya Pradesh',
  'MZ': 'Mizoram',
  'NL': 'Nagaland',
  'OR': 'Odisha',
  'PB': 'Punjab',
  'PY': 'Puducherry',
  'RJ': 'Rajasthan',
  'SK': 'Sikkim',
  'TG': 'Telangana',
  'TN': 'Tamil Nadu',
  'TR': 'Tripura',
  'UP': 'Uttar Pradesh',
  'UT': 'Uttarakhand',
  'WB': 'West Bengal'
}
```

## Usage

```jsx
'use client'

import { useState } from 'react'
import IndiaMap from 'react-svgmap-india'

export default function MapComponent() {
    const [state, setState] = useState('')

    return (
        <>
            <div>{state}</div>
            <IndiaMap
                onClick={(selectedValue: string) => setState(selectedValue)}
                size='500px'
                mapColor='white'
                strokeColor='#4f4f4f'
                strokeWidth='1'
                hoverColor='#48d8f5'
            />
        </>
    )
}
```

## Props Available

| Props       | Description                                             | Requirement | Default Value |
|-------------|---------------------------------------------------------|-------------|---------------|
| onClick     | Callback function to get the selected state value.      | Required    | NA            |
| className   | Custom classname for the map component.                 | Optional    | "svgmap"      |
| size        | Width of the map.                                       | Optional    | "inherit"     |
| mapColor    | Color of the map.                                       | Optional    | "#ffffff"     |
| strokeColor | Border color of each state.                             | Optional    | "#000000"     |
| strokeWidth | Border width of each state.                             | Optional    | "0.5"         |
| hoverColor  | Color of the state while hovering on it.                | Optional    | "#303030"     |

## Contributing

Pull requests are welcome.

## Credits

Reference of SVG map taken from [MAPSVG](https://mapsvg.com/maps/india).
