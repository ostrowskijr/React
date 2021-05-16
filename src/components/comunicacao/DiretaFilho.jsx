/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    const {nome, idade, bool} = props;
    return (
        <div>
            <span>{nome} - </span>
            <span><strong>{idade}</strong> - </span>
            <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    );
};