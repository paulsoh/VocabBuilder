import React from 'react'
import { connect } from 'react-redux';
import { changeColor } from '../../actions';


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
    return (
      <div
        onClick={() => this.props.changeColor(generateRandomRGB())}
        style={UserInputComponentStyle}
      >
        <h1>
          CHANGE ROOT COLOR!
        </h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dipatch) => ({
  changeColor: (RGB) => dipatch(changeColor(RGB))
})

export default connect(null, { changeColor })(UserInputComponent);
