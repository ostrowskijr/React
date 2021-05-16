/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import If, { Else } from './If'

export default (props) => {
    const {usuario} = props;
    return (
        <div>
            <If condicional={usuario && usuario.nome}>
                <span>Seja Bem Vindo <strong>{usuario.nome}</strong></span>
                <Else>
                    <span>Seja Bem Vindo <strong>Usuário Anonimo!</strong></span>
                </Else>
            </If>            
        </div>
    );
};