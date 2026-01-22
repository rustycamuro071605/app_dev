import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [memory, setMemory] = useState(0);
  const [isScientificMode, setIsScientificMode] = useState(false);
  const [calculationHistory, setCalculationHistory] = useState([]);

  // Advanced mathematical functions
  const mathFunctions = {
    sin: (x) => Math.sin(x * Math.PI / 180),
    cos: (x) => Math.cos(x * Math.PI / 180),
    tan: (x) => Math.tan(x * Math.PI / 180),
    log: (x) => Math.log10(x),
    ln: (x) => Math.log(x),
    sqrt: (x) => Math.sqrt(x),
    square: (x) => x * x,
    cube: (x) => x * x * x,
    pow: (x, y) => Math.pow(x, y),
    factorial: (x) => {
      if (x < 0) return NaN;
      if (x === 0 || x === 1) return 1;
      let result = 1;
      for (let i = 2; i <= x; i++) {
        result *= i;
      }
      return result;
    },
    pi: () => Math.PI,
    e: () => Math.E
  };

  const handleNumberPress = (number) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(number));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(number) : displayValue + number);
    }
  };

  const handleDecimalPress = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleOperatorPress = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
      setPreviousValue(`${inputValue} ${nextOperator}`);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
      setPreviousValue(`${result} ${nextOperator}`);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);
    
    if (firstOperand === null || operator === null) return inputValue;

    let result;
    switch (operator) {
      case '+':
        result = firstOperand + inputValue;
        break;
      case '-':
        result = firstOperand - inputValue;
        break;
      case '×':
        result = firstOperand * inputValue;
        break;
      case '÷':
        result = firstOperand / inputValue;
        break;
      case '^':
        result = Math.pow(firstOperand, inputValue);
        break;
      case 'mod':
        result = firstOperand % inputValue;
        break;
      default:
        result = inputValue;
    }

    // Add to history
    const calculation = `${firstOperand} ${operator} ${inputValue} = ${result}`;
    setCalculationHistory(prev => [calculation, ...prev.slice(0, 4)]);
    
    return result;
  };

  const handleEqualsPress = () => {
    const result = performCalculation();
    setDisplayValue(String(result));
    setPreviousValue('');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setPreviousValue('');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleAllClearPress = () => {
    setDisplayValue('0');
    setPreviousValue('');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setMemory(0);
    setCalculationHistory([]);
  };

  const handleToggleSign = () => {
    if (displayValue !== '0') {
      setDisplayValue(displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue);
    }
  };

  const handlePercentage = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value / 100));
  };

  // Scientific functions
  const handleScientificFunction = (funcName) => {
    const value = parseFloat(displayValue);
    let result;

    switch (funcName) {
      case 'sin':
        result = mathFunctions.sin(value);
        break;
      case 'cos':
        result = mathFunctions.cos(value);
        break;
      case 'tan':
        result = mathFunctions.tan(value);
        break;
      case 'log':
        result = mathFunctions.log(value);
        break;
      case 'ln':
        result = mathFunctions.ln(value);
        break;
      case 'sqrt':
        result = mathFunctions.sqrt(value);
        break;
      case 'square':
        result = mathFunctions.square(value);
        break;
      case 'cube':
        result = mathFunctions.cube(value);
        break;
      case 'factorial':
        result = mathFunctions.factorial(Math.floor(value));
        break;
      case 'pi':
        result = mathFunctions.pi();
        break;
      case 'e':
        result = mathFunctions.e();
        break;
      case '1/x':
        result = 1 / value;
        break;
      case '10^x':
        result = Math.pow(10, value);
        break;
      case 'e^x':
        result = Math.exp(value);
        break;
      default:
        result = value;
    }

    setDisplayValue(String(isNaN(result) ? 'Error' : result));
    setWaitingForSecondOperand(true);
  };

  // Memory functions
  const handleMemoryStore = () => {
    setMemory(parseFloat(displayValue));
  };

  const handleMemoryRecall = () => {
    setDisplayValue(String(memory));
    setWaitingForSecondOperand(true);
  };

  const handleMemoryAdd = () => {
    setMemory(memory + parseFloat(displayValue));
  };

  const handleMemorySubtract = () => {
    setMemory(memory - parseFloat(displayValue));
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  // Backspace function
  const handleBackspace = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };

  // Toggle scientific mode
  const toggleScientificMode = () => {
    setIsScientificMode(!isScientificMode);
  };

  const Button = ({ title, onPress, style, textStyle, onLongPress }) => (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={500}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header with mode toggle */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={toggleScientificMode} 
          style={[styles.modeButton, 
                  isScientificMode ? styles.scientificModeButton : styles.basicModeButton,
                  isScientificMode && styles.scientificModeActive]}
          activeOpacity={0.8}
        >
          <Text style={styles.modeButtonText}>
            {isScientificMode ? 'SCIENTIFIC' : 'BASIC'}
          </Text>
        </TouchableOpacity>
        <View style={styles.indicatorsContainer}>
          <Text style={styles.memoryIndicator}>{memory !== 0 ? 'M' : ''}</Text>
          <Text style={styles.modeIndicator}>
            {isScientificMode ? '🔬' : '🔢'}
          </Text>
        </View>
      </View>

      {/* Display with history */}
      <View style={styles.displayContainer}>
        {previousValue ? (
          <Text style={styles.previousText}>{previousValue}</Text>
        ) : null}
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      
      {/* History panel */}
      {calculationHistory.length > 0 && (
        <ScrollView horizontal style={styles.historyPanel}>
          {calculationHistory.map((calc, index) => (
            <Text key={index} style={styles.historyText}>{calc}</Text>
          ))}
        </ScrollView>
      )}
      
      <View style={styles.buttonContainer}>
        {isScientificMode ? (
          // Scientific Mode Layout
          <>
            {/* Row 1 - Memory Functions */}
            <View style={styles.row}>
              <Button title="MC" onPress={handleMemoryClear} style={styles.memoryButton} textStyle={styles.memoryButtonText} />
              <Button title="MR" onPress={handleMemoryRecall} style={styles.memoryButton} textStyle={styles.memoryButtonText} />
              <Button title="M+" onPress={handleMemoryAdd} style={styles.memoryButton} textStyle={styles.memoryButtonText} />
              <Button title="M-" onPress={handleMemorySubtract} style={styles.memoryButton} textStyle={styles.memoryButtonText} />
              <Button title="MS" onPress={handleMemoryStore} style={styles.memoryButton} textStyle={styles.memoryButtonText} />
            </View>
            
            {/* Row 2 - Scientific Functions 1 */}
            <View style={styles.row}>
              <Button title="sin" onPress={() => handleScientificFunction('sin')} style={styles.scientificButton} />
              <Button title="cos" onPress={() => handleScientificFunction('cos')} style={styles.scientificButton} />
              <Button title="tan" onPress={() => handleScientificFunction('tan')} style={styles.scientificButton} />
              <Button title="π" onPress={() => handleScientificFunction('pi')} style={styles.scientificButton} />
              <Button title="e" onPress={() => handleScientificFunction('e')} style={styles.scientificButton} />
            </View>
            
            {/* Row 3 - Scientific Functions 2 */}
            <View style={styles.row}>
              <Button title="log" onPress={() => handleScientificFunction('log')} style={styles.scientificButton} />
              <Button title="ln" onPress={() => handleScientificFunction('ln')} style={styles.scientificButton} />
              <Button title="√" onPress={() => handleScientificFunction('sqrt')} style={styles.scientificButton} />
              <Button title="x²" onPress={() => handleScientificFunction('square')} style={styles.scientificButton} />
              <Button title="x³" onPress={() => handleScientificFunction('cube')} style={styles.scientificButton} />
            </View>
            
            {/* Row 4 - Scientific Functions 3 */}
            <View style={styles.row}>
              <Button title="x!" onPress={() => handleScientificFunction('factorial')} style={styles.scientificButton} />
              <Button title="1/x" onPress={() => handleScientificFunction('1/x')} style={styles.scientificButton} />
              <Button title="10ˣ" onPress={() => handleScientificFunction('10^x')} style={styles.scientificButton} />
              <Button title="eˣ" onPress={() => handleScientificFunction('e^x')} style={styles.scientificButton} />
              <Button title="^" onPress={() => handleOperatorPress('^')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            </View>
            
            {/* Row 5 - Basic Operations */}
            <View style={styles.row}>
              <Button title="AC" onPress={handleAllClearPress} style={styles.clearButton} textStyle={styles.clearButtonText} />
              <Button title="⌫" onPress={handleBackspace} style={styles.functionButton} textStyle={styles.functionButtonText} />
              <Button title="%" onPress={handlePercentage} style={styles.functionButton} textStyle={styles.functionButtonText} />
              <Button title="÷" onPress={() => handleOperatorPress('÷')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
              <Button title="mod" onPress={() => handleOperatorPress('mod')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            </View>
            
            {/* Rows 6-10 - Numbers and Operators */}
            <View style={styles.row}>
              <Button title="7" onPress={() => handleNumberPress(7)} style={styles.numberButton} />
              <Button title="8" onPress={() => handleNumberPress(8)} style={styles.numberButton} />
              <Button title="9" onPress={() => handleNumberPress(9)} style={styles.numberButton} />
              <Button title="×" onPress={() => handleOperatorPress('×')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
              <Button title="(" onPress={() => {}} style={styles.parenthesisButton} />
            </View>
            
            <View style={styles.row}>
              <Button title="4" onPress={() => handleNumberPress(4)} style={styles.numberButton} />
              <Button title="5" onPress={() => handleNumberPress(5)} style={styles.numberButton} />
              <Button title="6" onPress={() => handleNumberPress(6)} style={styles.numberButton} />
              <Button title="-" onPress={() => handleOperatorPress('-')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
              <Button title=")" onPress={() => {}} style={styles.parenthesisButton} />
            </View>
            
            <View style={styles.row}>
              <Button title="1" onPress={() => handleNumberPress(1)} style={styles.numberButton} />
              <Button title="2" onPress={() => handleNumberPress(2)} style={styles.numberButton} />
              <Button title="3" onPress={() => handleNumberPress(3)} style={styles.numberButton} />
              <Button title="+" onPress={() => handleOperatorPress('+')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
              <Button title="=" onPress={handleEqualsPress} style={[styles.equalsButton, styles.tallButton]} textStyle={styles.equalsButtonText} />
            </View>
            
            <View style={styles.row}>
              <Button title="±" onPress={handleToggleSign} style={styles.functionButton} textStyle={styles.functionButtonText} />
              <Button title="0" onPress={() => handleNumberPress(0)} style={[styles.numberButton, styles.zeroButton]} />
              <Button title="." onPress={handleDecimalPress} style={styles.numberButton} />
            </View>
          </>
        ) : (
          // Basic Mode Layout
          <>
            {/* Row 1 */}
            <View style={styles.row}>
              <Button title="AC" onPress={handleAllClearPress} style={styles.clearButton} textStyle={styles.clearButtonText} onLongPress={handleAllClearPress} />
              <Button title="±" onPress={handleToggleSign} style={styles.functionButton} textStyle={styles.functionButtonText} />
              <Button title="%" onPress={handlePercentage} style={styles.functionButton} textStyle={styles.functionButtonText} />
              <Button title="÷" onPress={() => handleOperatorPress('÷')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            </View>
            
            {/* Row 2 */}
            <View style={styles.row}>
              <Button title="7" onPress={() => handleNumberPress(7)} style={styles.numberButton} />
              <Button title="8" onPress={() => handleNumberPress(8)} style={styles.numberButton} />
              <Button title="9" onPress={() => handleNumberPress(9)} style={styles.numberButton} />
              <Button title="×" onPress={() => handleOperatorPress('×')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            </View>
            
            {/* Row 3 */}
            <View style={styles.row}>
              <Button title="4" onPress={() => handleNumberPress(4)} style={styles.numberButton} />
              <Button title="5" onPress={() => handleNumberPress(5)} style={styles.numberButton} />
              <Button title="6" onPress={() => handleNumberPress(6)} style={styles.numberButton} />
              <Button title="-" onPress={() => handleOperatorPress('-')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            </View>
            
            {/* Row 4 */}
            <View style={styles.row}>
              <Button title="1" onPress={() => handleNumberPress(1)} style={styles.numberButton} />
              <Button title="2" onPress={() => handleNumberPress(2)} style={styles.numberButton} />
              <Button title="3" onPress={() => handleNumberPress(3)} style={styles.numberButton} />
              <Button title="+" onPress={() => handleOperatorPress('+')} style={styles.operatorButton} textStyle={styles.operatorButtonText} />
            </View>
            
            {/* Row 5 */}
            <View style={styles.row}>
              <Button title="0" onPress={() => handleNumberPress(0)} style={[styles.numberButton, styles.zeroButton]} />
              <Button title="." onPress={handleDecimalPress} style={styles.numberButton} />
              <Button title="=" onPress={handleEqualsPress} style={styles.equalsButton} textStyle={styles.equalsButtonText} />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  modeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 80,
    alignItems: 'center',
  },
  basicModeButton: {
    backgroundColor: '#a6a6a6',
  },
  scientificModeButton: {
    backgroundColor: '#ff9f0a',
  },
  modeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memoryIndicator: {
    color: '#ff9f0a',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  modeIndicator: {
    fontSize: 20,
  },
  scientificModeActive: {
    transform: [{ scale: 1.05 }],
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  previousText: {
    fontSize: 24,
    color: '#aaa',
    fontWeight: '200',
    marginBottom: 10,
  },
  displayText: {
    fontSize: 80,
    color: '#fff',
    fontWeight: '200',
  },
  historyPanel: {
    maxHeight: 60,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  historyText: {
    color: '#aaa',
    fontSize: 14,
    marginRight: 20,
    paddingVertical: 5,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
  },
  numberButton: {
    backgroundColor: '#333',
  },
  functionButton: {
    backgroundColor: '#a6a6a6',
  },
  functionButtonText: {
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#ff9f0a',
  },
  operatorButtonText: {
    color: '#fff',
  },
  equalsButton: {
    backgroundColor: '#ff9f0a',
  },
  equalsButtonText: {
    color: '#fff',
  },
  zeroButton: {
    width: 150,
    borderRadius: 35,
  },
  tallButton: {
    height: 150,
  },
  clearButton: {
    backgroundColor: '#ff3b30',
  },
  clearButtonText: {
    color: '#fff',
  },
  scientificButton: {
    backgroundColor: '#1c1c1e',
  },
  memoryButton: {
    backgroundColor: '#4d4d4d',
  },
  memoryButtonText: {
    color: '#fff',
  },
  parenthesisButton: {
    backgroundColor: '#3a3a3c',
  },
});
