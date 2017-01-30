"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var CheckList_1 = require("./CheckList");
var CardComponent = (function (_super) {
    __extends(CardComponent, _super);
    function CardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardComponent.prototype.render = function () {
        var checkList = React.createElement(CheckList_1.default, { tasks: this.props.card.tasks });
        return (React.createElement("div", { className: "list" },
            React.createElement("h1", null, this.props.card.title),
            React.createElement("p", null, this.props.card.description),
            React.createElement("p", null, this.props.card.status),
            checkList));
    };
    return CardComponent;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardComponent;
//# sourceMappingURL=CardComponent.js.map