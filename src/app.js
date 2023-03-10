import React,{useEffect,useState,useMemo,useCallback} from "react";
import { UserInput } from "./components/user-input";
import { UserList } from "./components/user-list";

export const App = () => {

    const [inputValue, setInputValue] = useState('');
    const [users,setUsers] = useState([]);
    
    const [count,setCount] = useState(0);
    const onInputChange = ({target : {value}}) => {setInputValue(value)}

  
        const rawVerifyHandler = (userId) => {
            setUsers(
              (
                oldUsers
              ) =>
                oldUsers.map(({ verified, ...user }) => ({
                  ...user,
                  verified: user.id === userId ? !verified : verified,
                }))
            );
          };
    
          const verifyHandler = useCallback(rawVerifyHandler, [setUsers]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
       .then((data) => data.json())
       .then(({data})=>setUsers(data.map(user => ({...user, verified :false}))));
   },[]);

   

    const filteredUsers = useMemo(() => {
        console.log('memo');
        return  users.filter(({last_name,first_name}) => last_name.toLowerCase().includes(inputValue.toLowerCase()) || first_name.toLowerCase().includes(inputValue.toLowerCase()))
    }, [users,inputValue]);

    
    return (
        <>
        <button onClick={() => setCount(count + 1)}>+</button>
            <UserInput onInputChange = {onInputChange} value = {inputValue} />
            <UserList users = {filteredUsers} verifyHandler={(verifyHandler)}/>
        </>
    )
};