# React SVG Map India

![India Map](./svgmap.gif)

This JavaScript module generates an interactive SVG map of India. It allows users to highlight states on hover and retrieve the value of the selected state. The map includes all states and union territories of India.

## Installation

Install the package via npm:

```bash
npm install react-svgmap-india
```

## Usage

```jsx
import { useState } from 'react';
import IndiaMap from 'react-svgmap-india';

export default function Home() {
  const [selectedState, setSelectedState] = useState('');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-80 h-10 relative'>
        <IndiaMap
          onClick={(selectedValue) => setSelectedState(selectedValue)}
          size='500px'
          mapColor='white'
          strokeColor='#4f4f4f'
          strokeWidth='1'
          hoverColor='#48d8f5'
        />
        <div className='text-[#4f4f4f] text-2xl font-extrabold absolute right-0 top-24'>{selectedState}</div>
      </div>
    </main>
  );
}
```

## Props Available

- **onClick={(selectedValue) => setSelectedState(selectedValue)}** _(Required) Callback function to get the selected state value._
- **className** _(Optional)_ - Custom classname for the parent component (default="svgmap").
- **size** _(Optional)_ - Width of the map (default="inherit").
- **mapColor** _(Optional)_ - Color of the map (default="#ffffff").
- **strokeColor** _(Optional)_ - Border color of each state (default="#000000").
- **strokeWidth** _(Optional)_ - Border width of each state (default="0.5").
- **hoverColor** _(Optional)_ - Color of the state while hovering on it (default="#303030").

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

Reference of SVG map taken from [MAPSVG](https://mapsvg.com/maps/india).