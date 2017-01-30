"use strict";
var Card = (function () {
    function Card(id, title, description, status, tasks) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.tasks = tasks;
    }
    ;
    Card.prototype.getTitle = function () { return this.title; };
    return Card;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
//# sourceMappingURL=Card.js.map