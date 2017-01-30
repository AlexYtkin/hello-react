import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import KanbanBoard from './components/KanbanBoard';
import Card from './models/Card';
import Task from "./models/Task";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*
Class Tasks {

}*/

const cardsList = [
    new Card( 1,
              "Read the Book",
              "I should read the whole book",
              "in-progress",
              [
                  new Task(1, "ContactList Example1", true),
                  new Task(2, "Kanban Example1", false),
                  new Task(3, "My own experiments1", false)
              ]
    ),
    new Card( 2,
              "Write some code",
              "Code along with the samples in the book",
              "todo",
              [
                  new Task(1, "ContactList2", false),
                  new Task(2, "Kanban Example2", true),
                  new Task(3, "My own experiments2", true)
              ]
    ),
    new Card( 3,
              "Kanban Example",
              "My own experiments",
              "done",
              [
                  new Task(1, "ContactList Example3", true),
                  new Task(2, "Kanban Examle3", false),
                  new Task(3, "My own experiments3", true)
              ]
    )
];



ReactDOM.render(
    <KanbanBoard cards={cardsList} />,
    document.getElementById('KanbanBoard')
);
