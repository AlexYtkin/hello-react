"use strict";
var Tasks = (function () {
    function Tasks(id, name, done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
    ;
    return Tasks;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
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
//# sourceMappingURL=Tasks.js.map