import React from 'react';
import styles from './SuperButton.module.css'

type PropsType = {
    title:string
    callBack?:()=>void
}
export const SuperButton: React.FC<PropsType> = ({title,callBack}) => {

    return (
        <button
            className={styles.SuperButton}
            onClick={callBack}>{title}</button>
    );
};

