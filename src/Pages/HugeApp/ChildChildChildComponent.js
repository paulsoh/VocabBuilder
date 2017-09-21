import React from 'react'
import ChildChildChildChildComponent from './ChildChildChildChildComponent';


const ChildChildChildComponent = ({
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
    <ChildChildChildChildComponent
      
      factor={factor}
      RGB={RGB.map(color => Math.floor(color * factor))}
    />
  </div>
);

export default ChildChildChildComponent;


