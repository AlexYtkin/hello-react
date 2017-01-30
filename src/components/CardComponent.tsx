import * as React from 'react';
import { Component } from 'react';
import CheckList from './CheckList';
import Card from '../models/Card';
import Task from '../models/Task';


interface CardComponentProps {
    key: number;
    card: Card;
}

class CardComponent extends Component<CardComponentProps, any> {
    render() {
        let checkList = React.createElement(CheckList, { tasks: this.props.card.tasks })
        return (
            <div className="list">
                <h1>{this.props.card.title}</h1>
                <p>{this.props.card.description}</p>
                <p>{this.props.card.status}</p>
                {checkList}
            </div>
        );
    }
}
export default CardComponent;