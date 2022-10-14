import React from 'react';
import styles from '../Tabloid.module.css';
import {SuperButton} from '../../SuperButton/SuperButton';
import {TabloidType} from '../Tabloid';


export const TabloidButtons: React.FC<TabloidType> = ({incNewValue, value}) => {

    const onIncClickButtonHandler =()=>{
        incNewValue(value+1)
    }

    const onResetClickButtonHandler =()=>{
        incNewValue(0)
    }

    return (
        <div className={styles.TabloidButtons}>
            <SuperButton title="Inc" callBack={onIncClickButtonHandler}/>
            <SuperButton title="Reset" callBack={onResetClickButtonHandler}/>
        </div>
    );
};

