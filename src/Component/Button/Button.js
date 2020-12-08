import React from 'react';
import './Button.scss';

const button = (props) => {
    return (
        <div className={props.btnClass} onClick={props.click}>
            <span>{props.btnValue}</span>
        </div>
    );
}

export default button;