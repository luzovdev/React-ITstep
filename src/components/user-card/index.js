import React from "react";
import verifyImg from './icon.png';
import styles from './index.module.css'

export const UserCard = React.memo( ({firstName,lastName,avatar,verified,verifyHandler,id}) => {
    
    return (
        <div className={styles.wrapper}>
            <img  src={avatar} alt="avatar" className={styles.avatar}/>
            <h3 className={styles.header}>{lastName}</h3>
            <p className={styles.label}>{firstName}</p>        
            {verified ? <img className={styles.verify} src={verifyImg}/> :  <button onClick={() => {verifyHandler(id)}} className={styles.verifyButton}>verify</button>}
        </div>
    )
});
