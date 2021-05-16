/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import alunos from '../../data/alunos'

export default (props) => {
    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {
                   alunos.map((aluno) => {
                       return (
                        <li key={aluno.id}>
                            {aluno.id}) {aluno.nome} - {aluno.nota}
                        </li>
                       )                        
                    })
                }
            </ul>
        </div>
    );
};