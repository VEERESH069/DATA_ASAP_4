import React from "react";
const Scenario = ({scenario,options}) => {
    return (
        <div className="scenario-container">
            <h2>{scenario}</h2>
            <ul>{options.map((option,index)=>(
                <li key = {index}>{option}</li>
            ))}
            </ul>
        </div>
    )
}
export default Scenario;