/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Button.css'

export default (props) => {
    const {label, operation, double, triple, click} = props;
    return (
        <div>
            {/* Definir dinamicamente a classes a serem aplicadas ao componente através de parâmetros recebidos. */}
            <button 
            onClick={e => click && click(label)}
            className={`
                button
                ${operation ? 'operation' : ''}
                ${double ? 'double' : ''}
                ${triple ? 'triple' : ''}
            `}>{label}</button>
        </div>
    );
};