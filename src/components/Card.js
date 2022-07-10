import React from "react";
import '../css/card.css';

const Card = ({test, setTest}) => {
    
    const deleteHandler = (e) => {
        let id = e.target.value
       setTest(test.filter((e) => (e !== id)))
    }
    return(
        <div className="card-main">
            <select>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
            <input></input>
            <button>Check</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Card;