import * as React from 'react';
import { Component } from 'react';
import Task from '../models/Task';

interface  TaskComponentProps {
    key: number;
    task: Task;
}

class TaskComponent extends Component<TaskComponentProps, any> {

    render() {

        return (
            <div className="list">
                <p>{this.props.task.id}</p>
                <p>{this.props.task.name}</p>
                <p>{this.props.task.done}</p>
            </div>
        );
        /*
         return (
         <div className="list">
         <h1>CardList</h1>
         {cardComponents}
         </div>
         );
         */
    }
}

export default TaskComponent;









































































































