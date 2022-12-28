import React from "react";
import "./FilterStyles.scss";


const Filter = ({value, onChange}) => (

    <div className="filterBox">
    <label>
     Filter by name:
     <input className="fiterInput" type="text" value={value} onChange={onChange}/>
    </label>
    </div>


)

export default Filter;