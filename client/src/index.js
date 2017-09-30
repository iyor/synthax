import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import Login from './components/Login'
import reducers from './reducers/'
import styles from './styles/main.less';
import { HashRouter, Switch, Link, Route } from 'react-router-dom';

'use strict';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({})

render(
  <Provider store = {store}>
    <HashRouter >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/synth" component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('content')
)
