import React, { Component } from 'react';

class CurrentcyInput extends Component {
    render () {
        const currencyOptions = this.props.currencies.map(currency => {
            return <option key={currency.id} value={currency.id}>{currency.name}</option>
        })
        return (
            <div>
                <input 
                    type='number' 
                    value={this.props.value}
                    onChange={this.props.changeAmount}
                ></input>
                <select 
                    value={this.props.selectedCurrency}
                    onChange={this.props.changeCurrency}
                >
                    {currencyOptions}
                </select>
            </div>
        )
    }
}

class CurrencyCalculator extends Component {
    constructor () {
        super();
        this.state = {
            input1 : {
                value : 0,
                currencyId : 1
            },
            input2 : {
                value: 0,
                currencyId : 2
            },
            currencies : [
                {
                    id: 1,
                    name: 'Dollar',
                    rate: 1
                },
                {
                    id: 2,
                    name: 'Euro',
                    rate: 0.86
                },
                {
                    id: 3,
                    name: 'Yen',
                    rate: 112.21
                },
                {
                    id: 4,
                    name: 'Bitcoin',
                    rate: 0.00016
                },
                {
                    id:5,
                    name: 'Yuan',
                    rate: 6.92
                }
            ]
        } 
    }

    getCurrencyRateById = (id) => {
        const currency = this.state.currencies.find(currency => currency.id === parseInt(id))
        console.log(currency)
        return (currency.rate)? currency.rate : 1
    }

    convert = (from, to) => {
        const dollarValue = from.value / this.getCurrencyRateById(from.currencyId)
        to.value = dollarValue * this.getCurrencyRateById(to.currencyId)
        return to
    }

    changeCurrency1 = (event) => {
        // Copy state Use a spread function otherwise you change state without setState
        const input1 = {...this.state.input1}
        const input2 = {...this.state.input2}
        input1.currencyId = parseInt(event.target.value)
        this.setState({
            input1: input1,
            input2: this.convert(input1, input2)
        })
    }

    changeCurrency2 = (event) => {
        // Copy state Use a spread function otherwise you change state without setState
        const input1 = {...this.state.input1}
        const input2 = {...this.state.input2}
        input2.currencyId = parseInt(event.target.value)
        this.setState({
            input1: this.convert(input2, input1),
            input2: input2
        })
    }

    changeAmount1 = (event) => {
        // Copy state Use a spread function otherwise you change state without setState
        const input1 = {...this.state.input1}
        const input2 = {...this.state.input2}
        input1.value = parseFloat(event.target.value === null? 0:event.target.value)
        this.setState({
            input1: input1,
            input2: this.convert(input1, input2)
        })
    }

    changeAmount2 = (event) => {
        // Copy state Use a spread function otherwise you change state without setState
        const input1 = {...this.state.input1}
        const input2 = {...this.state.input2}
        input2.value = parseFloat(event.target.value === null? 0:event.target.value)
        this.setState({
            input1: this.convert(input2, input1),
            input2: input2
        })
    }

    render () {
        return (
            <div className='currency_calculator'>
                <h1>Currency converter</h1>
                <CurrentcyInput
                    currencies={this.state.currencies}
                    value={this.state.input1.value}
                    selectedCurrency={this.state.input1.currencyId}
                    changeCurrency={this.changeCurrency1}
                    changeAmount={this.changeAmount1}
                />
                <CurrentcyInput 
                    currencies={this.state.currencies}
                    value={this.state.input2.value}
                    selectedCurrency={this.state.input2.currencyId}
                    changeCurrency={this.changeCurrency2}
                    changeAmount={this.changeAmount2}
                />
            </div>
        )
    }
}

export default CurrencyCalculator;