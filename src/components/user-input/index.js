import React from "react";
import styles from './index.module.css';


export const UserInput = ({onInputChange,value}) => {
    
    return (
        <div className={styles.wrapper}>
            <label htmlFor="userInput" className={styles.label}>Enter user name</label>
            <input 
                type="text" 
                id="userInput" 
                className={styles.UserInput}
                onChange = {onInputChange}
                value = {value}
            />
        </div>
    )
};

