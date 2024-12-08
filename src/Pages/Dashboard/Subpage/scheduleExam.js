import React, { useState } from "react";
import "./index.css";



const ScheduleExam = () => {

    const [value, setValue] = useState('');
    const options = [
        { label: "Please Select", value: null },
        { label: "FITTER", value: "FITTER" },
        { label: "ELECTRICIAN", value: "ELECTRICIAN" }
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

export default ScheduleExam;