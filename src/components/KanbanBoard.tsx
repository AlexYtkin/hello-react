import * as React from 'react';
import {Component} from 'react';
import CardList from './CardList';
import Card from '../models/Card';

interface KanbanBoardProps {
    cards: Array<Card>;
}

class KanbanBoard extends Component<KanbanBoardProps, any> {

    render() {
        let cardList = React.createElement(CardList, { cards: this.props.cards })
        return (
            <div className="app">
              <h1>Hello from KanbanBoard</h1>
                {cardList}
            </div>
        );
    }
}
export default KanbanBoard;

