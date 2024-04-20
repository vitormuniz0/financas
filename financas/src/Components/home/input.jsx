import React, { useState } from 'react';
import styles from './input.module.css';

export const Input = (props) => {

    return (
        <input
            type="number"
            step="0.01"
            className={styles.input}
            placeholder='0.00'
        />
    );
};