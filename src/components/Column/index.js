import React from 'react';
import styles from './index.module.scss';

const Column = ({children}) => (
    <div className={styles.column}>{children}</div>
)

export default Column;