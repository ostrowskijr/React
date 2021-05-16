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
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React!</h1>
            <div>
                {props.nome}
            </div>
            <hr />
            <div className="Cards">
                <Card titulo="#10 - Comunicação Indireta" color="#01DFD7">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#BDBDBD">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 - Renderização Condicional" color="#BFFF00">
                    <ParOuImpar number={2}/>
                    <UsuarioInfo usuario={{ 'nome' : 'Luis Ostrowski'}}/>                    
                </Card>
                <Card titulo="#07 - Desafio Repetições" color="#000FFF">
                    <TabelaProdutos/>
                </Card>
                <Card titulo="#06 - Repetições" color="#0F0099">
                    <ListaAlunos/>
                </Card>
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