import * as React from 'react';
import { Component } from 'react';
import CardComponent from './CardComponent';
import Card from '../models/Card'

interface  CardListProps {
    cards: Array<Card>;
}

class CardList extends Component<CardListProps, any> {
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
}
export default CardList;