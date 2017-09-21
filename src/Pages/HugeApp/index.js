import React from 'react';
import ChildComponent from './ChildComponent';

const hugeAppStyle = {
  backgroundColor: 'black',
  height: '100vh',
  width: '100%',
  padding : '40px',
  display: 'flex',
  position: 'relative',
}

class HugeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootColor: [255, 255, 255],
      decreaseFactor: 0.5,
    };
  }

  render = () => {
    return (
      <div
        style={{
          ...hugeAppStyle,
        }}
      >
        <ChildComponent
          factor={this.state.decreaseFactor}
          RGB={this.state.rootColor}
        />
        <ChildComponent
          factor={this.state.decreaseFactor + 0.2}
          RGB={this.state.rootColor}
        />
      </div>
    )
  }
}

export default HugeApp;

