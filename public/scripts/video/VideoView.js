import $ from "jquery";
import View from "../global/View";
import videojs from "video.js";
import Youtube from "videojs-youtube/dist/Youtube.min.js";


class VideoView extends View {
    constructor(props = {}) {
        super(props);
    }


    render () {
        console.log(Youtube);
        const wrapper = this.renderWrapper();
        const video = $("<video></video>", {

        }).addClass("video-js");
        video.attr("src", "https://www.youtube.com/watch?v=Qwgw89p4Yao&list=PL7oSbenj_s6qus7uy7u9vZ85Qt2Qz0B0U");
        video.attr("controls", true);
        video.attr("autoplay", true);
        video.width(640).height(264);
        // video.attr("poster", "MY_VIDEO_POSETER");
        video.attr("data-setup",
            '{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=Qwgw89p4Yao&list=PL7oSbenj_s6qus7uy7u9vZ85Qt2Qz0B0U"}] }');
        return wrapper.append(video);
    }

}

export default VideoView;