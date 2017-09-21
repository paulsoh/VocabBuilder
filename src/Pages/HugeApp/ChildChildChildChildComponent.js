import React from 'react'
import UserInputComponent from './UserInputComponent';


const ChildChildChildChildComponent = ({
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
    <UserInputComponent />
  </div>
);

export default ChildChildChildChildComponent;


