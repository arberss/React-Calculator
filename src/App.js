import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstInput, setFirstInput] = useState('0');
  const [secondInput, setSecondInput] = useState('');
  const [operator, setOperator] = useState('');

  const getNumber = (num) => {
    if (num === '.' && firstInput.includes('.')) return;

    firstInput === '0' ? setFirstInput(num) : setFirstInput(firstInput + num);

    if (firstInput === '0' && num === '.') {
      setFirstInput('0' + num);
    }
  };

  {
    /* change color on click */
  }

  const targetColor = (e) => {
    let target = e.target;
    target.style.backgroundColor = '#fff';
    setTimeout(() => {
      target.style.backgroundColor = '#eee';
    }, 100);
  };

  const targetColorOpr = (e) => {
    let target = e.target;
    target.style.backgroundColor = 'rgb(248, 161, 55)';
    setTimeout(() => {
      target.style.backgroundColor = 'darkorange';
    }, 100);
  };

  {
    /* end change color on click */
  }

  const getOperator = (opr) => {
    if (firstInput === '') return;

    if (opr === '+') {
      setSecondInput(firstInput + opr);

      setFirstInput('0');
      setOperator(opr);

      dry(opr);
    }

    if (opr === '-') {
      setSecondInput(firstInput + opr);

      setFirstInput('0');
      setOperator(opr);

      dry(opr);
    }

    if (opr === '*') {
      setSecondInput(firstInput + opr);

      setFirstInput('0');
      setOperator(opr);

      dry(opr);
    }

    if (opr === '/') {
      setSecondInput(firstInput + opr);

      setFirstInput('0');
      setOperator(opr);

      dry(opr);
    }
  };

  function dry(opr) {
    if (operator === '+') {
      setSecondInput(parseFloat(secondInput) + parseFloat(firstInput) + opr);

      setFirstInput('0');
      setOperator(opr);
    } else if (operator === '-') {
      setSecondInput(parseFloat(secondInput) - parseFloat(firstInput) + opr);
      setFirstInput('0');
      setOperator(opr);
    } else if (operator === '*') {
      if (secondInput !== '' && firstInput === '0') {
        setFirstInput('0');
        setOperator(opr);
        setSecondInput(parseFloat(secondInput) + opr);
      } else {
        setSecondInput(parseFloat(secondInput) * parseFloat(firstInput) + opr);
        setFirstInput('0');
        setOperator(opr);
      }
    } else if (operator === '/') {
      if (secondInput !== '' && firstInput === '0') {
        setFirstInput('0');
        setOperator(opr);
        setSecondInput(parseFloat(secondInput) + opr);
      } else {
        setSecondInput(parseFloat(secondInput) / parseFloat(firstInput) + opr);
        setFirstInput('0');
        setOperator(opr);
      }
    }
  }

  const calculate = () => {
    firstInput.toString();

    if (secondInput === '' || (secondInput !== '' && firstInput === '')) return;

    if (operator === '+') {
      setFirstInput(
        (parseFloat(secondInput) + parseFloat(firstInput)).toString()
      );
    } else if (operator === '-') {
      setFirstInput(
        (parseFloat(secondInput) - parseFloat(firstInput)).toString()
      );
    } else if (operator === '*') {
      setFirstInput(
        (parseFloat(secondInput) * parseFloat(firstInput)).toString()
      );
    } else if (operator === '/') {
      setFirstInput(
        (parseFloat(secondInput) / parseFloat(firstInput)).toString()
      );
    }
    setSecondInput('');
    setOperator('');
  };

  const del = () => {
    setFirstInput(firstInput.toString().slice(0, -1));
  };

  const clearOpr = () => {
    setFirstInput('0');
    setSecondInput('');
    setOperator('');
  };

  return (
    <div className='content'>
      <div className='inputs'>
        <div className='second-input'>{secondInput}</div>
        <div className='first-input'>{firstInput}</div>
      </div>
      <div className='buttons'>
        <button
          className='btn clear'
          onClick={(e) => {
            clearOpr();
            targetColor(e);
          }}
        >
          AC
        </button>
        <button
          className='btn'
          onClick={(e) => {
            del();
            targetColor(e);
          }}
        >
          Del
        </button>
        <button
          className='btn operator'
          onClick={(e) => {
            getOperator('/');
            targetColorOpr(e);
          }}
        >
          /
        </button>
      </div>
      <div className='buttons'>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('7');
            targetColor(e);
          }}
        >
          7
        </button>
        <button
          className='btn'
          onClick={(e) => {
            {
              getNumber('8');
              targetColor(e);
            }
          }}
        >
          8
        </button>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('9');
            targetColor(e);
          }}
        >
          9
        </button>
        <button
          className='btn operator'
          onClick={(e) => {
            getOperator('*');
            targetColorOpr(e);
          }}
        >
          X
        </button>
      </div>
      <div className='buttons'>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('4');
            targetColor(e);
          }}
        >
          4
        </button>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('5');
            targetColor(e);
          }}
        >
          5
        </button>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('6');
            targetColor(e);
          }}
        >
          6
        </button>
        <button
          className='btn operator'
          onClick={(e) => {
            getOperator('-');
            targetColorOpr(e);
          }}
        >
          -
        </button>
      </div>
      <div className='buttons'>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('1');
            targetColor(e);
          }}
        >
          1
        </button>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('2');
            targetColor(e);
          }}
        >
          2
        </button>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('3');
            targetColor(e);
          }}
        >
          3
        </button>
        <button
          className='btn operator'
          onClick={(e) => {
            getOperator('+');
            targetColorOpr(e);
          }}
        >
          +
        </button>
      </div>
      <div className='buttons'>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('0');
            targetColor(e);
          }}
        >
          0
        </button>
        <button
          className='btn'
          onClick={(e) => {
            getNumber('.');
            targetColor(e);
          }}
        >
          .
        </button>
        <button
          className='btn equal operator'
          onClick={(e) => {
            calculate();
            targetColorOpr(e);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
