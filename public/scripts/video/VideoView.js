import $ from "jquery";
import View from "../global/View";
import Bottom_View from "../board/Bottom_View";


class VideoView extends View {
    constructor(props = {}) {
        super({
            className: "video-view",
            active: true
        });

        this.player = null;



        this._bottomControls = {
            items: [
            {
                type: "text",
                label: "Video url",
                onChange: val => this.onYouTubeIframeAPIReady(val)
            },
                {
                    type: "button",
                    label: "video",
                    onClick: (e) => {
                        const val = $(e.currentTarget).prev().val();
                        if (val.trim().length != 0) {
                            this.onYouTubeIframeAPIReady(val);
                        }

                    }
                }
        ]
        };

        this.bottomControl = new Bottom_View(this._bottomControls);
    }


    getVideo () {
        const video = $("<div></div>", {
            id: "video"
        }).css({
            height: "100%",
            width: "100%"
        });
        return video;
    }

    onYouTubeIframeAPIReady(val) {
        const self = this;
        this.player = new YT.Player('video', {
            height: '100%',
            width: '100%',
            videoId: val.split("?v=")[1],
            events: {
                'onReady': self.onPlayerReady.bind(self),
                'onStateChange': self.onPlayerStateChange.bind(self)
            }
        });
    }

    onPlayerReady (event) {
        event.target.playVideo();
    }

    onPlayerStateChange (event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            // setTimeout(stopVideo, 6000);
        }
    }



    render () {
        const wrapper = this.renderWrapper();
        this.bottomControl.update();
        if (this.element != null) {
            return this.element;
        }
        wrapper.append(this.getVideo());
        this.element = wrapper;
        return wrapper;
    }

}

export default VideoView;