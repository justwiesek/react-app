import React from "react";

import './ToggleButton.css';

const ToggleButton = props => (
    <button className="toggle-button" onClick={props.click} >
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
);

export default ToggleButton;