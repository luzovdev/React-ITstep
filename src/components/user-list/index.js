import React from "react";
import {UserCard} from '../user-card';
import styles from './index.module.css';

export const UserList = ({users}) => {
    
  

    return(
        <div className = {styles.wrapper}>
            {users.map(({avatar,first_name,last_name}) => <UserCard avatar = {avatar} firstName ={first_name} lastName = {last_name}/>) }
        </div>
        // <div className = {styles.wrapper}>
        //      {users.map((props) => <UserCard {...props}/>) }
        // </div>
    ) ;
};