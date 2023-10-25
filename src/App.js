import logo from './logo.svg';
import './App.css';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from 'react';


function App() {

const [number, setNumber] = useState('');
const [checked, setChecked] = useState(false);


const handleChange = (event) => {
  setChecked(event.target.checked);
};

const themeClass = checked ? 'dark-theme' : 'light-theme';


function handleNumberClick(input) {
  if (number === undefined) {
    setNumber(input.toString());  
  } else {
    setNumber(number + input.toString());  
  }
};

function handlePlusClick() {
  setNumber(number + ' + ');
}

function handleMinusClick() {
  setNumber(number + ' - ');
}

function handleMultiplicationClick() {
  setNumber(number + ' x ');
}

function handleDivideClick() {
  setNumber(number + ' / ');
}

function handlePointClick() {
  setNumber(number + '.');
}



function handleEqualClick() {
  if (typeof number === 'string') {
    const myArray = number.split(' ');
    let result = '';

    if (myArray[1] === '+') {
      result = Number(myArray[0]) + Number(myArray[2])
    } else if (myArray[1] === '-') {
      result = Number(myArray[0]) - Number(myArray[2])
    } else if (myArray[1] === 'x') {
      result = Number(myArray[0]) * Number(myArray[2])
    } else if (myArray[1] === '/') {
      result = Number(myArray[0]) / Number(myArray[2])
    }
    setNumber(result.toString()) ;
    console.log(result);
  }
}




function handleResetClick() {
  setNumber();
}

function handleDeleteClick() {
  const myArray = number.split(' ');
  myArray.pop();
  myArray.push('');
  setNumber(myArray.join(' '));
  console.log(myArray);
}


function check() {
  return (
    number?.includes('+') || number?.includes('-') || number?.includes('/') || number?.includes('x')
  );
}

const buttonDisabledStyle = {
 backgroundColor: 'hsl(30, 25%, 89%)',
 cursor: 'not-allowed',
};


  return (
    <div className={`alltogether ${themeClass}`}>
      <div className='switch'>
        <h2>calc</h2> 
        <div className='themes'>
          <div className='texttheme'>THEME</div>
          <div className='oneortwo'>
            <div className='oneortwonumbers'>
              <span>1</span>
              <span>2</span>
            </div>
            <div className='toggle'><Switch type='checkbox' className="theme-switch__input" color="primary" checked={checked} onChange={handleChange}/></div>
          </div>  
        </div>
      </div>
       <div className='number'>{number}</div>
       <div className='buttons'>
          <div className='firstrow'>
            <button className='seven' onClick={function() {handleNumberClick(7)}}>7</button>
            <button className='eight' onClick={function() {handleNumberClick(8)}}>8</button>
            <button className='nine' onClick={function() {handleNumberClick(9)}}>9</button>
            <button className='delete' onClick={handleDeleteClick}>DEL</button>
          </div>
          <div className='secondrow'>
            <button className='four' onClick={function() {handleNumberClick(4)}}>4</button>
            <button className='five' onClick={function() {handleNumberClick(5)}}>5</button>
            <button className='six' onClick={function() {handleNumberClick(6)}}>6</button>
            <button className='plus' onClick={handlePlusClick} disabled={check()} style={check() ? buttonDisabledStyle : undefined}>+</button>
          </div>
          <div className='thirdrow'>
            <button className='one' onClick={function() {handleNumberClick(1)}}>1</button>
            <button className='two' onClick={function() {handleNumberClick(2)}}>2</button>
            <button className='three' onClick={function() {handleNumberClick(3)}}>3</button>
            <button className='minus' onClick={handleMinusClick} disabled={check()} style={check() ? buttonDisabledStyle : undefined}>-</button>
          </div>
          <div className='fourthrow'>
            <button className='point' onClick={handlePointClick}>.</button>
            <button className='zero' onClick={function() {handleNumberClick(0)}}>0</button>
            <button className='slash' onClick={handleDivideClick} disabled={check()} style={check() ? buttonDisabledStyle : undefined}>/</button>
            <button className='multiplication' onClick={handleMultiplicationClick} disabled={check()} style={check() ? buttonDisabledStyle : undefined}>x</button>
          </div>
          <div className='fifthrow'>
            <button className='reset' onClick={handleResetClick}>RESET</button>
            <button className='equal' onClick={handleEqualClick}>=</button>
          </div>
        </div>    
    </div>
  );
}

export default App;
