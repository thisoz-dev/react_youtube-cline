import React, { memo } from 'react';
import NavExtend from '../nav_extend/nav_extend';
import styles from './nav_slide.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';

const NavSlide = memo(({ slideNav, handleMenu }) => {
  const reload = () => {
    window.location.reload();
  };
  const toggleClass = slideNav
    ? `${styles.nav_slide_wrap} ${styles.active}`
    : styles.nav_slide_wrap;
  const bgToggle = slideNav ? `${styles.nav_bg}` : `${styles.nav_bg} ${styles.hidden}`;
  const clickMenu = () => {
    handleMenu();
  };
  return (
    <div className={toggleClass}>
      <div className={styles.nav_slide}>
        <div className={styles.nav_header}>
          <button className={styles.menuBtn} onClick={clickMenu}>
            <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
          </button>

          <div className={styles.logo} onClick={reload}>
            <img className={styles.logoImg} src={logo} alt="logo" />
            <h1 className={styles.title}>Youtube</h1>
          </div>
        </div>
        <div className={styles.nav_content}>
          <NavExtend />
        </div>
      </div>
      <div className={bgToggle}></div>
    </div>
  );
});

export default NavSlide;
