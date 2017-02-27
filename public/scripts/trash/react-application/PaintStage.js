import React, {Component, Proptypes} from 'react';
import {Stage, Layer} from 'react-konva';


class PaintStage extends Component {
  constructor(props = {}) {
    super(props);
    const {width, height} = props;
  };

  handleMouseMove (e) {
    console.log("&&&&");
  }

  componentDidMount () {
    const stage = this.refs.mainStage;

  }

  render () {
    return (
      <Stage ref="mainStage"
        width={500} height={500}
        onMouseMove={this.handleMouseMove.bind(this)}
        >
        <Layer>

        </Layer>
      </Stage>
    );
  }
}

export default PaintStage;
