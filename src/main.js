import React,{useEffect, useState} from "react";
import styles from './main.module.css';

export const Main = () => {

const [isSaleOn,setIsSaleOn] = useState(false);
const [isBorderOn,setisBorderOn] = useState(false);


const onStartSale = () => {
    setIsSaleOn(true)
    
};

const onStopSale = () => {
    setIsSaleOn(false)
    
};

const saleClassName = isBorderOn ? `${styles.saleHeader} ${styles.sale}` : styles.saleHeader;

useEffect(() => {
    let id;
    if(isSaleOn){
        id = setInterval(()=>{
            setisBorderOn(prevVal => !prevVal);
        },500);
    }

    return () => {
        clearInterval(id);
    };
},[isSaleOn])

    return (
        <div>
            <button onClick={onStartSale}>start sale!</button>
            <button onClick={onStopSale}>stop sale</button>
            <h1 className = {saleClassName}>Sale!</h1>
            
        </div>
    )
}