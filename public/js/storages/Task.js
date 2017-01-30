"use strict";
var Task = (function () {
    function Task(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
    ;
    return Task;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Task;
/*

 tasks: [
 {
 id: 1,
 name: "ContactList Example",
 done: true
 },
 {
 id: 2,
 name: "Kanban Example",
 done: false
 },
 {
 id: 3,
 name: "My own experiments",
 done: false
 }
 ]

 */ 
//# sourceMappingURL=Task.js.map