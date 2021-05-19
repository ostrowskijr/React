/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './Input.css'

export default (props) => {
    const [valor, setValor] = useState('Texto Inicial');
    //
    const setInputValue  = (e) => setValor(e.target.value);    
    return (
        <div style={{
            flex : 'flex',
            flexDirection : 'column'
        }}>
            <label htmlFor="valor">Campo Texto</label>
            {/* // Componente com estado */}
            <input type="text" className="input" value={valor} onChange={setInputValue} />
            {/* Componente sem estado, deve ser definido como undefined ou readOnly  */}
            <input type="text" className="input" value={valor} readOnly/>
        </div>
    );
};