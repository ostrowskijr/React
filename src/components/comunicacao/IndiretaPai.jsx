/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {
    // useState seta estado do objeto, o mesmo retorna um array de 2 posições a 
    // 1-É o valor do dado e a 2-É o nome da função para setar o valor
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
    //
    // Função para receber dados enviados pelo componente filho    
    function enviarInformacoes(params){
        setNome(params.nome);
        setIdade(params.idade);
        setNerd(params.nerd);
    };
    //
    return (
        <div>
            <div>Pai</div>
            <div>
                <ul style={{listStyle: "none"}}>
                    <li><strong>Nome:</strong> {nome}</li>
                    <li><strong>Idade:</strong> {idade}</li>
                    <li><strong>Nerd:</strong> {nerd ? 'Verdadeiro' : 'Falso'}</li>
                </ul>
            </div>
            {/* A função enviarInformacoes é passada para o componente filho via props. */}
            <IndiretaFilho infoPai={enviarInformacoes}></IndiretaFilho>
        </div>
    );
};