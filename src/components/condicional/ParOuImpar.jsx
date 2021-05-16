/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    const { number } = props
    var isPar = number % 2 === 0;
    return (
        <div>
            {
                // Parâmetro recebido realizando teste condicional para apresentar código 
                // resultado Html.
                
                isPar ? <span id='par'>Par {number}</span> : <span id='impar'>Impar {number}</span>
            }
        </div>
    );
};