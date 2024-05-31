function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'На ноль делить нельзя';
        }
        break;
      default:
        result = 'Выберите операцию';
    }
  
    document.getElementById('result').innerText = `Результат: ${result}`;
  }