import "../css/list.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const List = () => {
    const [test, setTest] = useState([])

    const cardHandler = () => {
        setTest([...test, <Card test={test} setTest={setTest}/>])
        console.log(test);
    };


   

  return (
    <div>
      <div className="main">
        <button className="btn add" onClick={cardHandler}>
          Add
        </button>
      </div>
      {/* {test.map(item => {
        return item;
      })} */}

      {test.map((item, i) => (
        <div key={i}>
            {item}
            </div> 
      ))}

    </div>
  );
};

export default List;
