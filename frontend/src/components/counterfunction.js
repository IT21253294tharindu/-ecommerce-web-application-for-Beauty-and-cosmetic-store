import React,{useState} from "react";

function CounterFunction(){

    let [number,setNumber]=useState(0)

    function increment(){
        setNumber(++number)

    }
    return(
        <div>
            <h3>functional component</h3>
            <h1>counter={number}</h1>
            <button onClick={increment}>increment</button>

        </div>
    )
}
export default CounterFunction;