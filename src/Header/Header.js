import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../components/Container/Container';
import Icon from '../components/Icon/Icon';

class Header extends React.Component {
    render(){
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link to='/' className={styles.logo}>
                <Icon name='cat' />
              </Link>
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/Info' activeClassName='active'>Info</NavLink>
                <NavLink exact to='/Faq' activeClassName='active'>Faq</NavLink>
              </nav>
            </div>
          </Container>
        </header>
      );
    }
  }
  
  export default Header;
