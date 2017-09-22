import React from 'react'
import {
  connect,
} from 'react-redux';
import {
  changeColorAction,
  changeHeaderText,
} from '../../action';

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
      <div>
        <div>
          <input
            value={this.props.headerText}
            onChange={(e) => this.props.changeHeaderText(e.target.value)}
          />
        </div>
        <div
          onClick={() => this.props.I_WANT_TO_CHANGE_COLOR()}
          style={UserInputComponentStyle}
        >
          <h1>
            CHANGE ROOT COLOR!
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headerText: state.headerText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    I_WANT_TO_CHANGE_COLOR: () => dispatch(changeColorAction(generateRandomRGB())),
    changeHeaderText: (text) => dispatch(changeHeaderText(text))    
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputComponent);
