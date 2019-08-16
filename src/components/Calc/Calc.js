import React, { Component } from 'react';

import './Calc.css'

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0'
    }
    this.handleClick = this.handleClick.bind(this);

  }

  
  buttons = [
    {symbol: '('},
    {symbol: ')'},
    {symbol: 'ac'},
    {symbol: 'c'},
    {symbol: '7'},
    {symbol: '8'},
    {symbol: '9'},
    {symbol: '/'},
    {symbol: '4'},
    {symbol: '5'},
    {symbol: '6'},
    {symbol: '*'},
    {symbol: '1'},
    {symbol: '2'},
    {symbol: '3'},
    {symbol: '-'},
    {symbol: '0'},
    {symbol: '.'},
    {symbol: 'root'},
    {symbol: '+'},
    {symbol: 'x2'},
    {symbol: 'xrooty'},
    {symbol: '='},
  ]

  handleClick(e) {
    const { result } = this.state;
    if (e.target.value === 'ac') {
      return this.setState({result: '0'});
    }
    if (e.target.value === 'c') {
      return this.setState({result: '0'});
    }
    if (e.target.value === '=') {
      try {
          let total = eval(`${result}`);
          return this.setState({ result: total });
      } catch(err) {
        return this.setState({result: 'NaN'})
      }
      
      
    }
    if ( result === '0') {
      if ( /\d/.test(e.target.value) ) {
        this.setState({result: e.target.value});
      } 
    } else {

      let newResult = String(result).concat(e.target.value);
      this.setState({ result: newResult });
    } 
    
  }

  render() {
    return (
      <div>
        <div className='input'>
          <input type="text" name="input1" readOnly />
          <input
            type="text"
            name="input2"
            readOnly
            placeholder="0"
            value={this.state.result}
          />
        </div>
        <div className='ButtonCont'>
          {this.buttons.map((el,index) => {
            return (
              <button key={index} onClick={this.handleClick} value={`${el.symbol}`} >{el.symbol}</button>
            )
          })}
       </div>
      </div>
    )
  }
  


}

export default Calc;