import React from 'react';
import {Link} from "react-router-dom";
import styles from './index.module.scss';

function Header() {
    return <header className={styles.header}>
        <h1 className={styles.logo}>roboRew</h1>
        <nav className={styles.nav}>
            <Link className={`${styles.nav__item} ${styles.active}`} to="/add-project">Add Project</Link>
            <Link className={styles.nav__item} to="/">Open With Ui Path</Link>
            <Link className={styles.nav__item} to="/">Calendar Report</Link>
        </nav>
    </header>;
}

export default Header;