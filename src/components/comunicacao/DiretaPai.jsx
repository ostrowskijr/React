/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DiretaFilho from './DiretaFilho';

export default (props) => {
    return (
        <div>
            <DiretaFilho nome='Luis' idade={34} bool={true}></DiretaFilho>
            <DiretaFilho nome='Isadora' idade={6} bool={false}></DiretaFilho>
        </div>
    );
};