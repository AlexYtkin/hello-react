"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var TaskComponent_1 = require("./TaskComponent");
var CheckList = (function (_super) {
    __extends(CheckList, _super);
    function CheckList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckList.prototype.render = function () {
        var taskComponents = this.props.tasks.map(function (c, i) {
            return (React.createElement(TaskComponent_1.default, { task: c, key: i }));
        });
        return (React.createElement("div", { className: "checklist" },
            React.createElement("h1", null, "TaskList"),
            taskComponents));
    };
    return CheckList;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckList;
//# sourceMappingURL=CheckList.js.map