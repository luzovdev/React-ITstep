import React,{useEffect,useState} from "react";

export const UserList = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
       .then((data) => data.json())
       .then(({data})=>setUsers(data));
   },[]);


   console.log(users);

    return <h2>UserList</h2>
};