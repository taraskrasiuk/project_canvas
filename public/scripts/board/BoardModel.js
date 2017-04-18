import PaintView from "../painting/PaintView";
import PDF_View from "../pdf_view/PDF_View";
import VideoView from "../video/VideoView";

class BoardModel {
    constructor (props = {}) {

        this.name = props.name;
        this._id = props.id;
        this.views = null;

        this.currentView = null;
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
        if (this.views == null) {
            const PAINT_VIEW = "Canvas";
            // const PDF_VIEW = "PDF";
            const VIDEO_VIEW = "Video";
            this.views = {
                [PAINT_VIEW]: new PaintView({elementId: "content", tools: ["brush", "shapes", "line", "background", "erase", "select", "text"]}),
                // [PDF_VIEW]: new PDF_View({id: "canvas", tools: ["brush", "laser"]}),
                [VIDEO_VIEW]: new VideoView({id: "content"})
            };
        }
        const view = this.views[type];
        if (view != null) {
            this.currentView = type;
            return view;
        } else {
            return null;
        }
    }

}
export default BoardModel;