import sum from './test';
import './styles/main.scss';
import calvin from './assets/calvin.jpeg';

const calvinImg = document.getElementById('img');
calvinImg.src = calvin;

const testSum = sum(1)(2)(3)();

console.log(testSum);
