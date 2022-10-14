import React from 'react';
import styles from './Tabloid.module.css';
import {TabloidValue} from './TabloidValue/TabloidValue';
import {TabloidButtons} from './TabloidButtons/TabloidButtons';

export type TabloidType={
    value:number
    incNewValue:(newValue:number)=>void
}

export const Tabloid: React.FC<TabloidType> = ({value,incNewValue}) => {
    return (
        <div className={styles.Tabloid}>
            <TabloidValue incNewValue={incNewValue} value={value}/>
            <TabloidButtons value={value} incNewValue = {incNewValue}/>
        </div>
    );
};

