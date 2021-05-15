/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement } from 'react';

export default (props) => {
    const {children} = props;
    return (
        <div>
            {/* cloneElement clona o elemento filho e podemos passar as propriedades do componente pai para o filho */}
            {
                // Mapear todos os filhos com os seus parâmetros dos componentes pais para os Filhos.
                children.map((child, index) => {
                    return cloneElement(child, {...props, key : index})
                })
            }            
        </div>
    );
};