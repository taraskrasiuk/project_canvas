
const defaultPropsForConext = {
    strokeStyle: "#332211",
    lineWidth: 1,
    fillStyle: "#224455",
    shadowBlur: 0,
    shadowColor: null,
    globalAlpha: 1,
    lineCap: "round",
    globalComposition: "source-over"
};

class Canvas_Context {
    constructor(props = {}) {
        this.context = props.context;
        this.width = props.width;
        this.height = props.height;
        this.strokeStyle = props.strokeStyle || "#333221";
        this.lineWidth = props.lineWidth || 1;
        this.fillStyle = props.fillStyle || "#224455";
        this.shadowBlur = props.shadowBlur || 0;
        this.shadowColor = props.shadowColor;
        this.globalAlpha = props.globalAlpha || 1;
        // this.scale = props.scale || 1;
        this.lineCap = props.lineCap || "round";
        this.globalComposition = "source-over";

        this.backgroundImage = null;
        this.backgroundColor = null;
        this.fillShape = false;
        this.text = "";
        this.font = props.font || 12;

        this.mergeValueWithContext();

    }

    static _except(type) {
        return type != "fillShape" || type != "text";
    }

    // stringify () {
    //     return JSON.stringify({
    //         context : this.context,
    //         width : this.width,
    //         height : this.height,
    //         strokeStyle : this.strokeStyle,
    //         lineWidth : this.lineWidth,
    //         fillStyle : this.fillStyle,
    //         shadowBlur : this.shadowBlur,
    //         shadowColor : this.shadowColor,
    //         globalAlpha : this.globalAlpha,
    //         lineCap : this.lineCap,
    //         globalComposition : this.globalComposition,
    //         backgroundImage : this.backgroundImage,
    //         backgroundColor : this.backgroundColor,
    //         fillShape : this.fillShape,
    //         text : this.text,
    //         font : this.font
    //     });
    // }

    update({type, value}) {
        this[type] = value;
        if (Canvas_Context._except(type)) {
            let c = this.getContext();
            c[type] = this[type];
        }
        console.log("CONTEXT, new value: ", type, value);
    }

    clearAll () {
        const self = this;
        const map  = Object.keys(defaultPropsForConext).map(val => {
            return {
                type: val,
                value: defaultPropsForConext[val]
            };
        });
        map.forEach.call(this, m => {
            self.update(m);
        });
        this.backgroundImage = null;
        this.backgroundColor = null;
        this.fillShape = false;
        this.clearContext();
    }

    mergeValueWithContext() {
        Object.assign(this.context, {
            strokeStyle: this.strokeStyle,
            lineWidth: this.lineWidth,
            fillStyle: this.fillStyle,
            shadowBlur: this.shadowBlur,
            shadowColor: this.shadowColor,
            globalAlpha: this.globalAlpha,
            lineCap: this.lineCap,
            globalComposition: this.globalComposition
            // scale: this.scale
        });
    }

    clearContext() {
        this.context.clearRect(0, 0, this.width, this.height);
        if (this.backgroundImage == null && this.backgroundColor != null) {
            // this.context.save();
            this.context.fillStyle = this.backgroundColor;
            this.context.fillRect(0, 0, this.width, this.height);
            // this.context.globalAlpha = 1;
            // this.context.restore();
        }
        if (this.backgroundImage != null && this.backgroundColor == null) {
            // this.context.save();
            if (this.backgroundImage.data != null) {
                this.context.putImageData(this.backgroundImage, 0, 0);
            } else {
                if (this.backgroundImage.src != null) {
                    this.context.drawImage(this.backgroundImage, 0, 0);
                } else {
                    let img = new Image();
                    img.src = this.backgroundImage;
                    this.context.drawImage(img, 0, 0);
                }
            }
            // this.context.globalAlpha = 1;
            // this.context.restore();
        }
    }

    getContext() {
        return this.context;
    }
}
export default Canvas_Context;