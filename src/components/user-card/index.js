import React from "react";
import verifyImg from './icon.png';
import styles from './index.module.css'

export const UserCard = ({firstName,lastName,avatar}) => {
  
    return (
        <div className={styles.wrapper}>
            <img  src={avatar} alt="avatar" className={styles.avatar}/>
            <h3 className={styles.header}>{lastName}</h3>
            <p className={styles.label}>{firstName}</p>
            <button className={styles.verifyButton}>verify</button>
            <img className={styles.verify} src={verifyImg}/>
        </div>
    )
}