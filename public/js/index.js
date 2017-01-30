"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var KanbanBoard_1 = require("./components/KanbanBoard");
var Card_1 = require("./storages/Card");
var Task_1 = require("./storages/Task");
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById('root'));
/*
Class Tasks {

}*/
var cardsList = [
    new Card_1.default(1, "Read the Book", "I should read the whole book", "in-progress", [
        new Task_1.default(1, "ContactList Example1", true),
        new Task_1.default(2, "Kanban Example1", false),
        new Task_1.default(3, "My own experiments1", false)
    ]),
    new Card_1.default(2, "Write some code", "Code along with the samples in the book", "todo", [
        new Task_1.default(1, "ContactList2", false),
        new Task_1.default(2, "Kanban Example2", true),
        new Task_1.default(3, "My own experiments2", true)
    ]),
    new Card_1.default(3, "Kanban Example", "My own experiments", "done", [
        new Task_1.default(1, "ContactList Example3", true),
        new Task_1.default(2, "Kanban Examle3", false),
        new Task_1.default(3, "My own experiments3", true)
    ])
];
ReactDOM.render(React.createElement(KanbanBoard_1.default, { cards: cardsList }), document.getElementById('KanbanBoard'));
//# sourceMappingURL=index.js.map