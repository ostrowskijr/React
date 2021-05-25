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
    current: 0
};
export default class Calculador extends Component {
    state = { ...initialState };
    //
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.calculate = this.calculate.bind(this);
    };

    clearMemory() {
        this.setState({
            ...initialState
        });
    };

    addDigit(n) {
        if (n === '.' && this.state.value.includes('.')) {
            return;
        }
        const resetDisplay = this.state.value === '0' || this.state.resetDisplay;
        const currentValue = resetDisplay ? '' : this.state.value;
        const displayValue = currentValue + n;
        //
        const values = [...this.state.values];
        const current = this.state.current;
        values[current] = parseFloat(displayValue);
        this.setState({
            resetDisplay: false,
            value: displayValue,
            values: values
        });
    };

    setOperation(operation) {
        // Manipulando o primeiro valor do cálculo.
        if (this.state.current === 0) {
            this.setState({
                current: 1,
                resetDisplay: true,
                operation
            })
        } else {
            const equals = this.state.operation === '=';
            const values = [...this.state.values]
            const total = this.calculate(this.state.operation, values[0], values[1]);
            values[0] = total;
            this.setState({
                value: total,
                resetDisplay: true,
                operation: equals ? null : operation,
                current: !equals ? 0 : 1,
                values
            })
        }
    };

    calculate(operation, valueFisrt, valueSecond) {
        var newValue = 0;
        switch (operation) {
            case '+':
                newValue = valueFisrt + valueSecond;
                break;
            case '-':
                newValue = valueFisrt - valueSecond;
                break;
            case '*':
                newValue = valueFisrt * valueSecond;
                break;
            case '/':
                newValue = valueFisrt / valueSecond;
                break;
            default:
                break;
        }
        return parseFloat(newValue).toFixed(2);
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