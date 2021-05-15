/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    const { nome, sobrenome } = props;
    return (
        <div>{nome} <strong>{sobrenome}</strong></div>
    );
};