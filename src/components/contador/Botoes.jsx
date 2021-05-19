/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    return (
        <div>
            <div>
                <button onClick={props.onInc}>+</button>
                <button onClick={props.onDec}>-</button>
            </div>
        </div>
    );
};