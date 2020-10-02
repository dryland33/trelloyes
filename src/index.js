import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';

let bindThis = <App store={store} />;
let toThat = document.getElementById('root');

ReactDOM.render(bindThis, toThat);