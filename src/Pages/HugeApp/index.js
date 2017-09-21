import React from 'react';
import ChildComponent from './ChildComponent';
import { connect } from 'react-redux';

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
          RGB={this.props.rootColor}
        />
        <ChildComponent
          factor={this.state.decreaseFactor + 0.2}
          RGB={this.props.rootColor}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rootColor: state.rootColor,
  }
}

export default connect(mapStateToProps, null)(HugeApp);

