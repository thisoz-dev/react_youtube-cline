import React from 'react';
import styles from './nav_collapse.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCompass, faInbox } from '@fortawesome/free-solid-svg-icons';

const NavCollapse = (props) => {
  return (
    <div className={styles.nav_collapse}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faHome} />
            <span>홈</span>
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faCompass} />
            <span>탐색</span>
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faYoutubeSquare} />
            <span>구독</span>
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faInbox} />
            <span>보관함</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavCollapse;
