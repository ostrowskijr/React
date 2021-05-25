/* eslint-disable no-eval */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculador extends Component {
    state = {
        value: 0,
        operation: null,
        valueFirst: null,
        valueSecond: null,
        reset: false
    };
    //
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    };

    async clearMemory() {
        this.setState({
            value: 0,
            reset : false
        });
    };

    setOperation(operation) {
        this.setState({
            operation: operation,
            value: 0
        });
        this.clearMemory();
    };

    async addDigit(n) {
        if (this.state.reset) await this.clearMemory();        
        let first = '';
        let second = ''
        let newValue = this.state.value === 0 ? n : this.state.value + n;

        //        
        this.state.operation == null ? first = newValue : first = this.state.valueFirst;
        this.state.operation != null ? second = newValue : second = this.state.valueSecond;
        this.setState({
            value: newValue,
            valueFirst: first,
            valueSecond: second            
        });
    };

    calculate() {
        let valueFirst = this.state.valueFirst;
        let valueSecond = this.state.valueSecond;
        let operation = this.state.operation;
        //        
        this.setState({
            value: eval(`${valueFirst} ${operation} ${valueSecond}`),
            operation: null,
            valueFirst: null,
            valueSecond: null,
            reset: true
        })
    };

    render() {
        //
        return (
            <div className="calculator">
                <Display value={this.state.value}></Display>
                <Button label="AC" triple click={() => this.clearMemory()} />
                <Button label="/" operation click={(e) => this.setOperation(e)} />
                <Button label="7" click={(e) => this.addDigit(e)} />
                <Button label="8" click={(e) => this.addDigit(e)} />
                <Button label="9" click={(e) => this.addDigit(e)} />
                <Button label="*" operation click={(e) => this.setOperation(e)} />
                <Button label="4" click={(e) => this.addDigit(e)} />
                <Button label="5" click={(e) => this.addDigit(e)} />
                <Button label="6" click={(e) => this.addDigit(e)} />
                <Button label="-" operation click={(e) => this.setOperation(e)} />
                <Button label="1" click={(e) => this.addDigit(e)} />
                <Button label="2" click={(e) => this.addDigit(e)} />
                <Button label="3" click={(e) => this.addDigit(e)} />
                <Button label="+" operation click={(e) => this.setOperation(e)} />
                <Button label="." click={(e) => this.addDigit(e)} />
                <Button label="=" operation double click={() => this.calculate()} />
            </div>
        );
    }
}