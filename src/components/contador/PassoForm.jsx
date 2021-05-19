/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    // Function para alterar o valor do Passo no componente Contador (Communicação Indireta.) componente filho alterando estado do pai.
    const novoPasso = (e) => {
        props.setPasso(+e.target.value);
    };
    return (
        <div>
            <label htmlFor="inputPasso">Passo</label>
            <input type="number" id="inputPasso" value={props.passo} onChange={novoPasso} />
        </div>
    );
};