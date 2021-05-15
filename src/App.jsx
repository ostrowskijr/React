/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'
// Importando componente do modulo.
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layouts/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'

export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React!</h1>
            <div>
                {props.nome}
            </div>
            <hr />
            <div className="Cards">
                <Card titulo="#05 - Componentes com Filhos" color="#F98">
                    <Familia sobrenome="Ostrowski">
                        <FamiliaMembro nome="Luis" />
                        <FamiliaMembro nome="Lisley" />
                        <FamiliaMembro nome="Isadora" />
                    </Familia>                    
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#09F">
                    <Aleatorio min={10} max={30}/>
                </Card>
                <Card titulo="#03 - Fragmento React">
                    <Fragmento/>
                </Card>
                <Card titulo="#02 - Desafio Com Parâmetro" color="#090">
                    {/* Utilizando parametro em nosso componente */}
                    <ComParametro titulo="Segundo Componente"
                        subtitulo="Muito Legal..."
                        aluno="Isadora Ostrowski"
                        nota={10} />
                </Card>
                <Card titulo="#01 - Primeiro Componente">
                    <Primeiro/>
                </Card>
            </div>            
        </div>
    );
};