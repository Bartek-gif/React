import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
    render() {
      return (
      <header className={styles.component}>
          <h2 className={styles.title}>"Things to do"</h2>
          <img className={styles.image} src="https://images.pexels.com/photos/4755029/pexels-photo-4755029.jpeg?cs=srgb&dl=pexels-kira-louw-4755029.jpg&fm=jpg"/>
        </header>
      )   
    }   
}

export default Hero;