import AppView from "./scripts/app/AppView";
import NewTool from "./scripts/painting/tools/NewTools";
import ModuleHolder from "./scripts/mvc/ModuleHolder";
import IframeModule from "./scripts/iframe/IframeModule";
import IframeModel from "./scripts/iframe/IframeModel";
import Utils from "./scripts/utils/Utils";
import IframeView from "./scripts/iframe/IframeView";
import IframeController from "./scripts/iframe/IframeController";

const _holder = new ModuleHolder();

let iframe = new IframeModule({
    id: Utils.getId(),
    name: ("iframeModule " + (_holder.size() + 1))
});
iframe.init(
    new IframeModel({
        id: Utils.getId(),
        name: "iframe_model**" + iframe.getName()
    }),
    new IframeView({
        id: Utils.getId(),
        name: "iframe_view**" + iframe.getName()
    }),
    new IframeController({
        id: Utils.getId(),
        name: "iframe_controller**" + iframe.getName()
    })
);
_holder.addModule(iframe);
console.log(_holder);
// first create model
// second create view

exports.MainBoard = AppView;
