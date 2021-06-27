import React, { memo } from 'react';
import styles from './dropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroadcastTower, faVideo } from '@fortawesome/free-solid-svg-icons';

const DropDown = memo(({ isActive }) => {
  return (
    <div className={styles.dropdown_wrap}>
      <div className={`${styles.dropdown} ${isActive && styles.active}`}>
        <ul className={styles.drop_list}>
          <li className={styles.drop_item}>
            <a href="#;" className={styles.item_link}>
              <FontAwesomeIcon icon={faVideo} className={styles.item_icon} />
              동영상 업로드
            </a>
          </li>
          <li className={styles.drop_item}>
            <a href="#;" className={styles.item_link}>
              <FontAwesomeIcon icon={faBroadcastTower} className={styles.item_icon} />
              실시간 스트리밍 시작
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default DropDown;
