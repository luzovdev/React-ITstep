import React, {useState} from "react";

//Нужно запустить один раз, на старте useState
// при помощи lazy state:
// let [counter, setCounter] = useState(() => hardColculation());
let hardColculation =  () => {
    console.log('hard colculation');
    return 0;
}




export const App = () => {
    //Правило хуков : хукиии надо применять только в теле компоненты, как показано в примере
                    // Хук возвращает массив [state,function]
                    // Стейтов может быть много 
                    // let [counter , setCounter] = useState(0);
                    // let [counter , setCounter] = useState(0);
                    // let [counter , setCounter] = useState(0);
                    // let [counter , setCounter] = useState(0);
                    // setCounter - функция асинхронная
    let [counter, setCounter] = useState(() => hardColculation());
    let [obj , setObj] = useState({a:2, b:100});

    console.log('render')

    // const onClickHandler = () => {
    //         //Чтобы получать актуальное значение, вот решение
    //         const newCounterValue =  counter-1;
    //        setCounter(newCounterValue)
    //        console.log(newCounterValue);

    // }
    //Problem!!! Cтейт меняяется быстрее чем происходит ререндер
    //  const onClickHandler = () => {
    //     setCounter(counter - 1)

    //     setTimeout(() => {
    //         const newCounter = counter - 1;
    //         console.log(newCounter);
    //         setCounter(newCounter)
    //     })
    // }
    // prevCounter - реакт всегда передает предыдущее состояние.
    // const onClickHandler = () => {
    //     setCounter(counter - 1)

    //     setTimeout(() => {
    //         const newCounter = counter - 1;
    //         console.log(newCounter);
    //         setCounter((prevCounter) => prevCounter - 1)
    //     })
    // }

    // const onClickHandler = () => {
        // setObj((prevObj) => ({a:3}));
        // setObj((prevObj) => ({...prevObj,a:3}));
        // setObj((prevObj) => ({...obj,a:3232}));
    // };

    const onClickHandler = () => {
            setCounter(counter - 1);
};

    return (
    <>
        <h1>Counter</h1>
        {/* <div>Obj value a : {obj.a}</div>
        <div>Obj value b : {obj.b}</div> */}
        <div>{counter}</div>
        <button onClick={() => {onClickHandler()}} >-</button>
        <button >+</button>
     </>
    );
};