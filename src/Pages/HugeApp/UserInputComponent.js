import React from 'react'

const generateRandomRGB = () => {
  const randomR = Math.floor(Math.random() * 255)
  const randomG = Math.floor(Math.random() * 255)
  const randomB = Math.floor(Math.random() * 255)
  return [randomR, randomG, randomB];
}

const UserInputComponentStyle = {
  position: 'absolute',
  height: '320px',
  width: '400px',
  opacity: '0.5',
  backgroundColor: 'orange',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class UserInputComponent extends React.Component {
  render() {
    console.log(generateRandomRGB());
    return (
      <div
        onClick={() => console.log(generateRandomRGB())}
        style={UserInputComponentStyle}
      >
        <h1>
          CHANGE ROOT COLOR!
        </h1>
      </div>
    );
  }
}

export default UserInputComponent;
