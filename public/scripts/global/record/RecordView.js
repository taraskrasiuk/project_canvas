import $ from "jquery";
import View from "../View";
import WebSocket from "ws";

class RecordView extends View {
    constructor(props = {}) {
        super(props);

        this.controller = props.controller;
        this.inputValue = "";
    }


    handleOnOk (e) {
        e.preventDefault();
        if (this.inputValue != "") {
            console.log(this.inputValue);
        }

        var ws = new WebSocket('ws://localhost:3000',{
            // origin: 'http://localhost:3000'

        });
        ws.on('open', function open() {
            console.log('connected');
            // ws.send(Date.now());
            ws.send(JSON.stringify({data: this.inputValue}));

        });
        ws.on("error", function(e) {
            console.log(e);
        });
        ws.on('close', function close() {
            console.log('disconnected');
        });

    }

    handleOnCancel (e) {
        e.preventDefault();
        this.inputValue = "";

    }

    handleOnInput (e) {
        this.inputValue = e.target.value;

    }

    static getButton ({label, handler, className}) {
        return $("<button></button>", {
            "class": className && "button"
        }).text(label).on("click", (e => handler(e)));
    }

    getInput (handler) {
        return $("<input type='text'>")
            .on("input", (e => handler(e)));
    }


    render () {
        const wrapper = this.renderWrapper();
        const input = $("<input type='text'>");

        input.on("input", (e => this.handleOnInput(e)));

        wrapper.append(input);
        const okBtn = $("<button>ok</button>");
        okBtn.on("click", (e => this.handleOnOk(e)));
        // if (this.inputValue.length > 0) {
            wrapper.append(okBtn);
        // }
        const cancelBtn = $("<button>cancel</button>");

        cancelBtn.on("click", (e => this.handleOnCancel(e)));
        wrapper.append(cancelBtn);
        return wrapper;
    }
}

export default RecordView;

