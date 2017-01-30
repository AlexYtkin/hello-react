"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var TaskComponent = (function (_super) {
    __extends(TaskComponent, _super);
    function TaskComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskComponent.prototype.render = function () {
        return (React.createElement("div", { className: "list" },
            React.createElement("p", null, this.props.task.id),
            React.createElement("p", null, this.props.task.name),
            React.createElement("p", null, this.props.task.done)));
        /*
         return (
         <div className="list">
         <h1>CardList</h1>
         {cardComponents}
         </div>
         );
         */
    };
    return TaskComponent;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskComponent;
//# sourceMappingURL=TaskComponent.js.map