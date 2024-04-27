import React from 'react';
import styles from './valor.module.css';

export const Valor = (props) => (
    <h1 className={styles.valor}>
        {props.children}
    </h1>
);