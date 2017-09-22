import React from 'react';
import ChildComponent from './ChildComponent';
import {
  connect,
} from 'react-redux';

const hugeAppStyle = {
  backgroundColor: 'black',
  height: '100vh',
  width: '100%',
  padding : '40px',
  display: 'flex',
  position: 'relative',
}

class HugeApp extends React.Component {
  render = () => {
    return (
      <div
        style={{
          ...hugeAppStyle,
        }}
      >
        <h1 style={{ color: 'white' }}>
          {this.props.headerText}
        </h1>

        <ChildComponent
          factor={0.5}
          RGB={this.props.rootColor}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rootColor: state.rootColor,
    headerText: state.headerText,
  }
}

export default connect(mapStateToProps)(HugeApp);

