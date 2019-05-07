import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Nav.css';

const Nav = (props, context) => {
  return (
    <ul className={styles['nav-list']}>
      <li className={styles['nav-link']}><Link to="/home" >HOME</Link></li>
      <li className={styles['nav-link']}><Link to="/about" >ABOUT</Link></li>
      <li className={styles['nav-link']}><Link to="/posts" >POSTS</Link></li>
    </ul>
  );
}

Nav.propTypes = {
};

export default Nav;
