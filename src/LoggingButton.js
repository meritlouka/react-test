import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Toggle from './Toggle';

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <>
      "hhhhhhhhhhhhhh"
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
      </>
    );
  }
}
export default LoggingButton;
