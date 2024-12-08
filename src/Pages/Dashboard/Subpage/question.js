import React, { useState } from "react";
import "./index.css";
const Question = () => {

    const [value, setValue] = useState('');
    const options = [
        { label1: "Red", value: 1 },
        { label1: "Green", value: 2 },
        { label1: "BLue", value: 3 }
    ]

    function handleSelect(event) {
        setValue(event.target.value);
    }
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-25 p-3 border rounded">
                <h1>Select Session</h1>
                <select className="dropdown-menu" onChange={handleSelect}>
                    {options.map(option => (
                        <option value={option.value}>{option.label}
                        </option>
                    ))}
                </select>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Question;