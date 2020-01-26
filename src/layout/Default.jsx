import React from 'react';
import header from "../components/header"
const Default = (props) => {
    return (
        <div className="container">
            <header />
            {props.children}
        </div>
        
    );
}

export default Default;
