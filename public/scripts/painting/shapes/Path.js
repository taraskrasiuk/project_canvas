import PaintObject from "./PaintObject";
class Path extends PaintObject{
    constructor({x,y, ctx, strokeStyle, lineWidth, globalAlpha, shadowColor, shadowBlur, type}) {
        super ({x, y, ctx, type});
        this.paths = [];

        this.strokeStyle = strokeStyle;
        this.lineWidth = lineWidth;
        this.globalAlpha = globalAlpha;
        this.shadowColor = shadowColor;
        this.shadowBlur = shadowBlur;
    }

    addPath({x,y}) {
        this.paths.push(x, y);
        return this;
    }

    getAllPaths () {
        return this.paths;
    }

    stringifyPath () {
        this.path = JSON.stringify(this.path);
    }

    parsePath () {
        this.path = JSON.parse(this.path);
    }


}
export default Path;