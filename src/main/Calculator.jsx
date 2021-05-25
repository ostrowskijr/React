/* eslint-disable no-eval */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    value: '0',
    operation: null,
    resetDisplay: false,
    values: [0, 0],
    current : 0
};
export default class Calculador extends Component {
    state = { ...initialState };
    //
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);        
    };

    clearMemory() {
        this.setState({ 
            ...initialState 
        });
    };

    setOperation(operation) {
        if ((this.state.values[0] === 0 && this.state.values[1] === 0) || this.state.resetDisplay) {
            return;
        }        
        if ((this.state.values[0] && this.state.values[1] && this.state.operation) || operation === "=") {
            const total = eval(`${this.state.values[0]} ${this.state.operation} ${this.state.values[1]}`);
            var state = {};
            if (operation !== "=") {
                var values = [...this.state.values];
                values[0] = total;
                var current = 1;
                state = {
                    ...initialState,
                    resetDisplay : true,
                    value : total,
                    values,
                    current,
                    operation
                 };                 
            } else {
                state = {
                    ...initialState,
                    resetDisplay : true,
                    value : total
                };
            }
            this.setState(state);
        } else {
            this.setState({
                operation: operation,
                current : 1,
                resetDisplay : true
            });
        }        
    };

    addDigit(n) {
        if (n === '.' && this.state.value.includes('.')) {
            return;
        }
        const resetDisplay = this.state.value === '0' || this.state.resetDisplay;        
        const currentValue = resetDisplay ? '' : this.state.value;
        const displayValue = currentValue + n;
        if (n !== '.'){
            const values = [...this.state.values];
            const current = this.state.current;
            values[current] = displayValue;
            this.setState({
                resetDisplay : false,
                value: displayValue,
                values: values
            });
        }        
    };    

    render() {
        //
        return (
            <div className="calculator">
                <Display value={this.state.value}></Display>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        );
    }
}