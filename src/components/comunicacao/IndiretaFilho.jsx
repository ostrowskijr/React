/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
    const {infoPai} = props;
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    return (
        <div>
            <div>Filho</div>
            <button onClick={ (e)=> infoPai({'nome': 'Luis', 'idade' : gerarIdade, 'nerd': true}) }>
                Fornecer Info Pai
            </button>
        </div>
    );
};