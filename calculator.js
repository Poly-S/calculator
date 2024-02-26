const readlineSync = require('readline-sync');

const calculator = {
  a: null,
  b: null,
  
  read: function() {
    this.a = parseFloat(readlineSync.question('Введите значение a: '));
    this.b = parseFloat(readlineSync.question('Введите значение b: '));
  },
  
  sum: function() {
    return this.a + this.b;
  },
  
  mul: function() {
    return this.a * this.b;
  }
};

console.log('--- Калькулятор ---');
calculator.read();
console.log('Сумма: ', calculator.sum());
console.log('Произведение: ', calculator.mul());
