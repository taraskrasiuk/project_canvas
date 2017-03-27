import PaintView from "../painting/PaintView";
import PDF_View from "../pdf_view/PDF_View";
import VideoView from "../video/VideoView";

class BoardModel {
    constructor (props = {}) {
        const PAINT_VIEW = "Canvas";
        const PDF_VIEW = "PDF";
        const VIDEO_VIEW = "Video";
        this.name = props.name;
        this._id = props.id;
        this.views = {
            [PAINT_VIEW]: new PaintView({elementId: "content", tools: ["brush", "shapes", "line", "background", "erase", "select", "text"]}),
            [PDF_VIEW]: new PDF_View({id: "canvas", tools: ["brush"]}),
            [VIDEO_VIEW]: new VideoView({id: "content"})
        };
    }
    getName () {
        return this.name;
    }
    setName (n) {
        this.name = n;
        return this;
    }
    getId () {
        return this._id;
    }

    getView (type) {
        const view = this.views[type];
        if (view != null) {
            return view;
        } else {
            return null;
        }
    }

}
export default BoardModel;