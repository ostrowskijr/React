/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Button.css'

export default (props) => {
    const { label, operation, double, triple, click } = props;
    let classes = 'button '
    classes += operation ? 'operation' : ''
    classes += double ? 'double' : ''
    classes += triple ? 'triple' : '';
    return (
        // {/* Definir dinamicamente a classes a serem aplicadas ao componente através de parâmetros recebidos. */}
        <button onClick={e => click && click(label)} className={classes}>
            {label}
        </button>
    );
};