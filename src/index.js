import React from 'react';
import ReactDOM from 'react-dom';
import DragonsOfMugloar from './components/DragonsOfMugloar';
import * as serviceWorker from './components/serviceWorker';
import './styles/index.css';

ReactDOM.render(<DragonsOfMugloar />, document.getElementById('root'));
serviceWorker.unregister();
