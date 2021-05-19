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
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Megasena from './components/megasena/Megasena';

export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React!</h1>
            <div>
                {props.nome}
            </div>
            <hr />
            <div className="Cards">
                <Card titulo="#13 - Mega-Sena" color="#01DF3A">
                    <Megasena/>
                </Card>
                <Card titulo="#12 - Contador" color="#81DAF5">
                    <Contador numeroInicial={10}></Contador>                
                </Card>
                <Card titulo="#11 - Componenete Controlado (Input)" color="#A9BCF5">
                    <Input></Input>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#B40431">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#F7819F">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 - Renderização Condicional" color="#FA58D0">
                    <ParOuImpar number={2}/>
                    <UsuarioInfo usuario={{ 'nome' : 'Luis Ostrowski'}}/>                    
                </Card>
                <Card titulo="#07 - Desafio Repetições" color="#F3F781">
                    <TabelaProdutos/>
                </Card>
                <Card titulo="#06 - Repetições" color="#FAAC58">
                    <ListaAlunos/>
                </Card>
                <Card titulo="#05 - Componentes com Filhos" color="#FF8000">
                    <Familia sobrenome="Ostrowski">
                        <FamiliaMembro nome="Luis" />
                        <FamiliaMembro nome="Lisley" />
                        <FamiliaMembro nome="Isadora" />
                    </Familia>                    
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#0404B4">
                    <Aleatorio min={10} max={30}/>
                </Card>
                <Card titulo="#03 - Fragmento React">
                    <Fragmento/>
                </Card>
                <Card titulo="#02 - Desafio Com Parâmetro" color="#6E6E6E">
                    {/* Utilizando parametro em nosso componente */}
                    <ComParametro titulo="Segundo Componente"
                        subtitulo="Muito Legal..."
                        aluno="Isadora Ostrowski"
                        nota={10} />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#393B0B">
                    <Primeiro/>
                </Card>
            </div>            
        </div>
    );
};