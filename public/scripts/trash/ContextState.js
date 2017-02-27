


class ContextState {
  constructor(props = {}) {
    const {canvas, ctx, strokeWidth, strokeColor, fillColor, backgroundColor, globalAlpha} = props;
    this.ctx = ctx;
    this.canvas = canvas;
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
    this.fillColor = fillColor;
    this.backgroundColor = backgroundColor;
    this.globalAlpha = globalAlpha;

    this.snapShot = null;
    this.callback = props.callback;
  }

  merge (prop = {}) {
    if (prop != null) {
      if (!isNaN(prop.value)){
        this[prop.name] = parseInt(prop.value);
      } else {
        this[prop.name] = prop.value;
      }
    }
    this._update(prop);
    // this.callback(prop);
  }

  _update() {
    const props = ["strokeWidth", "strokeColor", "fillColor", "globalAlpha", "lineWidth", "strokeStyle"];
    for(let p of props) {
      this.ctx[p] = this[p];
    }
  }

  takeSnapshot () {
    this.snapShot = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  };
  restoreSnapshot () {
    this.ctx.putImageData(this.snapShot, 0, 0);
  };
}

export default ContextState;
