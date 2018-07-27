import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reducer from './store/reducer';

const enhancers=compose(
    window.devToolsExtension?window.devToolsExtension():f=>f
)

const store=createStore(reducer,enhancers);
const app=(
    <Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
