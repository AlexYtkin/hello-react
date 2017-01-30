
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var CardComponent = (function (_super) {
    __extends(CardComponent, _super);
    function CardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardComponent.prototype.render = function () {
        return (React.createElement("div", { className: "list" },
            React.createElement("xmp", null, " card "),
            React.createElement("h1", null, this.props.card.getTitle()),
            React.createElement("p", null, this.props.card.description)));
    };
    return CardComponent;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardComponent;
//# sourceMappingURL=CardComponent.js.map