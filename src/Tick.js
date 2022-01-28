import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';

function Tick() {
  ReactDOM.render(
    //<Clock date={new Date()} />,document.getElementById('root')
  );
}

setInterval(Tick, 1000);

export default Tick;
