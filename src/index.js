import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App';
import storeFactory from './redux/stores/store.js'
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

const render = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
registerServiceWorker()
