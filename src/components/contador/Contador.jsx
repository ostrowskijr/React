/* eslint-disable import/no-anonymous-default-export */
import './Contador.css'
import React, { Component } from 'react';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contator extends Component {
    state = {
        numero: this.props.numeroInicial || 10,
        passo: this.props.passo || 5
    };
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    };
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    };
    setPasso = (passo) => {
        this.setState({
            passo: passo
        })
    };
    render() {
        return (
            <div className="Contador">
                <h1>Contador</h1>
                {/* Comunição direta componente pai alterando dado do filho via props. */}
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        );
    }
};

export default Contator;