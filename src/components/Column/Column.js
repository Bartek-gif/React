import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from'../Card/Card';
//import Creator from'../Creator/Creator';
//import {settings} from'../../data/dataStore';
import Icon from'../Icon/Icon';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
    }
    render() {
        const {title, icon, cards} = this.props;
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                    <span className={styles.icon}>
                        <Icon name= {icon}/>
                    </span>
                    {title}
                </h3>
                {/*<Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>*/}
                {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                ))}
            </section>
        )
    }
}

export default Column; 