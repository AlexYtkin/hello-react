"use strict";
var Card = (function () {
    //public tasks: string[];
    function Card(id, title, description, status, tasks) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.tasks = tasks;
    }
    ;
    return Card;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Card;
//# sourceMappingURL=Card.js.map