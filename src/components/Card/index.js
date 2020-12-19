import React from 'react';

import styles from './index.module.scss';

const Card = ({children, additionalStyles}) => (
    <div className={styles.card} style={additionalStyles}>
        {children}
    </div>
)

export default Card;