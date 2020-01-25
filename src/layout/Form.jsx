import React from 'react';
import "./Form.scss";

const Form = (props) => {
    return (
        <div className="form">
            {props.children}
        </div>
    );
}

export default Form;