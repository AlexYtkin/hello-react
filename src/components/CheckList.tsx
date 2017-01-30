import * as React from 'react';
import {Component} from 'react';
import TaskComponent from "./TaskComponent";
import Task from "../models/Task";


interface CheckListProps {
    tasks: Array<Task>;
}

class CheckList extends Component<CheckListProps, any> {

    render() {
        let taskComponents = this.props.tasks.map((c: Task, i: number) => {
            return ( React.createElement(TaskComponent, {task: c, key: i}) );
        });

        return (
            <div className="checklist">
                <h1>TaskList</h1>
                {taskComponents}
            </div>
        );
    }

    /*

    render() {
        let cardComponents = this.props.cards.map((c: Card, i: number) => {
            return ( React.createElement(CardComponent, {card: c, key: i}) );
        });

        // <CardComponent card={card} />
        return (
            <div className="list">
                <h1>CardList</h1>
                {cardComponents}
            </div>
        );
    }
    ----------------------
     return (
     <div className="list">
     <h1>CardList</h1>
     {cardComponents}
     </div>
     );
    */
}
export default CheckList;