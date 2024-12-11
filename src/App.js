import React from 'react';
import calvinImg from './assets/calvin.webp';
import './styles/main.scss';
export default function App() {
  return (
    <div class='container'>
      <img id='img' class='img' src={calvinImg} />
      <h1 class='title'>Title</h1>
    </div>
  );
}
