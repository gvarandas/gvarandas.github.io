import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
registerServiceWorker();
