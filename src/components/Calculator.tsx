import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Plus, Minus, X, Divide, Percent, RotateCcw, Equal, Square, ChevronsUp, Function } from 'lucide-react';

interface CalculatorProps {
  theme: 'light' | 'dark';
}

const Calculator: React.FC<CalculatorProps> = ({ theme }) => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const buttonClass = `w-16 h-16 m-1 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
    theme === 'light'
      ? 'bg-white text-gray-800 hover:bg-gray-200'
      : 'bg-gray-800 text-white hover:bg-gray-700'
  }`;

  const operationClass = `${buttonClass} bg-gradient-to-r from-neon-blue to-neon-pink text-white hover:from-neon-pink hover:to-neon-blue animate-pulse-neon`;

  const handleNumberClick = (num: string) => {
    setDisplay(prev => (prev === '0' ? num : prev + num));
  };

  const handleOperationClick = (op: string) => {
    setOperation(op);
    setMemory(parseFloat(display));
    setDisplay('0');
  };

  const handleEquals = () => {
    if (memory !== null && operation) {
      const current = parseFloat(display);
      let result: number;

      switch (operation) {
        case '+':
          result = memory + current;
          break;
        case '-':
          result = memory - current;
          break;
        case '*':
          result = memory * current;
          break;
        case '/':
          result = memory / current;
          break;
        case '%':
          result = memory % current;
          break;
        case '^':
          result = Math.pow(memory, current);
          break;
        case 'sqrt':
          result = Math.sqrt(memory);
          break;
        case 'log':
          result = Math.log(memory) / Math.log(current);
          break;
        default:
          return;
      }

      setDisplay(result.toFixed(8).replace(/\.?0+$/, ''));
      setMemory(null);
      setOperation(null);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setMemory(null);
    setOperation(null);
  };

  const handleAdvancedOperation = (op: string) => {
    const current = parseFloat(display);
    let result: number;

    switch (op) {
      case 'square':
        result = current * current;
        break;
      case 'sqrt':
        result = Math.sqrt(current);
        break;
      case 'log':
        result = Math.log10(current);
        break;
      default:
        return;
    }

    setDisplay(result.toFixed(8).replace(/\.?0+$/, ''));
  };

  return (
    <div className={`p-6 rounded-3xl shadow-2xl ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <div className={`mb-4 p-4 rounded-2xl text-right text-4xl font-bold ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-white'}`}>
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button className={buttonClass} onClick={handleClear}><RotateCcw size={24} /></button>
        <button className={buttonClass} onClick={() => handleAdvancedOperation('square')}><Square size={24} /></button>
        <button className={buttonClass} onClick={() => handleAdvancedOperation('sqrt')}>&radic;</button>
        <button className={operationClass} onClick={() => handleOperationClick('/')}><Divide size={24} /></button>
        
        <button className={buttonClass} onClick={() => handleNumberClick('7')}>7</button>
        <button className={buttonClass} onClick={() => handleNumberClick('8')}>8</button>
        <button className={buttonClass} onClick={() => handleNumberClick('9')}>9</button>
        <button className={operationClass} onClick={() => handleOperationClick('*')}><X size={24} /></button>
        
        <button className={buttonClass} onClick={() => handleNumberClick('4')}>4</button>
        <button className={buttonClass} onClick={() => handleNumberClick('5')}>5</button>
        <button className={buttonClass} onClick={() => handleNumberClick('6')}>6</button>
        <button className={operationClass} onClick={() => handleOperationClick('-')}><Minus size={24} /></button>
        
        <button className={buttonClass} onClick={() => handleNumberClick('1')}>1</button>
        <button className={buttonClass} onClick={() => handleNumberClick('2')}>2</button>
        <button className={buttonClass} onClick={() => handleNumberClick('3')}>3</button>
        <button className={operationClass} onClick={() => handleOperationClick('+')}><Plus size={24} /></button>
        
        <button className={buttonClass} onClick={() => handleNumberClick('0')}>0</button>
        <button className={buttonClass} onClick={() => handleNumberClick('.')}>.</button>
        <button className={buttonClass} onClick={() => handleOperationClick('^')}><ChevronsUp size={24} /></button>
        <button className={operationClass} onClick={handleEquals}><Equal size={24} /></button>
      </div>
    </div>
  );
};

export default Calculator;