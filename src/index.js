import React from 'react';
import ReactDOM from 'react-dom';
// import  './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Countetr from './components/counter';

ReactDOM.render(<Countetr />, document.getElementById('root'));
registerServiceWorker();