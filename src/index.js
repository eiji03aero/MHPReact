import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeFactory from './redux/stores/store.js'
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
registerServiceWorker()
