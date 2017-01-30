"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_1 = require("react");
var CardList_1 = require("./CardList");
var KanbanBoard = (function (_super) {
    __extends(KanbanBoard, _super);
    function KanbanBoard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KanbanBoard.prototype.render = function () {
        var cardList = React.createElement(CardList_1.default, { cards: this.props.cards });
        return (React.createElement("div", { className: "app" },
            React.createElement("h1", null, "Hello from KanbanBoard"),
            cardList));
    };
    return KanbanBoard;
}(react_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KanbanBoard;
//# sourceMappingURL=KanbanBoard.js.map