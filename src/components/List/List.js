import PropTypes from 'prop-types';
import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes= {
    title: PropTypes.node.isRequired,
    heroImg: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the thingd!!!</p>
  }
  
  render() {
    return (
      <section className={styles.component}>
       <Hero title={this.props.title} heroImg={this.props.heroImg}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title="column-1"/>
          <Column title="column-2"/>
          <Column title="column-3"/>
        </div>
      </section>
      
    )
  }
}

export default List;
