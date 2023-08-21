import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Child from "./child"

export default function HOOK() {
  
    const[number, setNumber]  = useState(0);

    const handleTangSo = () => {
        setNumber(number + 1);
    }

    const showNumber = () => {
        console.log("showNumber");
    }
    const showNumberCallBack = useCallback(showNumber(),[]);
   
    const numberUp = () => {
        let i =  0;
        while(i  <1000) i++;
        console.log(i);
        return i
    }
    const numberUseMemo  = useMemo(()=> numberUp(),[]);
   
    useEffect(() => {
        /**
         * Tương ứng componentDidmount; componentDidUpdate; componentWillUnmount bên Class component
         * Nếu như tham số thứ 2 của useEffect là [] => componentDidmount bên Class component
         * Nếu như tham số thứ 2 của useEffect là [number] (nhận vào state thay đổi) => componentDidUpdate bên Class component
         */
        console.log("useEffect");
      }, [number]);

      
  useEffect(() => {
    /**
     * Nếu như return về 1 arrow fnc => componentWillUnmount bên Class component
     */
    let interval = setInterval(() => {
      console.log("hello");
    }, 1000);

    return () => {
      console.log("useEffect - willUsnmount");
      clearInterval(interval);
    };
  }, []);


  
    return (
        <div>
            <h3>HOOK</h3>
            <h3>Number: {number}</h3>
            <button className="btn btn-success" onClick={handleTangSo}>Tang so</button>
            <Child showNumber={showNumberCallBack}/>
            <h3>Number up :{numberUseMemo}</h3>
        </div>


    )

}
