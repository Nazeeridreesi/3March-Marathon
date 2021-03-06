import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Store} from './store.js'
import {App} from './components/calculator.jsx'


ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>
    ,document.getElementById("content"));
