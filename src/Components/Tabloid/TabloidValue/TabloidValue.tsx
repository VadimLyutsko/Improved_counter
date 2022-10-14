import React from 'react';
import styles from '../Tabloid.module.css'
import {TabloidType} from '../Tabloid';

export const TabloidValue: React.FC<TabloidType> = ({value}) => {
    return (
        <div className={styles.TabloidValue}>{value}</div>
    );
};

