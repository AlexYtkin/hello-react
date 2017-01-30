"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var CardComponent_1 = require("./CardComponent");
var CardList = (function (_super) {
    __extends(CardList, _super);
    function CardList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardList.prototype.render = function () {
        var cardComponents = this.props.cards.map(function (c, i) {
            return (React.createElement(CardComponent_1.default, { card: c, key: i }));
        });
        // <CardComponent card={card} />
        return (React.createElement("div", { className: "list" },
            React.createElement("h1", null, "CardList"),
            cardComponents));
    };
    return CardList;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CardList;
//# sourceMappingURL=CardList.js.map