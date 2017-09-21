import React from 'react'
import ChildChildChildComponent from './ChildChildChildComponent';


const ChildChildComponent = ({
  RGB,
  factor,
}) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      padding: '40px',
      backgroundColor: `rgb(${RGB.map((color) => Math.floor(color * factor)).join(',')})`,
    }}
  >
    <ChildChildChildComponent
      factor={factor}
      RGB={RGB.map(color => Math.floor(color * factor))}
    />
  </div>
);

export default ChildChildComponent;

