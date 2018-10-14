import React, { Component } from 'react';

class CurrentcyInput extends Component {
    render () {
        const currencyOptions = this.props.currencies.map(currency => {
            return <option key={currency.id} value={currency.id}>{currency.name}</option>
        })
        return (
            <div>
                <input 
                    id={this.props.inputName}
                    type='number' 
                    value={this.props.value}
                    onChange={this.props.changeAmount}
                ></input>
                <select 
                    id={this.props.currencyIdName}
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
            input1 : 0,
            input2 : 0,
            currencyId1 :1,
            currencyId2 :2,
            currencies : [
                {
                    id: 1,
                    name: 'Dollar',
                    rate: 1
                },
                {
                    id: 2,
                    name: 'Euro',
                    rate: 0.8
                },
                {
                    id: 3,
                    name: 'Yen',
                    rate: 2.4
                },
                {
                    id: 4,
                    name: 'Frank',
                    rate: 0.3
                }
            ]
        } 
    }
    convert1 = (value, currencyId) => {
            value = parseFloat(value)
            const currency = this.state.currencies.find(currency => currency.id == currencyId)
            const currencyRate = currency.rate
            console.log(currencyRate)
            // TODO: First to Dollar
            return  value * currencyRate

    }

    convert2 = (value, currencyId) => {
        value = parseFloat(value)
        const currency = this.state.currencies.find(currency => currency.id == currencyId)
        const currencyRate = currency.rate
        console.log(currencyRate)
        // TODO: First to Dollar
        return  value / currencyRate

}

    changeCurrency1 = (event) => {
        const value = event.target.value
        this.setState({
            currencyId1:value,
            input2: this.convert2(this.state.input1, value)
        })

    }

    changeCurrency2 = (event) => {
        const value = event.target.value
        this.setState({
            currencyId2: value,
            input1: this.convert1(this.state.input2, value)
        })

    }

    changeAmount1 = (event) => {
        const value = parseFloat(event.target.value)
        this.setState({
            input1: value,
            input2: this.convert1(value, this.state.currencyId2)
        })
    }

    changeAmount2 = (event) => {
        const value = parseFloat(event.target.value)
        this.setState({
            input2: value,
            input1: this.convert2(value, this.state.currencyId2)
        })
    }

    render () {
        return (
            <div className='currency_calculator'>
                <CurrentcyInput
                    currencies={this.state.currencies}
                    value={this.state.input1}
                    selectedCurrency={this.state.currencyId1}
                    changeCurrency={this.changeCurrency1}
                    changeAmount={this.changeAmount1}
                />
                <CurrentcyInput 
                    currencies={this.state.currencies}
                    value={this.state.input2}
                    selectedCurrency={this.state.currencyId2}
                    changeCurrency={this.changeCurrency2}
                    changeAmount={this.changeAmount2}
                />
            </div>
        )
    }
}

export default CurrencyCalculator;