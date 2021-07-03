import React, { memo } from 'react';
import styles from './nav_extend.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faCompass,
  faInbox,
  faHistory,
  faClock,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const NavExtend = memo(({ clickHome, handleMenu }) => {
  const onClickHome = () => {
    clickHome();
    handleMenu();
  };
  return (
    <div className={styles.nav_extend}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item} onClick={onClickHome}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faHome} />홈
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faCompass} />
            탐색
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faYoutubeSquare} />
            구독
          </a>
        </li>
      </ul>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faInbox} />
            보관함
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faHistory} />
            시청기록
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faFolder} />내 동영상
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faClock} />
            나중에 볼 동영상
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#;" className={styles.item_link}>
            <FontAwesomeIcon className={styles.item_icon} icon={faHeart} />
            좋아요 표시한 동영상
          </a>
        </li>
      </ul>
    </div>
  );
});

export default NavExtend;
