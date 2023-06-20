console.clear();
console.log('wazeeee');

const calculatorDOM = document.querySelector('main');
// const numbersDOM = calculatorDOM.querySelectorAll('[data-numbers]')
const oneDOM = calculatorDOM.querySelector('.one-btn');//1
const twoDOM = calculatorDOM.querySelector('.two-btn');//2
const threeDOM = calculatorDOM.querySelector('.three-btn');//3
const fourDOM = calculatorDOM.querySelector('.four-btn');//4
const fiveDOM = calculatorDOM.querySelector('.five-btn');//5
const sixDOM = calculatorDOM.querySelector('.six-btn');//6
const sevenDOM = calculatorDOM.querySelector('.seven-btn');//7
const eigthDOM = calculatorDOM.querySelector('.eigth-btn');//8
const nineDOM = calculatorDOM.querySelector('.nine-btn');//9
const zeroDOM = calculatorDOM.querySelector('.zero-btn');//0
const acDOM = calculatorDOM.querySelector('.ac-btn');//ac-clear-one
const cDOM = calculatorDOM.querySelector('.c-btn');//ac-clear-one
const percentageDOM = calculatorDOM.querySelector('.percentage-btn');
const divideDOM = calculatorDOM.querySelector('.divide-btn');
const multiDOM = calculatorDOM.querySelector('.multi-btn');
const minusDOM = calculatorDOM.querySelector('.minus-btn');
const plusDOM = calculatorDOM.querySelector('.plus-btn');
const pointDOM = calculatorDOM.querySelector('.point-btn');
const equalDOM = calculatorDOM.querySelector('.equal-btn');

const mathDOM = calculatorDOM.querySelector('.math');

let lengthCounter = '';

oneDOM.addEventListener('click', () => {
    mathDOM.textContent = lengthCounter += '1';
});
twoDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '2';
});
threeDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '3';
});
fourDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '4';
});
fiveDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '5';
});
sixDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '6';
});
sevenDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '7';
});
eigthDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '8';
});
nineDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '9';
});
zeroDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '0';
});
acDOM.addEventListener('click', () => {
    mathDOM.textContent = lengthCounter = lengthCounter.slice(0, lengthCounter.length - 1);
});
cDOM.addEventListener('click', () => {
    mathDOM.textContent = lengthCounter = '';
});
percentageDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '%';
 });
 plusDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '+';
 });
 minusDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '-';
 });
 pointDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '.';
 });
 multiDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '*';
 });
 divideDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '/';
 });
 equalDOM.addEventListener('click', () => {
     mathDOM.textContent = lengthCounter += '=';
 });